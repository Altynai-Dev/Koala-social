import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearStatusState } from '../../store/account/accountSlice';
import { loginAcoount } from '../../store/account/accountActions';

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  })

  const {loading, status} = useSelector((state)=>state.account);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(clearStatusState())
  }, []);

  const handleLogin = (e) =>{
    e.preventDefault();
    dispatch(loginAcoount({user, navigate}));
  }
  return (
    <>
      {
        loading ? (
          <h3>Loading...</h3>
        ) : (
          <>
            {status ? (
              <div>
                <h3>Wrong username or password!</h3>
                <button onClick={() => dispatch(clearStatusState())}>Try again!</button>
              </div>
            ) : (
              <div className='login'>
                <div className="card">
                  <div className="left">
                    <h1>Welcome to Koala Social</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere iure architecto quo maxime, atque, consequatur ut dolor sint fugit quos ratione quis! Aperiam totam perferendis a voluptatem temporibus laboriosam iste.</p>
                    <span>Don't have an account?</span>
                    <Link to='/register'>
                      <button>Register</button>
                    </Link>
                  </div>
                  <div className="right">
                    <h1>Login</h1>
                    <form>
                      <input type="text" placeholder='Username' name='username' onChange={(e) => setUser({ ...user, username: e.target.value })} />
                      <input type='password' placeholder='Password' name='password' onChange={(e) => setUser({ ...user, password: e.target.value })} />
                      <button onClick={handleLogin}>Login</button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </>
        )
      }
    </>
  );
}

export default Login