import { useEffect, useState } from 'react';

function useFetch(uri, initialValue = null) {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const controller = new AbortController();
    const { signal } = controller;

    fetch(uri, { signal })
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [uri]);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch;
