import React from "react";


const ContactInfo = () => {
  return (
    <div className="contact-container">
      <h2>Contact Information</h2>
      <div className="contact-item">
        <strong>Email:</strong> <a href="mailto:example@email.com">example@email.com</a>
      </div>
      <div className="contact-item">
        <strong>Phone:</strong> <a href="tel:+123456789">+1 234 567 89</a>
      </div>
      <div className="contact-item">
        <strong>Address:</strong> 123 Main Street, City, Country
      </div>
    </div>
  );
};

export default ContactInfo;
