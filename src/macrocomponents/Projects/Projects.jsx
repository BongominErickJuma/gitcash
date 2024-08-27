import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./projectDetails";

import { Swiper, SwiperSlide } from "swiper/react";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Projects = () => {
  // Define the breakpoints for responsive slidesPerView
  const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  };

  return (
    <Swiper
      loop={true}
      centeredSlides={false}
      autoplay={{
        delay: 3000, // Adjust autoplay delay to a reasonable value
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      slidesPerView={4} // Default slidesPerView for larger screens
      spaceBetween={20}
      speed={3000}
      grabCursor={true}
      mousewheel={false}
      keyboard={false}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper projectSwiper"
      breakpoints={breakpoints} // Apply breakpoints for responsive design
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index} className="projectSlides">
          <ProjectCard
            className="ProjectCard"
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
