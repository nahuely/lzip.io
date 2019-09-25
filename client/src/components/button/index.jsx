import React from "react";
import "./style.scss";

const Button = ({ children, ...props }) => (
  <button className="button" {...props}>
    {children}
  </button>
);

export default Button;
