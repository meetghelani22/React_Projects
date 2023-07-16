import React, { useEffect, useState } from "react";
import "./assets/css/common.css";
import { DataProvider } from "./context/DataContext";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import PlayVideo from "./pages/PlayVideo";
import Subscription from "./pages/Subscription";
import Shorts from "./pages/Shorts";
import Login from "./pages/Login";
import Signout from "./pages/Signout";
const App = () => {
  const [theme, setTheme] = useState(false);
  // ! For Data from Navbar
  const [dataFromChild, setDataFromChild] = useState([]);
  const [searchFromNav, setSearchFromNav] = useState(null);
  const handleDataFromChild = (data, data1) => {
    setDataFromChild(data);
    setSearchFromNav(data1);
  };
  // ! For Data from Navbar Ends
  const [login, setLogin] = useState(false);
  const sessionData = sessionStorage.getItem("userData");

  return (
    <div className={`container-fluid ${theme ? "dark-theme" : "light-theme"}`}>
      {!login && !sessionData ? (
        <Login update={setLogin} />
      ) : (
        <DataProvider>
          <ThemeProvider>
            <BrowserRouter>
              <Navbar
                theme={theme}
                update={setTheme}
                onDataFromChild={handleDataFromChild}
              />
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <Home filter={dataFromChild} search={searchFromNav} />
                  }
                />
                <Route
                  path="/displayvideo/:index"
                  element={<PlayVideo theme={theme} />}
                />
                <Route path="/subscribe" element={<Subscription />} />
                <Route path="/shorts" element={<Shorts />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route
                  path="/signout"
                  element={<Signout update={setLogin} />}
                />
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </DataProvider>
      )}
    </div>
  );
};

export default App;
