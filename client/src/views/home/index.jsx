import React from "react";
import { Button } from "../../components";
import "./styles.scss";

function Home({ history }) {
  return (
    <div className="view view__container home">
      <div className="home__box">
        <div className="home__header">
          <h1>WELCOME TO LZIP.IO</h1>
        </div>
        <div className="home__explanation">
          <p>you can create a shortener that resolves to many url</p>
        </div>
        <div className="animation__container">
          <div className="animation__box">
            <div className="animation__shortener"></div>
            <div className="animation__links">
              <span className="animation__link">yahoo.com</span>
              <span className="animation__link">google.com</span>
              <span className="animation__link">lanacion.com</span>
              <span className="animation__link">pornhub.com</span>
              <span className="animation__link">lzip.io</span>
            </div>
          </div>
        </div>
        <div className="home__call-to-action">
          <Button onClick={() => history.push("/shortener/create")}>
            create shortener
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
