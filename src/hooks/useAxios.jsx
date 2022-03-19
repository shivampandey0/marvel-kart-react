import axios from "axios";
import { useState, useEffect } from "react";

axios.defaults.baseURL = "api/";

const useAxios = ({ url, method, body = null, headers = null }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios[method](
        url,
        JSON.parse(headers),
        JSON.parse(body)
      );
      setResponse(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [method,url,body,headers]);

  return { response, error, loading };
};

export default useAxios;
