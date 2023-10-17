import './Leftbar.scss'
import Friends from "../../assets/images/1.png"
import Groups from "../../assets/images/2.png"
import MarketPlace from "../../assets/images/3.png"
import Watch from "../../assets/images/4.png"
import Memories from "../../assets/images/5.png"
import Events from "../../assets/images/6.png"
import Games from "../../assets/images/7.png"
import Gallery from "../../assets/images/8.png"
import Videos from "../../assets/images/9.png"
import Messages from "../../assets/images/10.png"
import Tutorials from "../../assets/images/12.png"
import Courses from "../../assets/images/13.png"
import { getAuthUser } from '../../helpers/functions'
import { Link } from 'react-router-dom'

const Leftbar = () => {
  const user = getAuthUser();
  return (
    <div className='leftBar'>
      <div className="container">
        <div className="menu">
          
          <div className='user'>
            <Link to={`/profile/${user.id}`} style={{textDecoration:"none", color: "black", display:"flex", alignItems:'center', justifyContent:'center', gap:"8px", fontWeight:"bold" }}>
            {/* <img src={"/upload/"+user.profilePic} alt="person" /> */}
            <img src='https://cdn-icons-png.flaticon.com/512/2424/2424317.png' alt="koala" />
            <span>{user.username}</span>
            </Link>
          </div>
          {/* <Link to={'/friends'} style={{textDecoration:"none", color: "black"}}>
          <div className="item">
            <img src={Friends} alt="friends icon" />
            <span>Friends</span>
          </div>
          </Link> */}
          <Link to={"/users"} style={{textDecoration:"none", color: "black"}}>
          <div className="item">
            <img src={Groups} alt="groups icon" />
            <span>Users</span>
          </div>
          </Link>
          <Link to={'/games'} style={{textDecoration:"none", color: "black"}}>
          <div className="item">
            <img src={Games} alt="games icon" />
            <span>Games</span>
          </div>
          </Link>
          {/* <div className="item">
            <img src={MarketPlace} alt="marketplace icon" />
            <span>Groups</span>
          </div> */}
          {/* <div className="item">
            <img src={Watch} alt="watch icon" />
            <span>Watch</span>
          </div> */}
          {/* <div className="item">
            <img src={Memories} alt="memories icon" />
            <span>Memories</span>
          </div> */}
        </div>
        <hr></hr>
        <div className="menu">
          <span>Your shortcarts</span>
          <div className="item">
            <img src={Events} alt="events icon" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="gallery icon" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="videos icon" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="messages icon" />
            <span>Messages</span>
          </div>
        </div>
        <hr></hr>
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Tutorials} alt="tutorials icon" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="courses icon" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leftbar