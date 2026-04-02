import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const sectRef = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    sectRef.current[index] = el;
  };

  useEffect(() => {
    ScrollTrigger.refresh();
    sectRef.current.forEach((container) => {
      if (container) {
        container.classList.remove("no-touch");
        const handler = () => handleClick(container, sectRef.current);
        container.addEventListener("click", handler);
      }
    });
    return () => {
      sectRef.current.forEach((container) => {
        if (container) {
          container.replaceWith(container.cloneNode(true));
        }
      });
    };
  }, []);

  return (
    <div className="what-IDo">
      <div className="what-box">
        <div className="what-box-in">
          <svg width="100%" height="100%">
            <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
          </svg>

          {/* BOX 1 */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 0)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="9,8" />
                <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="3" strokeDasharray="9,8" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h4>Program &amp; PROJECT MGMT</h4>
              <p>
                End-to-end ownership of complex programs across healthcare,
                fintech, and e-commerce. Expert in multi-team, multi-geography
                delivery with measurable business impact.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tag">Program Management</div>
                <div className="what-tag">Project Planning</div>
                <div className="what-tag">Risk Management</div>
                <div className="what-tag">Stakeholder Mgmt</div>
                <div className="what-tag">PMO Frameworks</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* BOX 2 */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 1)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="9,8" />
                <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="3" strokeDasharray="9,8" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h4>Agile &amp; TEAM LEADERSHIP</h4>
              <p>
                Certified Scrum Master (PSM®) and Product Owner (PSPO®).
                Leading and mentoring teams of 20+ across product and tech,
                driving sprint delivery with high morale and efficiency.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tag">Scrum / Agile</div>
                <div className="what-tag">Sprint Planning</div>
                <div className="what-tag">Team Leadership</div>
                <div className="what-tag">Backlog Grooming</div>
                <div className="what-tag">SDLC</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* BOX 3 */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 2)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="9,8" />
                <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="3" strokeDasharray="9,8" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h4>JIRA &amp; PROCESS OPTIMISATION</h4>
              <p>
                Standardising JIRA workflows, automating manual processes, and
                designing frameworks that save thousands of work-hours.
                Track record of measurable efficiency gains at Amazon and Paytm Money.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tag">JIRA</div>
                <div className="what-tag">Confluence</div>
                <div className="what-tag">Process Mapping</div>
                <div className="what-tag">Automation</div>
                <div className="what-tag">Reporting</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

function handleClick(
  container: HTMLDivElement,
  allRefs: (HTMLDivElement | null)[]
) {
  container.classList.toggle("what-content-active");
  allRefs.forEach((sibling) => {
    if (sibling && sibling !== container) {
      sibling.classList.remove("what-content-active");
    }
  });
}

export default WhatIDo;
