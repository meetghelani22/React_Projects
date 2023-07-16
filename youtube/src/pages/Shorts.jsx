import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import { DataContext } from "../context/DataContext";
import "../../node_modules/swiper/swiper-bundle.css";
import "../assets/css/common.css";
const Shorts = () => {
  const videos = useContext(DataContext);
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 shorts-height py-1">
            {
              <Swiper
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                mousewheel={true}
                modules={[Pagination, Mousewheel]}
                className="mySwiper h-100"
              >
                {videos.map((items, index) => {
                  return (
                    <SwiperSlide className="h-100" key={index}>
                      <div className="h-100">
                        <iframe
                          className="ratio ratio-1x1 h-100 px-5"
                          src={items.shorts}
                          title={items.title}
                        ></iframe>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shorts;
