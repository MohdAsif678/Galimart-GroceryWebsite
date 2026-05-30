import React from "react";
import "./navbar.css";
import { assets } from "../../assets/assets.js";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="" />
     <div className="right">
       <h2>Admin Panel</h2>
      <img className="profile" src={assets.profile_image} alt="" />
     </div>
    </div>
    
  );
};

export default Navbar;
