import React from "react";
import "../../../Styles/NavBar.css";
import {
  TrueLogo,
  DasboardIcon,
  OrderIcon,
  UserIcon,
  SettingIcon,
  SearchIcon,
  AddIcon,
  ProfileIcon
} from "../../../Assets";
import { Link } from "react-router-dom";
function Header() {
  const list = [
    { name: "Dashboard", to: "/dashboard", icon: DasboardIcon },
    {
      name: "Users",
      to: "/users",
      icon: UserIcon,
    },
    { name: "Orders", to: "/users", icon: OrderIcon },
    { name: "Settings", to: "/users", icon: SettingIcon },
  ];
  const handle_list = () => {};
  return (
    <div className="main_div">
      <div className="sidebar">
        <div className="upper_div">
          <img className="logo" src={TrueLogo} />
        </div>
        <div className="lower_div">
          {list.map((e) => {
            return (
              <div className="adding_list">
                <Link to={e.to} className="link_tag" onClick={handle_list}>
                  <img src={e.icon} />
                  <p>{e.name}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <nav className="nav_bar">
        <div className="search_div">
          <img style={{ width: "50px" , height:"50px" }} src={SearchIcon} />
          <input className="search_bar" placeholder="Search.." />
        </div>
        <div className="create_div">
          <button className="create_button">
            <img style={{width: "18px",height:"18px"}} src={AddIcon} />
            <p>Create</p>
          </button>
          <div className="profile_section">
            <div className="profile_container">
              <p>Sunil Goutham</p>
              <p id="one">Full Stack Developer</p>
            </div>
            <div className="image_container">
              {/* <img src={ProfileIcon}/> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
