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
        <div className="shortener-details">
          <p className="shortener-details__id">
            The shortener id is: <span>{data.hash}</span>
          </p>
          <p className="shortener-details__description">
            The description is: <span>"{data.description}"</span>
          </p>
          <p className="shortener-details__links">
            The shortener resolves to this urls:
          </p>
          {data.urls.map((url, index) => (
            <div className="shortener-details__link" key={index}>
              <span>{`${index + 1}) `}</span>
              <a href={url} target="_blank">
                {url}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default InspectShortener;
