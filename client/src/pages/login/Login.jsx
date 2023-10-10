import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  return (
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
            <input type="text" placeholder='Username' />
            <input type='password' placeholder='Password' />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login