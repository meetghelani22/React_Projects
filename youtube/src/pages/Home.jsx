import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
function Home({ filter, search }) {
  const videosData = useContext(DataContext);
  const [contextTheme, setContextThemes] = useContext(ThemeContext);
  useEffect(() => {
    const randomVideos = videosData.sort(() => Math.random() - 0.5);
  }, [videosData]);

  return (
    <div className="container-fluid">
      {/* // * Show Search Result Here */}
      <div className="row">
        {filter.length >= 1 && search.length >= 3
          ? filter.map((items, index) => {
              return (
                <div className="col-lg-3" key={index}>
                  <div className="card rounded-3 overflow-hidden">
                    <Link
                      to={`/displayvideo/${items.id}`}
                      className="text-decoration-none text-dark"
                    >
                      <img
                        src={items.thumbnail}
                        alt="search-thumbnail"
                        className="img-fluid"
                      />
                      <br />
                      <p className="p-2 mb-0 text-decoration-none">
                        {items.title}{" "}
                      </p>
                    </Link>
                  </div>
                </div>
              );
            })
          : null}
      </div>
      {/* // * Show Search Result Ends Here */}
      <div className="row">
        {/* // ? Side Menu Here  */}
        <div className="col-lg-2">
          <p className="mb-0 fw-16 py-2 c-p">
            <Link
              to="/login"
              className={`text-decoration-none ${
                contextTheme ? "text-white" : "text-dark"
              }`}
            >
              Login
            </Link>
          </p>
          <p className="mb-0 fw-16 py-2 c-p">
            <Link
              to="/shorts"
              className={`text-decoration-none ${
                contextTheme ? "text-white" : "text-dark"
              }`}
            >
              Shorts
            </Link>
          </p>
          <p className="mb-0 fw-16 py-2">
            <Link
              to="/subscribe"
              className={`text-decoration-none ${
                contextTheme ? "text-white" : "text-dark"
              }`}
            >
              Subscription
            </Link>
          </p>
          <p className="mb-0 fw-16 py-2">Originals</p>
          <p className="mb-0 fw-16 py-2 border-bottom">Youtube Music</p>
          <p className="mb-0 fw-16 py-2">Trending</p>
          <p className="mb-0 fw-16 py-2">Music</p>
          <p className="mb-0 fw-16 py-2">Shopping</p>
          <p className="mb-0 fw-16 py-2">Movie</p>
          <p className="mb-0 fw-16 py-2">Gaming</p>
          <p className="mb-0 fw-16 py-2 border-bottom">News</p>
          <p className="mb-0 fw-16 py-2">Library</p>
          <p className="mb-0 fw-16 py-2">History</p>
          <p className="mb-0 fw-16 py-2 border-bottom">Kids</p>
        </div>
        {/* // ? Diplay All Videos */}
        <div className="col-lg-10">
          <div className="row">
            {videosData.map((video, index) => (
              <div key={index} className="col-lg-3 mt-3">
                <Link to={`/displayvideo/${video.id}`}>
                  <img
                    src={video.thumbnail}
                    alt="thumbnail"
                    className="img-fluid rounded-3 hov"
                  />
                </Link>
                <div>
                  <p className="mt-2 mb-0">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
