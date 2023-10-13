import "./Leftbar.scss";
import Friends from "../../assets/images/1.png";
import Groups from "../../assets/images/2.png";
import MarketPlace from "../../assets/images/3.png";
import Watch from "../../assets/images/4.png";
import Memories from "../../assets/images/5.png";
import Events from "../../assets/images/6.png";
import Games from "../../assets/images/7.png";
import Gallery from "../../assets/images/8.png";
import Videos from "../../assets/images/9.png";
import Messages from "../../assets/images/10.png";
import Tutorials from "../../assets/images/12.png";
import Courses from "../../assets/images/13.png";
import { checkUserLogin, getAuthUser, logout, updateToken } from "../../helpers/function";
import { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Leftbar = () => {
  const navigate = useNavigate();
  const userName = getAuthUser()

  useEffect(() => {
    updateToken();
  }, []);



  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg"
              alt="person"
            />
          <span>{userName}</span>
            {checkUserLogin() ? (
              <button
                onClick={() => {
                  logout();
                  navigate('/')
                }}
              >
                Logout
              </button>
            ) : (
              <button onClick={() => navigate("/register")}>Register</button>
            )}
          </div>
          <div className="item">
            <img src={Friends} alt="friends icon" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="groups icon" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={MarketPlace} alt="marketplace icon" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Watch} alt="watch icon" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="memories icon" />
            <span>Memories</span>
          </div>
        </div>
        <hr></hr>
        <div className="menu">
          <span>Your shortcarts</span>
          <div className="item">
            <img src={Events} alt="events icon" />
            <span>Events</span>
          </div>
          <div className="item" onClick={() => navigate("/games")}>
            <img src={Games} alt="games icon" />
            <span>Games</span>
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
  );
};

export default Leftbar;
