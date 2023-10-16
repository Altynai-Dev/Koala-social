import './Navbar.scss'
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
// import GridViewIcon from '@mui/icons-material/GridView'
// import SearchIcon from '@mui/icons-material/Search'
// import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined'
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
// import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import { Link, useNavigate } from 'react-router-dom'
import { checkUserLogin, getAuthUser, logout } from '../../helpers/functions'
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';


const Navbar = () => {
  const user = getAuthUser();
  const navigate = useNavigate();
  return (
    <div className='navbar'>
        <div className="left">
            <Link to='/' style={{textDecoration: 'none'}}>
            <span>Koala Social</span>
            </Link>
            {/* <HomeOutlinedIcon />
            <GridViewIcon /> */}
            {/* <div className='search'>
            <SearchIcon />
            <input type='text' placeholder='Search...' />
            </div> */}
        </div>
        <div className="right">
            {/* <Person2OutlinedIcon />
            <EmailOutlinedIcon />
            <NotificationsOutlinedIcon /> */}
            <div className='user'>
                <img src='https://cdn-icons-png.flaticon.com/512/2424/2424317.png' alt="person" />
                <span>{user.username}</span>
            </div>
            {checkUserLogin() ? (
              <button style={{border:"none", cursor:"pointer", backgroundColor:"white"}} 
              onClick={()=>{
                logout()
                navigate('/login')
              }}>
              <LogoutIcon />
              </button>
            ):(
              <button style={{border:"none", cursor:"pointer", backgroundColor:"white"}}
              onClick={()=>{
                navigate('/login')
              }}>
              <LoginIcon />
              </button>
            )}  
        </div>
    </div>
  )
}

export default Navbar