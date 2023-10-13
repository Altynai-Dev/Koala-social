import "./Navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { Link, useNavigate } from "react-router-dom";
import { checkUserLogin, getAuthUser } from "../../helpers/function";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Navbar = () => {
  const navigate = useNavigate();

  const userName = getAuthUser();

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Koala Social</span>
        </Link>
        <HomeOutlinedIcon onClick={() => navigate('/')} style={{cursor:'pointer'}}/>
        <GridViewIcon />
        <div className="search">
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <AddShoppingCartIcon onClick={() => navigate("/cart")} />
        <Person2OutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        {checkUserLogin() ? (
          <div className="user">
            <img
              src="https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg"
              alt="person"
            />
            <h3>{userName}</h3>
          </div>
        ) : (
          <div className="user">
            <button onClick={() => navigate("/register")}>SIGN UP</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
