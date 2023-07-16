import React from "react";
import Weather from "./Weather";
import Daily from "./Daily";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const RoutePages = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Weather />}></Route>
          <Route path="/week-data" element={<Daily />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RoutePages;
