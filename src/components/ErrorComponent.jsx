// ErrorComponent.js
import React from 'react';
import '../style/error.css';
import { BiSolidErrorCircle } from "react-icons/bi"

const ErrorComponent = ({ message }) => {
  return (
    <div className="error-container">
      <BiSolidErrorCircle color='#3498db' size={63}/>
      <p className="error-message">{ `${message}, Please try again.`}</p>
    </div>
  );
};

export default ErrorComponent;
