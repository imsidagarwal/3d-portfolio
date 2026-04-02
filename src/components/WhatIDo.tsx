import "./styles/WhatIDo.css";

const services = [
  { icon: "📋", title: "Program Management", desc: "End-to-end ownership of complex multi-team programs from scoping to delivery across healthcare, fintech & e-commerce." },
  { icon: "🗂️", title: "Project Management", desc: "Planning, executing and closing projects on time and within budget using structured PMO frameworks and reporting." },
  { icon: "⚙️", title: "JIRA Optimisation", desc: "Designing and standardising JIRA workflows, dashboards, and sprint templates that boost team productivity and visibility." },
  { icon: "👥", title: "Team Leadership", desc: "Leading and mentoring cross-functional teams of 20+ members across product and tech, driving outcomes with high morale." },
  { icon: "🔄", title: "Agile & Scrum Delivery", desc: "Certified PSM® & PSPO®. Sprint planning, backlog grooming, retrospectives, and continuous delivery for engineering teams." },
  { icon: "📊", title: "Process Excellence", desc: "Identifying bottlenecks, designing automation frameworks and saving thousands of work-hours — proven at Amazon & Paytm." },
  { icon: "🤝", title: "Stakeholder Management", desc: "Building alignment between business, product, and technology through structured communication and quarterly planning." },
  { icon: "🛡️", title: "Risk Management", desc: "Proactively identifying risks, defining mitigation strategies, and maintaining contingency plans across large programmes." },
];

const WhatIDo = () => {
  return (
    <div
      className="what-IDo"
      id="whatido"
      style={{ position: "relative", zIndex: 10 }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "6rem 2rem 4rem",
        }}
      >
        {/* Section heading */}
        <h2
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 800,
            marginBottom: "3rem",
            lineHeight: 1.1,
            color: "#fff",
          }}
        >
          WHAT <br />
          <span style={{ color: "#34d399" }}>I DO</span>
        </h2>

        {/* 8-card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {services.map((s, i) => (
            <div
              key={i}
              style={{
                background: "rgba(10,10,20,0.75)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "14px",
                padding: "1.5rem",
                transition: "border-color 0.2s, transform 0.2s",
                cursor: "default",
                position: "relative",
                zIndex: 10,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(52,211,153,0.5)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>{s.icon}</div>
              <h4
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  marginBottom: "0.6rem",
                  color: "#e2e8f0",
                  textTransform: "uppercase",
                }}
              >
                {s.title}
              </h4>
              <p style={{ fontSize: "0.82rem", color: "#94a3b8", lineHeight: 1.6, margin: 0 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
