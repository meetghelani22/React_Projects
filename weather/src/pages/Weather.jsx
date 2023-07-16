import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  
import "../css/weather.css";

const Weather = () => {
  const [weatherData, setWeatherData] = useState();
  const [city, setCity] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState(
    new Date().toLocaleString()
  );
  const [unit, setUnit] = useState("C");
  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };
  useEffect(() => {
    if (city) {
      fetchWeather();
    }
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const apiKey = "687f9cf673fc6e9fd80e31572fd13159";
  const fetchWeather = () => {
    console.log(city);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      });
  };

  // ? Unit Converter
  var temperatureData, highTemp, lowTemp, feelTemp;
  if (weatherData && unit === "C") {
    temperatureData = weatherData?.main?.temp;
    highTemp = weatherData?.main?.temp_max;
    lowTemp = weatherData?.main?.temp_min;
    feelTemp = weatherData?.main?.feels_like;
  } else {
    temperatureData = (weatherData?.main?.temp * 9) / 5 + 32;
    highTemp = (weatherData?.main?.temp_max * 9) / 5 + 32;
    lowTemp = (weatherData?.main?.temp_min * 9) / 5 + 32;
    feelTemp = (weatherData?.main?.feels_like * 9) / 5 + 32;
  }
  return (
    <div className="container-fluid background-img px-0">
      <div className="backdrop text-white">
        <div className="container py-3">
          <h1 className="text-center text-dark mb-4">Weather App</h1>
          <div className="row justify-content-center">
            <div className="col-lg-6 d-flex">
              <input
                type="text"
                placeholder="Enter City"
                className="form-control"
                onChange={handleChange}
                value={city}
              />
              <button
                type="button"
                onClick={fetchWeather}
                className="ms-3 btn btn-primary"
              >
                Search
              </button>
              <div className="ms-3 col-lg-1">
                <select
                  className="form-control"
                  value={unit}
                  onChange={handleUnitChange}
                >
                  <option value="C">C</option>
                  <option value="F">F</option>
                </select>
              </div>
            </div>
          </div>
          {weatherData && weatherData.sys && (
            <div>
              <div className="row my-4 justify-content-between">
                <div className="col-lg-6">
                  <h1 className="d-inline me-2">{weatherData.name}</h1>
                  <span>{weatherData.sys.country}</span>
                  <div>{currentDateTime}</div>
                </div>
                <div className="col-lg-6 d-flex justify-content-end align-items-end cursor">
                  <Link
                    to="/week-data"
                    state={{
                      data: 
                      { cityname: city, 
                        newdates: currentDateTime },
                    }}
                    sendCity={city}
                    className="btn btn-primary text-white"
                  >
                    Show More Info
                  </Link>
                </div>
              </div>
            </div>
          )}
          {weatherData &&
          weatherData.main &&
          weatherData.clouds &&
          weatherData.coord &&
          weatherData.wind &&
          weatherData.weather &&
          weatherData.sys ? (
            <div className="bs p-5 mt-4">
              <div className="row my-5">
                <div className="col-lg-6">
                  <div>
                    <div className="d-flex justify-content-center">
                      <h1 className="fs-100 d-inline">
                        {temperatureData.toFixed()}
                      </h1>
                      <span>°{unit}</span>
                    </div>
                    <div className="row mt-4">
                      {weatherData.weather.map((items, index) => {
                        return (
                          <div className="col-lg-4 bor-right" key={index}>
                            <h5 className="text-center">Description</h5>
                            <p className="text-center">{items.description}</p>
                          </div>
                        );
                      })}
                      <div className="col-lg-4 bor-right">
                        <h5 className="text-center">Wind</h5>
                        <p className="text-center">
                          {(weatherData.wind.speed * 3.6).toFixed(0)}km/hr
                        </p>
                      </div>
                      <div className="col-lg-4">
                        <h5 className="text-center">Clouds</h5>
                        <p className="text-center">{weatherData.clouds.all}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row bs g-3 p-4">
                    <div className="col-lg-4 text-center">
                      <h5>High</h5>
                      <p>
                        {/* {weatherData.main.temp_max.toFixed()} */}
                        {highTemp.toFixed()}
                        <sup>°{unit}</sup>
                      </p>
                    </div>
                    <div className="col-lg-4 text-center">
                      <h5>Feels Like</h5>
                      <p>
                        {/* {weatherData.main.feels_like.toFixed()} */}
                        {feelTemp.toFixed()}
                        <sup>°{unit}</sup>
                      </p>
                    </div>
                    <div className="col-lg-4 text-center">
                      <h5>Humidity</h5>
                      <p>{weatherData.main.humidity}</p>
                    </div>
                    <div className="col-lg-4 text-center">
                      <h5>Low</h5>
                      <p>
                        {/* {weatherData.main.temp_min.toFixed()} */}
                        {lowTemp.toFixed()}
                        <sup>°{unit}</sup>
                      </p>
                    </div>
                    <div className="col-lg-4 text-center">
                      <h5>Visibility</h5>
                      <p>
                        {weatherData.visibility / 1000}
                        <span className="ms-1">km</span>
                      </p>
                    </div>
                    <div className="col-lg-4 text-center">
                      <h5>Pressure</h5>
                      <p>{weatherData.main.pressure}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="row bs mt-5 p-5">
              <div className="col d-flex justify-content-center">
                <h1 className="text-white">Please Enter City</h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
