import React from "react";
import ContactMenu from "./ContactMenu"; // Existing component
import "../styles/contact.css"; // Ensure this path matches your project structure
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome icons

const Contact = () => {
  return (
    <div className="contact-container">
      <ContactMenu /> {/* Existing form content */}

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
    </div>
  );
};

export default Contact;
