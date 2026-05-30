import React from "react";
import "./footer.css";
import footerImg from "../../assets/footerImages/footerImg.png";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer_content">
        <div className="footer_content_left">
          <img src={footerImg} alt="" />
          <p>
            हमारे साथ हर खरीदारी आसान और ताज़ा होती है गुणवत्ता, सुविधा और समय
            की बचत – यही हमारा वादा है 24/7 सेवा, आपके शहर में सीधे दरवाज़े तक
            हमें चुने, क्योंकि हर ग्राहक हमारे परिवार का हिस्सा है!
          </p>
          <div className="footer_social">
            <a href="">
              <img src={assets.instagram_icon} alt="" />
            </a>
            <a href="">
              <img src={assets.facebook_icon} alt="" />
            </a>
            <a href="">
              <img src={assets.twitter_icon} alt="" />
            </a>
          </div>
        </div>
        <div className="footer_content_center">
          <h2>COMPANY</h2>
          <hr className="hr" />
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/policy">Our Policies</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/legal">Legal</Link>
            </li>
          </ul>
        </div>
        <div className="footer_content_right">
          <h2>CONTACT</h2>
          <hr className="hr" />
          <ul>
            <li>+91-9368298776</li>
            <li>contact@galimart.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer_copyright">
        Copyrights 2025 © GaliMart.in - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
