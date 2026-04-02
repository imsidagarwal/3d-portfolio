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
  },
  {
    num: "02",
    title: "Automatezilla",
    category: "Process Automation — Amazon",
    tools: "Gantt Charts · Process Mapping · Work-hour Analysis · Cross-team Coordination",
    description:
      "Led a team that automated 39 manual processes, saving 4,000+ work-hours. Built a Master Gantt Chart as single source of truth for 68 MSD reduction projects across NA, EU, and CA.",
  },
  {
    num: "03",
    title: "TIPS — Injury Reduction Program",
    category: "Safety Initiative — Amazon",
    tools: "Data Analysis · PPTs · Video Modules · Stakeholder Reporting · KPI Tracking",
    description:
      "Initiated and drove a company-wide injury-specific solutions program using multimedia content. Delivered measurable reduction in injury rates across multiple fulfilment sites.",
  },
  {
    num: "04",
    title: "100+ Feature Launches",
    category: "Product Program Management — Paytm Money",
    tools: "JIRA · Roadmapping · Stakeholder Mgmt · Sprint Reviews · SDLC",
    description:
      "Managed the end-to-end launch of 100+ customer-facing features on the Paytm Money App, driving accelerated customer experience improvements through structured quarterly planning.",
  },
  {
    num: "05",
    title: "Python Reporting Automation",
    category: "Data & Automation — TCS / Nielsen Project",
    tools: "Python · Big Data · SQL · Reporting Pipelines · Traffic Analysis",
    description:
      "Built automated reporting pipelines on the US-based Nielsen project in the media research domain. Reduced manual reporting effort significantly by scripting data extraction and analysis workflows.",
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
    goToSlide(currentIndex === 0 ? projects.length - 1 : currentIndex - 1);
  }, [currentIndex, goToSlide]);

  const gotoNext = useCallback(() => {
    goToSlide(currentIndex === projects.length - 1 ? 0 : currentIndex + 1);
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
                  {/* Single full-width content panel — no image */}
                  <div
                    style={{
                      width: "100%",
                      padding: "3rem 2rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.25rem",
                    }}
                  >
                    {/* Number */}
                    <span
                      style={{
                        fontSize: "clamp(3rem, 6vw, 5rem)",
                        fontWeight: 800,
                        color: "rgba(255,255,255,0.08)",
                        lineHeight: 1,
                      }}
                    >
                      {project.num}
                    </span>

                    {/* Title */}
                    <h4
                      style={{
                        fontSize: "clamp(1.4rem, 3vw, 2rem)",
                        fontWeight: 700,
                        margin: 0,
                        color: "#fff",
                      }}
                    >
                      {project.title}
                    </h4>

                    {/* Category */}
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#34d399",
                        margin: 0,
                        fontWeight: 500,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {project.category}
                    </p>

                    {/* Divider */}
                    <div
                      style={{
                        height: "1px",
                        background: "rgba(255,255,255,0.1)",
                        width: "100%",
                      }}
                    />

                    {/* Description */}
                    <p
                      style={{
                        fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                        color: "#cbd5e1",
                        lineHeight: 1.7,
                        margin: 0,
                        maxWidth: "700px",
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tools */}
                    <div>
                      <p
                        style={{
                          fontSize: "0.75rem",
                          color: "#64748b",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Tools &amp; Skills
                      </p>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: "#94a3b8",
                          margin: 0,
                        }}
                      >
                        {project.tools}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to ${index + 1}`}
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
