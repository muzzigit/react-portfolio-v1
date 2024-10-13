import React, { Component } from "react";
import Avatar from "../avatar/Avatar.js";
import AboutMenu from "./AboutMenu.js";
import "../styles/aboutMenu.css"; // Ensure your styles are properly linked.
import "@fortawesome/fontawesome-free/css/all.min.css";

export default class About extends Component {
  render() {
    return (
      <>
        <Avatar page="about" />
        <AboutMenu />

        {/* Social Icons Section at the Bottom Left */}
        <div className="social-icons-bottom-left">
          <a href="https://github.com/muzzigit" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/muzzi-khan" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/3mzz.i" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:kmuzzi16@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </>
    );
  }
}
