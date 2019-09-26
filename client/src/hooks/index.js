import { useState, useEffect } from "react";

export const useFetch = url => {
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const abortCtrl = new AbortController();
    let abortError = false;

    async function doFetch() {
      try {
        setLoader(true);
        const response = await fetch(url, { signal: abortCtrl.signal });
        const { code, data, message } = await response.json();
        if (code === 404) throw new Error(message);
        setData(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error);
        } else {
          abortError = true;
        }
      } finally {
        if (!abortError) {
          setLoader(false);
        }
      }
    }
    doFetch();

    return () => {
      abortCtrl.abort();
    };
  }, [url]);

  return [loader, error, data];
};
