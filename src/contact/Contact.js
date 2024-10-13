import React from "react";
import ContactMenu from "./ContactMenu"; // Existing component
import "../styles/contact.css"; // Ensure this path matches your project structure
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome icons

const Contact = () => {
  return (
    <div className="contact-container">
      <ContactMenu /> {/* Existing form content */}

      {/* Social Icons Section at the Bottom Center */}
      <div className="social-icons-bottom-center">
        <a href="https://github.com/kunal1018" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/kunal-gandhi-9349852a0" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/yourInstagramHandle" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="mailto:kunalgandhi182005@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
