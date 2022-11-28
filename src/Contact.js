import React from "react";
import "./Contact.css";

function Contact({ icon, text }) {
  return (
    <div className="contact">
      <img src={icon} alt="" className="contact__icon"></img>
      <div className="contact__text">{text}</div>
    </div>
  );
}

export default Contact;
