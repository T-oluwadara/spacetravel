import React from "react";
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-cont">
        <div className="left">
          <div className="location">
            <FaSearchLocation size={20} style={{ color: "#ffff", marginRight: "2rem" }} />

            <div>
              <p>123 Henessy Blvd.</p>
              <h4>Osapa, Lagos</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "#ffff", marginRight: "2rem" }} /> +2349097634646
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ color: "#ffffff", marginRight: "2rem" }} /> trips@spacetrvl.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About the company</h4>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"</p>
          <div className="social">
            <FaFacebook size={30} style={{ color: "#ffffff", marginRight: "1rem" }} />
            <FaTwitter size={30} style={{ color: "#ffffff", marginRight: "1rem" }} />
            <FaLinkedin size={30} style={{ color: "#ffffff", marginRight: "1rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
