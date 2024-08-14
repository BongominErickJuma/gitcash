import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import required modules
import {
  Autoplay,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

function Clients() {
  return (
    <div className="container my-5 ">
      <h3>Trusted By:</h3>
      <Swiper
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        slidesPerView={5} // Ensure this is a number
        speed={2000}
        grabCursor={true}
        mousewheel={true}
        keyboard={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Pagination, Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {[...Array(9)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="card border-0">
              <div className="card-body">
                <img
                  src={`https://picsum.photos/300/200?random=${index + 1}`}
                  alt={`Slide ${index + 1}`}
                  className="card-img-top"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Clients;
