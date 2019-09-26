import React from "react";
import { useFetch } from "../../../hooks";
import { Loader, Button } from "../../../components";
import "./styles.scss";

function TrackShortener({ match, history }) {
  const shortenerId = match.params.shortenerId;
  const [loader, error, data] = useFetch(
    `http://analytics.localhost:8080/api/stats/${shortenerId}`
  );

  return (
    <div className="view view__container">
      {loader ? (
        <Loader />
      ) : error ? (
        <div className="error-display error-display__container">
          <div className="error-display__message">
            <p>{error.message}</p>
          </div>
          <div className="error-display__action">
            <Button onClick={() => history.goBack()}>Try again</Button>
          </div>
        </div>
      ) : (
        <div>
          <p>{data.count}</p>
        </div>
      )}
    </div>
  );
}

export default TrackShortener;
