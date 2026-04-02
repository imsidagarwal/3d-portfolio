import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Automatezilla",
    category: "Process Automation Program — Amazon",
    tools: "Gantt Charts, Process Mapping, Work-hour Analysis, PMO Frameworks",
    image: "/images/callhq.png",
    link: "https://www.linkedin.com/in/imsidagrawal/",
  },
  {
    title: "TIPS Program",
    category: "Injury Reduction Initiative — Amazon",
    tools: "Flyers, PPTs, Video Modules, Data Analysis, Cross-team Collaboration",
    image: "/images/whatsapp.png",
    link: "https://www.linkedin.com/in/imsidagrawal/",
  },
  {
    title: "Paytm Money — 100+ Features",
    category: "Product & Tech Program Management",
    tools: "JIRA, Roadmapping, Sprint Planning, Stakeholder Management, SDLC",
    image: "/images/broki.png",
    link: "https://www.linkedin.com/in/imsidagrawal/",
  },
  {
    title: "Kaiser Permanente",
    category: "Healthcare Program Management",
    tools: "Agile, Project Planning, Stakeholder Alignment, Hybrid Delivery",
    image: "/images/ordrr.png",
    link: "https://www.linkedin.com/in/imsidagrawal/",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const gotoPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const gotoNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-main-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={gotoPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={gotoNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h2>0{index + 1}</h2>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p>
                          <span className="carousel-tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </p>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
