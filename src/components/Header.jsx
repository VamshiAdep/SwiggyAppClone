import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Stylecomponents/header.css';
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");

  const onlineStatus=useOnlineStatus()
  
  const handleLoginEvents = () => {
    setBtnLogin(btnLogin === "Login" ? "Logout" : "Login");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="App Logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            
           Online Status: {onlineStatus ? "🟢" : "🔴"}
           
          </li>
          <li>
            <Link to="/" className="noLinkStyle">Home</Link>
          </li>
          <li>
            <Link to="/about" className="noLinkStyle">About Us</Link>
          </li>
          <li>
            <Link to="/contactus" className="noLinkStyle">Contact Us</Link>
          </li>
          <li ><Link className="noLinkStyle" to="/cart">Cart</Link></li>
          <button
            className="loginButton"
            onClick={handleLoginEvents}
            aria-label={
              btnLogin === "Login"
                ? "Login to your account"
                : "Logout of your account"
            }
          >
            {btnLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
