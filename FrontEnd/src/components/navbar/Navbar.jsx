import React, { useContext, useState } from "react";
import "./navbar.css";
import logo from "../../assets/navbarImages/Logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/frontend_assets/assets";

const Navbar = ({ setLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
  
  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      // Delay scroll so Home page has time to mount
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
    setMenu(sectionId);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbarUpper">
          <div className="navbarUpperLeft">
            <div className="emailIcon">
              <i className="uil uil-envelope-upload"></i>
              <div className="email">Asifazhari32617@gmail.com</div>
            </div>
            <div className="numberIcon">
              <i className="uil uil-calling icon"></i>
              <div className="number">9368298776</div>
            </div>
          </div>
          <div className="navbarUpperRight">
            {!token ? (
              <button className="btn" onClick={() => setLogin(true)}>
                Sign In
              </button>
            ) : (
              <div className="navbar_profile">
                <img className="profile" src={assets.profile_icon} alt="" />
                <ul className="navprofile_dropdown">
                  <li onClick={() => navigate("/myorders")}>
                    <img src={assets.bag_icon} alt="" />
                    <p>Orders</p>
                  </li>
                  <hr />
                  <li onClick={logout}>
                    <img src={assets.logout_icon} alt="" />
                    <p>Logout</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="navbarLower">
          <div className="navbarLowerLeft">
            <Link to="/">
              <img src={logo} alt="logo Image" />
            </Link>
          </div>
          <div className="navbarLowerMiddle">
            <ul className={`nav_menu ${isMobileMenuOpen ? "open" : ""}`}>
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    scrollToSection("hero")
                    setMenu("home");
                    setIsMobileMenuOpen(false);
                  }}
                  className={menu === "home" ? "active_menu" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => {
                    setMenu("about");
                    setIsMobileMenuOpen(false);
                  }}
                  className={menu === "about" ? "active_menu" : ""}
                >
                  About
                </Link>
              </li>
              <li
                onClick={() => {
                  scrollToSection("category");
                  setIsMobileMenuOpen(false);
                  setMenu("category");
                }}
                className={menu === "category" ? "active_menu" : ""}
              >
                Category
              </li>
              <li>
                <Link
                  to="/policy"
                  onClick={() => {
                    setMenu("policy");
                    setIsMobileMenuOpen(false);
                  }}
                  className={menu === "policy" ? "active_menu" : ""}
                >
                  Policies
                </Link>
              </li>
              <li
                onClick={() => {
                  scrollToSection("footer");
                  setIsMobileMenuOpen(false);
                  setMenu("contact");
                }}
                className={menu === "contact" ? "active_menu" : ""}
              >
                Contact Us
              </li>
            </ul>
          </div>
          <div className="navbarLowerRight">
            <div className="nav_icon">
              <Link to="/cart">
                <i className="uil uil-shopping-cart-alt"></i>
              </Link>

              <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
            </div>
            <div
              className="hamburger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className="uil uil-bars"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
