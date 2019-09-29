import React from "react";
import "./style.scss";

const Input = ({ className = "", onRemove, ...props }) => {
  return (
    <div className={className} style={{ position: "relative" }}>
      <input className="input" {...props} />
      {onRemove && (
        <div className="input__on-remove" onClick={onRemove}>
          <div />
        </div>
      )}
    </div>
  );
};

export default Input;
