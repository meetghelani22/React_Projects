import React, { createContext, useState, useEffect } from "react";
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const fetchApi = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        sessionStorage.setItem("apiData", JSON.stringify(data));
        setData(data);
      });
  };

  useEffect(() => {
    let getData = sessionStorage.getItem("apiData");
    let parseData;
    if (!data && !getData) {
      console.log("Api Fetched");
      fetchApi();
    } else {
      if (getData) {
        parseData = JSON.parse(getData);
        setData(parseData);
      }
    }
  }, []);
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
export { DataProvider, DataContext };
