import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./projectDetails";

import { Swiper, SwiperSlide } from "swiper/react";

// Import required modules
import {
  Autoplay,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

const Projects = () => {
  return (
    <Swiper
      loop={true}
      centeredSlides={false}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      slidesPerView={4}
      spaceBetween={20} //
      speed={3000}
      grabCursor={true}
      mousewheel={false}
      keyboard={false}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <ProjectCard
            title={project.title}
            description={project.description}
            time={project.time}
            iconClass={project.iconClass}
            tools={project.tools}
            contributeLink={project.contributeLink}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Projects;
