import React from "react";
import { Button } from "../../components";
import "./styles.scss";

function NotFound() {
  function goHome() {
    window.location.replace("/");
  }

  return (
    <div className="view view__container not-found">
      <p className="not-found__message">Not found &#129300;</p>
      <p className="not-found__explanation">
        sorry, we couldn't find the url that you typed
      </p>
      <Button onClick={goHome}>go home</Button>
    </div>
  );
}

export default NotFound;
