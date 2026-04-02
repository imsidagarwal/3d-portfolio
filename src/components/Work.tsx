import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    num: "01",
    title: "JIRA Standardisation",
    category: "Process Excellence — Paytm Money",
    tools: "JIRA · Confluence · Sprint Planning · Workflow Design · Dashboards",
    description:
      "Standardised JIRA across 20 Product Managers and 4 Tech Managers — creating unified workflows, templates, and tracking dashboards that accelerated delivery and improved visibility across all product squads.",
    icon: "🗂️",
    color: "#0052CC",
  },
  {
    num: "02",
    title: "Automatezilla",
    category: "Process Automation — Amazon",
    tools: "Gantt Charts · Process Mapping · Work-hour Analysis · Cross-team Coordination",
    description:
      "Led a team that automated 39 manual processes, saving 4,000+ work-hours. Built a Master Gantt Chart as single source of truth for 68 MSD reduction projects across NA, EU, and CA.",
    icon: "⚙️",
    color: "#FF9900",
  },
  {
    num: "03",
    title: "TIPS — Injury Reduction Program",
    category: "Safety Initiative — Amazon",
    tools: "Data Analysis · PPTs · Video Modules · Stakeholder Reporting · KPI Tracking",
    description:
      "Initiated and drove a company-wide injury-specific solutions program using multimedia content. Delivered measurable reduction in injury rates across multiple fulfilment sites.",
    icon: "🛡️",
    color: "#E31837",
  },
  {
    num: "04",
    title: "100+ Feature Launches",
    category: "Product Program Management — Paytm Money",
    tools: "JIRA · Roadmapping · Stakeholder Mgmt · Sprint Reviews · SDLC",
    description:
      "Managed the end-to-end launch of 100+ customer-facing features on the Paytm Money App, driving accelerated customer experience improvements through structured quarterly planning.",
    icon: "🚀",
    color: "#00BAF2",
  },
  {
    num: "05",
    title: "Python Reporting Automation",
    category: "Data & Automation — TCS / Nielsen Project",
    tools: "Python · Big Data · SQL · Reporting Pipelines · Traffic Analysis",
    description:
      "Built automated reporting pipelines on the US-based Nielsen project in the media research domain. Reduced manual reporting effort significantly by scripting data extraction and analysis workflows.",
    icon: "🐍",
    color: "#3776AB",
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
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const gotoNext = useCallback(() => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-main-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={gotoPrev}
            aria-label="Previous"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={gotoNext}
            aria-label="Next"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h2>{project.num}</h2>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <p style={{ marginTop: "1rem", lineHeight: 1.6, color: "#cbd5e1" }}>
                          {project.description}
                        </p>
                        <p style={{ marginTop: "1rem" }}>
                          <span className="carousel-tools-label">Tools &amp; Skills</span>
                        </p>
                        <p style={{ color: "#94a3b8", fontSize: "0.9rem" }}>{project.tools}</p>
                      </div>
                    </div>

                    {/* Icon panel — no image */}
                    <div
                      className="carousel-image-wrapper"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: `linear-gradient(135deg, ${project.color}22, ${project.color}11)`,
                        border: `1px solid ${project.color}44`,
                        borderRadius: "16px",
                        fontSize: "6rem",
                      }}
                    >
                      {project.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

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
