import React from "react";
import "./style.scss";

const Button = ({ children, className = "", ...props }) => {
  const classes = ["button", ...className.split(" ")];
  return (
    <button className={classes.join(" ")} {...props}>
      {children}
    </button>
  );
};

export default Button;
