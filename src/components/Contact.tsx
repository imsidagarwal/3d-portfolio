import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/imsidagrawal/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — imsidagrawal
              </a>
            </p>
            <p>
              <a
                href="mailto:imsidagarwal@gmail.com"
                data-cursor="disable"
              >
                imsidagarwal@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>
              MBA (Operations), Welingkar Institute of Management — 2019-2021
            </p>
            <p>
              B.E. Computer Science, Sant Gadge Baba Amravati University —
              2012-2016
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/imsidagrawal/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:imsidagarwal@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Siddharth Agrawal <br /> PMP® | PSM® | PSPO®
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
