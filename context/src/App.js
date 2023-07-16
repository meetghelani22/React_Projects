import React, { useState, useEffect } from "react";
import Navbar from "./pages/Navbar";
import { DataProvider } from "./pages/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import DisplayData from "./pages/DisplayData";
import Loader from "./pages/Loader";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="container-fluid px-0">
      {isLoading ? (
        <Loader />
      ) : (
        <DataProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    {/* <Navbar2 /> */}
                    <Home />
                    <Loader></Loader>
                  </>
                }
              />
              <Route path="/SearchResult" element={<SearchResult />} />
              <Route path="/DisplayAllData" element={<DisplayData />} />
              <Route />
            </Routes>
          </BrowserRouter>
        </DataProvider>
      )}
    </div>
  );
};

export default App;
