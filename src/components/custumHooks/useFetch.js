import React, { useState, useEffect, useDebugValue } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  useDebugValue("Premier useDebugValue");
  useDebugValue(data, (valData) => JSON.stringify(data));

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsloading(() => false);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, [url]);

  return [data, isLoading];
}
