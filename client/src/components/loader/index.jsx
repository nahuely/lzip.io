import React from "react";
import "./styles.scss";

function Loader() {
  return (
    <div className="loader loader__layover">
      <p className="loader__spinner">processing ...</p>
    </div>
  );
}

export default Loader;
