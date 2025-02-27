import React from "react";


const ContactForm = () => {
  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>

        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Enter your message" required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
