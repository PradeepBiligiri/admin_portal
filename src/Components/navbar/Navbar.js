import "./Navbar.scss";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import TranslateSharpIcon from "@mui/icons-material/TranslateSharp";
import DarkModeSharpIcon from "@mui/icons-material/DarkModeSharp";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search...." />
          <SearchSharpIcon />
        </div>
        <div className="items">
          <div className="item">
            <TranslateSharpIcon className="icon" />
            ENGLISH
          </div>
          <div className="item">
            <DarkModeSharpIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <EmailIcon className="icon" />
            <div className="counter">4</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://wallpapers.com/images/hd/cool-profile-picture-ld8f4n1qemczkrig.jpg"
              alt="Profile pic"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
