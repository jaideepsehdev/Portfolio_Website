import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import contactButtonStyles from "../styles/contact.module.css";

const ContactButton = () => {
  return (
    <div className={contactButtonStyles.contactButtonContainer}>
      <a
        href="mailto:jsa361@sfu.ca"
        className={contactButtonStyles.contactLink}
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          className={contactButtonStyles.icon}
        />
        Contact Me
      </a>
      <a href="tel:+12369994475" className={contactButtonStyles.contactLink}>
        <FontAwesomeIcon icon={faPhone} className={contactButtonStyles.icon} />
        Call Me
      </a>
    </div>
  );
};

export default ContactButton;
