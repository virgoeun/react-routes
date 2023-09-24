import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [resp, setResp] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      async function getData() {
      try {
        const response = await axios.get(url);
        if (response.status === 200) {
          setResp(response.data);
        } else {
          setError(response);
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [url]);
  return [resp, error, loading];
}
