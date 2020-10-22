import { useEffect, useState } from "react";

export const usePromotions = url => {
  const [data, setData] = useState({ count: 0, items: [] });

  useEffect(() => {
    fetch(url, { headers: { authorization: "test-data" } })
      .then(response => response.json())
      .then(data => setData(data));
  }, [url]);

  return data;
};
