import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "JIRA Standardisation",
    category: "Process Excellence — Paytm Money",
    tools:
      "JIRA, Confluence, Sprint Planning, Workflow Design, Team Onboarding",
    description:
      "Standardised JIRA across 20 Product Managers and 4 Tech Managers — creating unified workflows, templates, and tracking dashboards that accelerated delivery and improved visibility.",
  },
  {
    title: "Automatezilla",
    category: "Process Automation Program — Amazon",
    tools:
      "Gantt Charts, Process Mapping, Work-hour Analysis, Cross-team Coordination",
    description:
      "Led a team that automated 39 manual processes, saving 4,000+ work-hours. Built a Master Gantt Chart as a single source of truth for 68 MSD reduction projects across NA, EU, and CA.",
  },
  {
    title: "TIPS — Injury Reduction Program",
    category: "Safety Initiative — Amazon",
    tools: "Data Analysis, PPTs, Video Modules, Flyers, Stakeholder Reporting",
    description:
      "Initiated and drove a company-wide injury-specific solutions program using multimedia content. Delivered measurable reduction in overall injury rates across multiple fulfilment sites.",
  },
  {
    title: "100+ Feature Launches",
    category: "Product Program Management — Paytm Money",
    tools:
      "JIRA, Roadmapping, Stakeholder Mgmt, Sprint Reviews, SDLC, Brainstorming",
    description:
      "Managed the end-to-end launch of 100+ customer-facing features on the Paytm Money App, driving accelerated customer experience improvements through structured quarterly planning.",
  },
  {
    title: "Python-based Reporting Automation",
    category: "Data & Automation — TCS / Nielsen Project",
    tools: "Python, Big Data, SQL, Reporting Pipelines, Traffic Analysis",
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
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const gotoNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const p = projects[currentIndex];

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
                        <h2>0{index + 1}</h2>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <p>{project.description}</p>
                        <p>
                          <span className="carousel-tools-label">
                            Tools &amp; Skills
                          </span>
                        </p>
                        <p>{project.tools}</p>
                      </div>
                    </div>
                    {/* Decorative visual panel */}
                    <div className="carousel-image-wrapper">
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background:
                            "linear-gradient(135deg, rgba(108,99,255,0.15), rgba(255,101,132,0.1))",
                          borderRadius: "12px",
                          fontSize: "5rem",
                          padding: "2rem",
                        }}
                      >
                        {["📋", "⚙️", "🛡️", "🚀", "🐍"][index]}
                      </div>
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
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
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
