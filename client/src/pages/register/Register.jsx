import { Link } from 'react-router-dom';
import './Register.scss';

const Register = () => {
  return (
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
            <input type="text" placeholder='Username' />
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;