import React, { useState } from "react";
import { Button, Input } from "../../../components";
import { getRoute } from "../../../helpers/routes";
import routes from "../../../config/routes";

function InspectFormShortener({ history }) {
  const [shortenerId, setShortenerId] = useState("");

  function handleGoToTracking() {
    let route = getRoute(["shortener", "inspect"], routes);
    route = route.replace(":shortenerId", shortenerId);
    history.push(route);
  }

  return (
    <div>
      <p>inspect form</p>
      <Input
        value={shortenerId}
        onChange={value => setShortenerId(value.target.value)}
        placeholder="add shortenerId"
      />
      <Button onClick={handleGoToTracking}>inspect shortener</Button>
    </div>
  );
}

export default InspectFormShortener;
