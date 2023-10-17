import { useNavigate } from 'react-router-dom';
import './User.scss'
import PlaceIcon from '@mui/icons-material/Place';
const User = ({user}) => {
  const navigate = useNavigate();
    return (
        <div className="uInfo" onClick={()=>navigate(`/profile/${user.id}`)}>
            <div>
            <img src={'/upload/' + user.profilePic} alt='pic' />
            </div>
            <div>

            <div>{user.name}</div>
            <div><PlaceIcon fontSize='small'/>{user.city}</div>
            </div>
            {/* <div className="buttons">
              <button className='btn'>follow</button>
            </div> */}
        </div>
  )
}

export default User