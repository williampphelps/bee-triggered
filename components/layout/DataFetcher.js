import { useState, useEffect } from "react";
import axios from "axios";

export default function DataFetcher(route) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get(route)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        if (data) {
          setError(null);
        }
        setLoading(false);
      });
  }, [route]);

  const refetch = () => {
    setLoading(true);
    setError(null);
    axios
      .get(route)
      .then((res) => {
        if (data != res.data) {
          setData(res.data);
        }
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        if (data) {
          setError(null);
        }
        setLoading(false);
      });
  };

  return { data, loading, error, refetch };
}
