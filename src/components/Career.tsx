import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Manager II</h4>
                <h5>Kaiser Permanente</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading strategic project management initiatives within one of the
              largest non-profit health plans in the US. Driving Agile delivery,
              stakeholder alignment, and cross-functional collaboration to
              improve healthcare program outcomes.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sr. Technical Program Manager</h4>
                <h5>Paytm Money</h5>
              </div>
              <h3>2024-25</h3>
            </div>
            <p>
              Led end-to-end delivery of complex product and technical programs
              across the Paytm Money platform. Managed cross-functional teams
              and drove roadmap alignment between business and engineering.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Program Manager</h4>
                <h5>Paytm Money</h5>
              </div>
              <h3>2022-24</h3>
            </div>
            <p>
              Managed and launched 100+ features on the Paytm Money App,
              enhancing customer experience at scale. Led, trained, and mentored
              20 Product Managers and 4 Tech Managers. Streamlined product and
              tech processes using JIRA with weekly and quarterly brainstorming
              sessions driving continuous improvement.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Program Manager</h4>
                <h5>Amazon</h5>
              </div>
              <h3>2021-22</h3>
            </div>
            <p>
              Built a Master Gantt Chart as a single source of truth for 68 MSD
              reduction projects across NA, EU and CA. Managed the
              "Automatezilla" team to drive efficiency of 39 manual processes,
              saving 4,000 work-hours. Initiated "TIPS" — an injury-specific
              solutions program reducing overall injury rates.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>System Engineer</h4>
                <h5>Tata Consultancy Services</h5>
              </div>
              <h3>2016-19</h3>
            </div>
            <p>
              Served as PMO for the Jaguar Land Rover project. Managed resource
              forecasting and capacity planning. Worked as a Big Data Developer
              on the US-based "Nielsen" project in the media research domain —
              analysed traffic and generated actionable reports.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
