import React, { useState, useEffect } from "react";

function TrackShortener({ match }) {
  const [count, setCount] = useState(0);
  const [loader, setLoader] = useState(false);
  const shortenerId = match.params.shortenerId;

  useEffect(() => {
    setLoader(true);
    fetch(`http://analytics.localhost:8080/api/stats/${shortenerId}`)
      .then(response => response.json())
      .then(({ data }) => {
        setCount(data.count);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [shortenerId]);

  return (
    <div>
      <p>{count}</p>
    </div>
  );
}

export default TrackShortener;
