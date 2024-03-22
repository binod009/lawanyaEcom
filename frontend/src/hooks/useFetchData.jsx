import { useEffect, useState } from "react";
import HttpServices from "../components/service/http-service";
const http_svc = new HttpServices();
const useFetchData = (url, reload) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      let response = await http_svc.getRequest(url, { login: true });
      let addedKey = response?.result.map((item, index) => {
        item.key = index + 1;
        return item;
      });
      setData(addedKey);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url, reload]);
  return { data, loading, error };
};

export default useFetchData;
