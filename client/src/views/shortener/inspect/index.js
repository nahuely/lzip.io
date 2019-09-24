import React, { useState, useEffect } from "react";

function InspectShortener({ match }) {
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(false);
  const shortenerId = match.params.shortenerId;

  useEffect(() => {
    setLoader(true);
    fetch(`http://localhost:8080/api/shortener/inspect/${shortenerId}`)
      .then(response => response.json())
      .then(({ data }) => {
        setData(data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [shortenerId]);

  if (loader) return <div>loading...</div>;

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
