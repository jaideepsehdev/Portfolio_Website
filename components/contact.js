// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
// import contactButtonStyles from "../styles/contact.module.css";

// const ContactButton = () => {
//   return (
//     <div className={contactButtonStyles.contactButtonContainer}>
//       <a
//         href="mailto:jsa361@sfu.ca"
//         className={contactButtonStyles.contactLink}
//       >
//         <FontAwesomeIcon
//           icon={faEnvelope}
//           className={contactButtonStyles.icon}
//         />
//         Contact Me
//       </a>
//       <a href="tel:+12369994475" className={contactButtonStyles.contactLink}>
//         <FontAwesomeIcon icon={faPhone} className={contactButtonStyles.icon} />
//         Call Me
//       </a>
//     </div>
//   );
// };

// export default ContactButton;

// Footer.js

import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: jsa361@sfu.ca</p>
        <p>Phone: (236)-999-4475</p>
      </div>

      <div className="additional-info">
        <h3>Additional Information</h3>
        <p>Location: Vancouver, Canada</p>
        <p>Linkedin: Jaideep Sehdev</p>
        <p>Github: jaideepsehdev</p>
        {/* <p>Follow me on: <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a></p> */}
      </div>
    </footer>
  );
};

export default Footer;

