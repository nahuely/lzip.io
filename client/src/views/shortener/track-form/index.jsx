import React, { useState } from "react";
import { Button, Input } from "../../../components";
import { getRoute } from "../../../helpers/routes";
import routes from "../../../config/routes";
import "./styles.scss";

function TrackFormShortener({ history }) {
  const [shortenerURL, setShortenerURL] = useState("");

  function handleGoToTracking(event) {
    event.preventDefault();

    //TODO: refactor and extract this parsing because its being used in inspect form also
    let parsedUrl = new URL(shortenerURL);
    let { pathname } = parsedUrl;
    let params = pathname.split("/").filter(Boolean);
    let shortenerId = params[params.length - 1];

    let route = getRoute(["shortener", "track"], routes);
    route = route.replace(":shortenerId", shortenerId);
    history.push(route);
  }

  return (
    <div className="view view__container">
      <form onSubmit={handleGoToTracking} className="form form__container">
        <div className="form__header">
          <div className="form__title">
            <p>track shortener</p>
          </div>
          <div className="form__explanation">
            <p>
              check how many views have your <br /> shortener and from where
            </p>
          </div>
        </div>
        <div className="form__inputs">
          <Input
            className="form__input"
            value={shortenerURL}
            required
            type="url"
            onChange={value => setShortenerURL(value.target.value)}
            placeholder="Ex: http://r.localhost:8080/PvoeQ"
          />
        </div>
        <div className="form__controls">
          <Button type="submit">track shortener</Button>
        </div>
      </form>
    </div>
  );
}

export default TrackFormShortener;
