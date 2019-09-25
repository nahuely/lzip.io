import React, { useState } from "react";
import { Button, Input } from "../../../components";
import { getRoute } from "../../../helpers/routes";
import routes from "../../../config/routes";

function TrackFormShortener({ history }) {
  const [shortenerId, setShortenerId] = useState("");

  function handleGoToTracking() {
    let route = getRoute(["shortener", "track"], routes);
    route = route.replace(":shortenerId", shortenerId);
    history.push(route);
  }

  return (
    <div>
      <p>track form</p>
      <Input
        value={shortenerId}
        onChange={value => setShortenerId(value.target.value)}
        placeholder="add shortenerId"
      />
      <Button onClick={handleGoToTracking}>track shortener</Button>
    </div>
  );
}

export default TrackFormShortener;
