import { useState, useEffect } from "react";

export const useFetch = url => {
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoader(true);
    fetch(url)
      .then(response => response.json())
      .then(({ code, status, data }) => {
        if (code === 404) throw new Error(status);
        setData(data);
      })
      .catch(setError)
      .finally(() => {
        setLoader(false);
      });
  }, [url]);

  return [loader, error, data];
};
