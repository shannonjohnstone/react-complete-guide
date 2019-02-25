import { useState, useEffect } from 'react';

export const useDataFetching = fetchMethod => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const { data } = await fetchMethod();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading };
};
