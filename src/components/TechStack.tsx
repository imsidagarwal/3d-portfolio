import "./styles/TechStack.css";

const skills = [
  { name: "JIRA", level: 95, category: "Project Tools" },
  { name: "Confluence", level: 90, category: "Project Tools" },
  { name: "Microsoft Teams", level: 92, category: "Collaboration" },
  { name: "Excel / Sheets", level: 90, category: "Collaboration" },
  { name: "MS Project", level: 85, category: "Project Tools" },
  { name: "Agile / Scrum", level: 95, category: "Methodology" },
  { name: "Program Management", level: 95, category: "Methodology" },
  { name: "Stakeholder Mgmt", level: 92, category: "Methodology" },
  { name: "Risk Management", level: 88, category: "Methodology" },
  { name: "SDLC", level: 88, category: "Methodology" },
  { name: "Claude AI", level: 85, category: "AI & Automation" },
  { name: "AI Prompt Engineering", level: 80, category: "AI & Automation" },
  { name: "Python (Basics)", level: 70, category: "AI & Automation" },
  { name: "Data Reporting", level: 85, category: "AI & Automation" },
  { name: "PowerPoint / Slides", level: 90, category: "Collaboration" },
  { name: "Process Mapping", level: 88, category: "Methodology" },
];

const categories = ["Project Tools", "Methodology", "Collaboration", "AI & Automation"];

const TechStack = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 2rem",
        background: "transparent",
      }}
    >
      <h5
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 800,
          letterSpacing: "0.05em",
          marginBottom: "3rem",
          color: "#fff",
          textAlign: "center",
        }}
      >
        MY SKILLS &amp; TOOLS
      </h5>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        {categories.map((cat) => (
          <div
            key={cat}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "16px",
              padding: "1.5rem",
            }}
          >
            <h6
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#6ee7b7",
                marginBottom: "1.2rem",
                fontWeight: 700,
              }}
            >
              {cat}
            </h6>
            {skills
              .filter((s) => s.category === cat)
              .map((skill) => (
                <div key={skill.name} style={{ marginBottom: "1rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.4rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.9rem",
                        color: "#e2e8f0",
                        fontWeight: 500,
                      }}
                    >
                      {skill.name}
                    </span>
                    <span
                      style={{ fontSize: "0.8rem", color: "#94a3b8" }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: "4px",
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: "999px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${skill.level}%`,
                        background:
                          "linear-gradient(90deg, #6c63ff, #34d399)",
                        borderRadius: "999px",
                      }}
                    />
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
