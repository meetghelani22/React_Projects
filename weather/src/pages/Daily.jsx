import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const API_KEY = "687f9cf673fc6e9fd80e31572fd13159";

function Daily(props) {
  const location = useLocation();
  const data = location.state.data.cityname;
  const currentDate = location.state.data.newdates;
  const [weatherData, setWeatherData] = useState({});
  const fetchWeather = () => {
    console.log(data);
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${data}&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      });
  };
  useEffect(() => {
    if (data) {
      fetchWeather();
    }
  }, []);
  /*   useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${data}&appid=${API_KEY}`
      );
      const data = await response.json();
      setWeatherData(data);
    }
    if (data) {
      fetchData();
    }
  }, [data]); */
  // ? Go Back
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="container-fluid background-img1 px-0">
      <div className="newbgdrop">
        {weatherData.list && (
          <div className="container-fluid">
            <div className="bs py-5 p-4 fw">
              {weatherData && (
                <div className="mb-5">
                  <h1 className="text-center text-white">Weather Forecast</h1>
                  <div className="d-flex justify-content-between text-white align-items-center">
                    <div>
                      <h1 className="d-inline">{weatherData.city.name} </h1>
                      <span>{weatherData.city.country}</span>
                    </div>
                    <div>{currentDate}</div>
                  </div>
                </div>
              )}
              <div className="container-fluid">
                <div className="row justify-content-between">
                  {Array.from(
                    new Set(
                      weatherData.list.map((item) =>
                        new Date(item.dt * 1000).toLocaleDateString()
                      )
                    )
                  )
                    .map(
                      (date) =>
                        weatherData.list.filter(
                          (item) =>
                            new Date(item.dt * 1000).toLocaleDateString() ===
                            date
                        )[0]
                    )
                    .slice(0, 6)
                    .map((item, index) => (
                      <div
                        className="col-lg-2 text-white bor-right p-3"
                        key={index}
                      >
                        {/* <div key={item.dt} className=""> */}
                        <div>{new Date(item.dt * 1000).toDateString()}</div>
                        <div className="d-flex justify-content-center fw-60">
                          {Math.round(item.main.temp - 273.15)}
                          °C
                        </div>
                        <div className="row g-3">
                          <div className="col-12 text-center">
                            {item.weather[0].description}
                          </div>
                          <div className="col-3">Feels</div>
                          <div className="col-9 text-end">
                            {Math.round(item.main.feels_like - 273.15)}°C
                          </div>
                          <div className="col-6">Min Temp</div>
                          <div className="col-6 text-end">
                            {Math.round(item.main.temp_min - 273.15)}°C
                          </div>
                          <div className="col-6">Max Temp </div>
                          <div className="col-6 text-end">
                            {Math.round(item.main.temp_max - 273.15)}°C
                          </div>
                        </div>
                        {/* </div> */}
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end m-2">
              <button className="btn text-white" onClick={goBack}>
                Go Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Daily;
