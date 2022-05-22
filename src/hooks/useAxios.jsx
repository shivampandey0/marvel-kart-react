import axios from 'axios';
import { useState } from 'react';

axios.defaults.baseURL = 'api/';

export const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const sendRequest = async (params) => {
    setLoading(true);
    setError();
    try {
      const res = await axios.request(params);
      setResponse(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { response, error, setError, loading, sendRequest };
};
