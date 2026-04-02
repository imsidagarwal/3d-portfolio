import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para" style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)", lineHeight: 1.75 }}>
          I am a certified Project Manager (PMP®, PSM®, PSPO®) with 8+ years
          of experience driving high-impact programs across healthcare, fintech,
          and e-commerce. Currently leading programs at Kaiser Permanente, I
          have previously managed 100+ product launches at Paytm Money, built
          operational frameworks at Amazon, and delivered enterprise
          transformation at TCS. I hold an MBA in Operations from Welingkar
          Institute of Management and a B.E. in Computer Science. I am
          passionate about bridging business vision with technical execution
          through Agile, SDLC, and data-driven delivery.
        </p>
      </div>
    </div>
  );
};

export default About;
