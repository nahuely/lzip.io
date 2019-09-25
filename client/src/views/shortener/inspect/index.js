import React from "react";
import { useFetch } from "../../../hooks";

function InspectShortener({ match }) {
  const shortenerId = match.params.shortenerId;
  const [loader, error, data] = useFetch(
    `http://localhost:8080/api/shortener/inspect/${shortenerId}`
  );

  if (loader) return <div>loading...</div>;

  if (error) return <div>error</div>;

  console.log(data);

  return (
    <div>
      <p>the shortener id is {data.hash}</p>
      <p>the description is {data.description}</p>
      <p>the shortener resolves to this urls</p>
      {data.urls &&
        data.urls.map(url => (
          <a href={url} target="_blank">
            {url}
          </a>
        ))}
    </div>
  );
}

export default InspectShortener;
