import './Navbar.scss'
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
// import GridViewIcon from '@mui/icons-material/GridView'
// import SearchIcon from '@mui/icons-material/Search'
// import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined'
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
// import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import { Link, useNavigate } from 'react-router-dom'
import { checkUserLogin, getAuthUser, isAdminFunction, logout } from '../../helpers/functions'
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Navbar = () => {
  const user = getAuthUser();
  const navigate = useNavigate();
 const [isBurger, setIsBurger] = useState(false);

  return (
    <div className='navbar'>
        <div className="left">
            <Link to='/' style={{textDecoration: 'none'}}>

            <span style={{display:"flex", alignItems:"center"}}>       
                       <img style={{ width:"40px"}} src='https://cdn-icons-png.flaticon.com/512/2424/2424317.png' alt="person" />
    <div>
      Social
      </div>
      
   </span>
            </Link>
            <div  className='burger'><MenuIcon onClick={()=>setIsBurger(true)} /></div>
            {isBurger && 
            <div className='burgerContent'>
              <ul>
                <Link to='/'><li onClick={()=>setIsBurger(false)}>Home</li></Link>
                <Link to={`/profile/${user.id}`}><li onClick={()=>setIsBurger(false)}>Profile</li></Link>
                <Link to='/users'><li onClick={()=>setIsBurger(false)}>Users</li></Link>
                <Link to='/games'><li onClick={()=>setIsBurger(false)}>Games</li></Link>
              </ul>
            </div>
            }
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
            
            <StarBorderPurple500Icon onClick={()=>navigate('/favorites-list')} fontSize='large'/>
            <ShoppingCartIcon onClick={()=>navigate('/cart')} style={{cursor: 'pointer'}} />
            {isAdminFunction() && <button onClick={()=>navigate('/create-card')} className='createBtn'>Create card</button>}
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