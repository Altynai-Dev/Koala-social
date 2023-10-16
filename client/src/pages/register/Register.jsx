import { Link, useNavigate } from 'react-router-dom';
import './Register.scss';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { clearStatusState } from '../../store/account/accountSlice';
import { registerAccount } from '../../store/account/accountActions';


const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const {loading, status} = useSelector((state) => state.account);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(clearStatusState())
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch(registerAccount(user));
    navigate('/login');
  };


  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          {
            status ? (
              <div>
                <h3>An error occured!</h3>
                <button onClick={() => dispatch(clearStatusState())}>Try again!</button>
              </div>
            ) : (
              <div className='register'>
                <div className="card">
                  <div className="left">
                    <h1>Koala Social</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere iure architecto quo maxime, atque, consequatur ut dolor sint fugit quos ratione quis! Aperiam totam perferendis a voluptatem temporibus laboriosam iste.</p>
                    <span>Do you have an account?</span>
                    <Link to="/login">
                      <button>Login</button>
                    </Link>
                  </div>
                  <div className="right">
                    <h1>Register</h1>
                    <form>
                      <input type="text" placeholder='Username' name='username' onChange={(e) => setUser({ ...user, username: e.target.value })} />

                      <input type='email' placeholder='Email' name='email'
                        onChange={(e) => setUser({ ...user, email: e.target.value })} />

                      <input type='password' placeholder='Password' name='password'
                        onChange={(e) => setUser({ ...user, password: e.target.value })} />

                      <input type="text" placeholder="Name" name="name"
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                      />
                      <button onClick={handleClick}>Register</button>
                    </form>
                  </div>
                </div>
              </div>
            )
          }
        </>
      )}
    </>
  )
}

export default Register;