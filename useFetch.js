import { useEffect, useState } from "react";
import axios from "react-native-axios";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = axios.get("[DATA_BASE_URL]");
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setErr(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, err, refetch };
};

export default useFetch;
