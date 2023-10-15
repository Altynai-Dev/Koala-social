import './Navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import GridViewIcon from '@mui/icons-material/GridView'
import SearchIcon from '@mui/icons-material/Search'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import { Link } from 'react-router-dom'
import { getAuthUser } from '../../helpers/functions'


const Navbar = () => {
  const user = getAuthUser();
  return (
    <div className='navbar'>
        <div className="left">
            <Link to='/' style={{textDecoration: 'none'}}>
            <span>Koala Social</span>
            </Link>
            {/* <HomeOutlinedIcon />
            <GridViewIcon /> */}
            <div className='search'>
            <SearchIcon />
            <input type='text' placeholder='Search...' />
            </div>
        </div>
        <div className="right">
            {/* <Person2OutlinedIcon />
            <EmailOutlinedIcon />
            <NotificationsOutlinedIcon /> */}
            <div className='user'>
                <img src={'/upload/'+user.profilePic} alt="person" />
                <span>{user.username}</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar