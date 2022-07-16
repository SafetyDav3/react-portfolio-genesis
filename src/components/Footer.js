import React from "react";
import { BsGithub, BsLinkedin, BsStackOverflow } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="footer-icons">
        <BsGithub className="footer-icon" />
        <BsLinkedin className="footer-icon" />
        <BsStackOverflow className="footer-icon" />
      </div>  
    </div>
  );
};

export default Footer;
