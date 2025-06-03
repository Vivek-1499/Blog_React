//custom hook needs to start from word "use" else it'll won't work
import { useState, useEffect } from "react";


const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const abortCont = new AbortController();

  fetch(url, { signal: abortCont.signal })
    .then(res => {
      if (!res.ok) {
        throw Error('Could not fetch the data');
      }
      return res.json();
    })
    .then(data => {
      setData(data);
      setLoading(false);
      setError(null);
    })
    .catch(err => {
      if (err.name !== 'AbortError') {
        setLoading(false);
        setError(err.message);
      }
    });

  return () => abortCont.abort(); // 👈 Clean up on unmount
}, [url]);
  //[] signifies amt of time to run so empyt means only once at first render so if[name] only runs when name changes

  return {data, loading, error}
}

export default useFetch;