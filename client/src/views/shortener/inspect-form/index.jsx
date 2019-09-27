import React, { useState } from "react";
import { Button, Input } from "../../../components";
import { getRoute } from "../../../helpers/routes";
import routes from "../../../config/routes";
import "./styles.scss";

function InspectFormShortener({ history }) {
  const [shortenerId, setShortenerId] = useState("");

  function handleGoToTracking(event) {
    event.preventDefault();
    let route = getRoute(["shortener", "inspect"], routes);
    route = route.replace(":shortenerId", shortenerId);
    history.push(route);
  }

  return (
    <div className="view view__container">
      <form onSubmit={handleGoToTracking} className="form form__container">
        <div className="form__header">
          <div className="form__title">
            <p>inspect form</p>
          </div>
        </div>
        <div className="form__inputs">
          <Input
            className="form__input"
            value={shortenerId}
            type="text"
            required
            onChange={value => setShortenerId(value.target.value)}
            placeholder="add shortenerId"
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
