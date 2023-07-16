// * Data Context of All Video json file

import React, { createContext } from "react";
import videosData from "../pages/data.json";
const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={videosData}>{children}</DataContext.Provider>
  );
};
export { DataProvider, DataContext };
