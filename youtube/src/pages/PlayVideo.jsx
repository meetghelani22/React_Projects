import React, { useContext, useEffect, useState } from "react";
import channelLogo from "../assets/images/channel-logo.png";
import { useParams, Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import Loader from "./Loader";

const PlayVideo = ({ theme }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  const videosData = useContext(DataContext);
  const { index } = useParams();
  console.log("index", index);
  const selectedVideo = videosData.find(
    (items) => items.id === parseInt(index)
  );
  const filterVideo = videosData.filter(
    (items) => items.id !== parseInt(index)
  );
  if (!filterVideo) {
    return <div>Video not found</div>;
  }

  return (
    <div className="container-fluid">
      {loading ? (
        <Loader />
      ) : (
        <div className="container py-3">
          <div className="row">
            <div className="col-lg-8">
              <div className="ratio ratio-16x9">
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  allowFullScreen
                  allow="autoplay"
                ></iframe>
              </div>

              <div>
                <h3 className="pt-3 mb-0">{selectedVideo.title}</h3>
                <div className="bs detail-dark p-3 g-0 rounded-3 row my-3 align-items-center">
                  <div className="col-lg-10">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-1">
                          <img
                            src={channelLogo}
                            alt="channellogo"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-lg-10">
                          <h6 className="fw-16 fw-medium mb-0">
                            {selectedVideo.channel}
                          </h6>
                          <span className="fw-16 fw-light">100k Subs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <button type="button" className="sub-btn">
                      Subscribe
                    </button>
                  </div>
                </div>
                <div
                  className={`bs p-3 rounded-3 ${theme ? "detail-dark" : ""}`}
                >
                  {/* <h4 className="my-3">{selectedVideo.title}</h4> */}
                  <p>{selectedVideo.detail}</p>
                  <p>Channel : {selectedVideo.channel}</p>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit at modi nulla aperiam, doloribus quo
                    doloremque aut quis autem minima temporibus. Fugiat
                    doloribus voluptates possimus.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="container">
                {filterVideo.map((items, index) => (
                  <div
                    key={index}
                    className="row align-items-center mt-3 mb-3 mt-md-0"
                  >
                    <div className="col-lg-5">
                      <Link to={`/displayvideo/${items.id}`}>
                        <img
                          src={items.thumbnail}
                          alt="thumb"
                          className="img-fluid rounded-3"
                        />
                      </Link>
                    </div>
                    <div className="col-lg-7">
                      <p className="mb-0">{items.title}</p>
                      <span className="fw-light fw-14">{items.channel}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayVideo;
