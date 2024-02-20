import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const toggleMenu = () => {
    setMenuIcon(!menuIcon);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <a href="#">
            <img src={Logo} alt="" />
          </a>
        </div>
        <div onClick={toggleMenu} className="menu-icons">
          <i className={menuIcon ? "fas fa-close" : "fas fa-bars"} />
        </div>
        <ul className={menuIcon ? "navbar-item active" : "navbar-item"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.className} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button className="signupBtn" onClick={handleClick}>
            Sign up
          </button>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
