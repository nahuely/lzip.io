import React from "react";
import { useFetch } from "../../../hooks";
import { Loader, Button } from "../../../components";
import "./styles.scss";

function InspectShortener({ match, history }) {
  const shortenerId = match.params.shortenerId;
  const [loader, error, data] = useFetch(
    `http://localhost:8080/api/shortener/inspect/${shortenerId}`
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
          <p>
            the shortener id is: <span>{data.hash}</span>
          </p>
          <p>the description is: "{data.description}"</p>
          <p>the shortener resolves to this urls:</p>
          {data.urls &&
            data.urls.map((url, index) => (
              <a key={index} href={url} target="_blank">
                {url}
              </a>
            ))}
        </div>
      )}
    </div>
  );
}

export default InspectShortener;
