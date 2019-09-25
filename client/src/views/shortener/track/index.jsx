import React from "react";
import { useFetch } from "../../../hooks";

function TrackShortener({ match }) {
  const shortenerId = match.params.shortenerId;
  const [loader, error, data] = useFetch(
    `http://analytics.localhost:8080/api/stats/${shortenerId}`
  );

  if (loader) return <div>loading...</div>;

  if (error) return <div>error</div>;

  console.log(data);

  return (
    <div>
      <p>{data.count}</p>
    </div>
  );
}

export default TrackShortener;
