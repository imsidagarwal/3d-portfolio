import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    ScrollTrigger.refresh();
    const containers = containerRef.current;
    sectRef.current.forEach((container) => {
      if (container) {
        container.classList.remove("no-touch");
        container.addEventListener("click", () => handleClick(container));
      }
    });

    return () => {
      sectRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="what-IDo">
      <div className="what-box">
        <div className="what-box-in">
          <svg width="100%" height="100%">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="7,7"
            />
            <line
              x1="100%"
              y1="0"
              x2="100%"
              y2="100%"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="7,7"
            />
          </svg>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="9,8"
                />
                <line
                  x1="100%"
                  y1="0"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="3"
                  strokeDasharray="9,8"
                />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h4>Program &amp; PROJECT MGMT</h4>
              <p>
                End-to-end ownership of complex programs — from scoping and
                planning to delivery and retrospectives. Expert in managing
                multi-team, multi-geography initiatives at scale.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tag">JIRA</div>
                <div className="what-tag">Roadmapping</div>
                <div className="what-tag">PMO</div>
                <div className="what-tag">Risk Mgmt</div>
                <div className="what-tag">Stakeholder Mgmt</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="9,8"
                />
                <line
                  x1="100%"
                  y1="0"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="3"
                  strokeDasharray="9,8"
                />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h4>Agile &amp; DELIVERY</h4>
              <p>
                Certified Scrum Master and Product Owner. Driving sprint
                planning, backlog grooming, and continuous delivery for
                high-performing cross-functional engineering teams.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tag">Scrum</div>
                <div className="what-tag">Sprint Planning</div>
                <div className="what-tag">SDLC</div>
                <div className="what-tag">Backlog Grooming</div>
                <div className="what-tag">KPIs</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");

  const siblings = Array.from(container.parentElement!.children);
  siblings.forEach((sibling) => {
    if (sibling !== container) {
      sibling.classList.remove("what-content-active");
      sibling.classList.toggle("what-sibling");
    }
  });

  siblings.forEach((sibling) => {
    if (sibling !== container) {
      sibling.classList.remove("what-sibling");
    }
  });
}

function setRef(el: HTMLDivElement | null, index: number) {
  // handled inline via ref array
}
