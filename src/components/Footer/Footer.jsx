import React from "react";
import Logo from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="first-row">
        <div className="footer-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="social-icons">
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-square-instagram"></i>
          <i className="fa-brands fa-square-behance"></i>
          <i className="fa-brands fa-square-twitter"></i>
        </div>
      </div>
      <div className="last-row">
        <div className="footer-link">
          <h3>Project</h3>
          <ul>
            <li>
              <a href="">Changelog</a>
            </li>
            <li>
              <a href="">Status</a>
            </li>
            <li>
              <a href="">License</a>
            </li>
            <li>
              <a href="">All Versions</a>
            </li>
          </ul>
        </div>
        <div className="footer-link">
          <h3>Community</h3>
          <ul>
            <li>
              <a href="">GitHub</a>
            </li>
            <li>
              <a href="">Issues</a>
            </li>
            <li>
              <a href="">Project</a>
            </li>
            <li>
              <a href="">Twitter</a>
            </li>
          </ul>
        </div>
        <div className="footer-link">
          <h3>Help</h3>
          <ul>
            <li>
              <a href="">Support</a>
            </li>
            <li>
              <a href="">Troubleshooting</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-link">
          <h3>Others</h3>
          <ul>
            <li>
              <a href="">Terms of Service</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">License</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
