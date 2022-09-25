import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <div>404</div>
      <Link to="/">To Home</Link>
    </div>
  );
};
