import React from "react";
import "./style.scss";

const Input = ({ className = "", ...props }) => {
  const classes = ["input", ...className.split(" ")];
  return <input className={classes.join(" ")} {...props} />;
};

export default Input;
