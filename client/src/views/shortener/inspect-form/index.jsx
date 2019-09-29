import React, { useState } from "react";
import { Button, Input } from "../../../components";
import { getRoute } from "../../../helpers/routes";
import routes from "../../../config/routes";
import "./styles.scss";

function InspectFormShortener({ history }) {
  const [shortenerURL, setShortenerURL] = useState("");

  function handleGoToTracking(event) {
    event.preventDefault();

    let parsedUrl = new URL(shortenerURL);
    let { pathname } = parsedUrl;
    let params = pathname.split("/").filter(Boolean);
    let shortenerID = params[params.length - 1];

    let route = getRoute(["shortener", "inspect"], routes);
    route = route.replace(":shortenerId", shortenerID);
    history.push(route);
  }

  return (
    <div className="view view__container">
      <form onSubmit={handleGoToTracking} className="form form__container">
        <div className="form__header">
          <div className="form__title">
            <p>inspect shortener</p>
          </div>
          <div className="form__explanation">
            <p>
              check shortener details,
              <br /> like description and urls
            </p>
          </div>
        </div>
        <div className="form__inputs">
          <Input
            className="form__input"
            value={shortenerURL}
            type="url"
            required
            onChange={value => setShortenerURL(value.target.value)}
            placeholder="Ex: http://r.localhost:8080/PvoeQ"
          />
        </div>
        <div className="form__controls">
          <Button type="submit">inspect shortener</Button>
        </div>
      </form>
    </div>
  );
}

export default InspectFormShortener;
