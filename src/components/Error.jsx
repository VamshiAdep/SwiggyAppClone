
import React from "react";
import { useRouteError } from "react-router-dom";

import '../Stylecomponents/error.css';
const Error = () => {
  const err = useRouteError();
  console.log(err);
  
  return (
    <div className="error-container">
      <h1>Oops, something went wrong!</h1>
      <div className="error-message">We're sorry for the inconvenience.</div>
      <div className="error-details">
        {err?.message || 'Error details not available.'}
      </div>
    </div>
  );
};

export default Error;
