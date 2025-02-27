import React from "react";
import { useNavigate } from "react-router-dom";  // Import Link from react-router-dom

const Context = () => {

  const navigate= useNavigate()
  return (
    <div className="centered">
      <h1>Context Page</h1>
      <div className="contact-form">
        <button onClick={() => navigate('info')}>Contact info</button>

        <button onClick={() => navigate('form')}>Contact info</button>
      </div>
    </div>
  );
};

export default Context;