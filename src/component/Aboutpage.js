import React, { useEffect, useRef, useState } from "react";
import resume from "../images/Resume.pdf";
import mail from "../images/cp_mail.svg";
import github from "../images/github.svg";
import linkedin from "../images/contact_linkedin.png";

function Aboutpage({ timeline, ease }) {
  const [state, setState] = useState(false);
  const handleChange = () => {
    setState(!state);
  };

  let blackbg = useRef(null);
  let logo = useRef(null);
  let profile = useRef(null);
  let storyProfile = useRef(null);
  let menu_item1 = useRef(null);
  let menu_item2 = useRef(null);
  let menu_item3 = useRef(null);
  let menu_item4 = useRef(null);
  let mobilemenu_item = useRef(null);

  useEffect(() => {
    timeline.from([blackbg], 1, {
      opacity: 0,
      x: "-400",
    });
    timeline.from([logo], 0.5, {
      y: 20,
      opacity: 0,
    });
    timeline.from([profile], 1.5, {
      width: "0%",
      x: "-20",
    });
    timeline.from(
      [menu_item1, menu_item2, menu_item3, menu_item4, mobilemenu_item],
      0.5,
      {
        opacity: 0,
        y: -200,
        stagger: {
          amount: 0.4,
        },
        ease: ease,
      }
    );
    timeline.from([storyProfile], 1, {
      opacity: "0",
      y: "20",
    });
  }, []);

  return (
    <section className="aboutpage">
      <div
        className="menu_screen"
        style={{ display: state ? "block" : "none" }}
      >
        <div className="mobile_title">
          <h1>KBPR</h1>{" "}
          <h1 className="close" onClick={handleChange}>
            &lt;CLOSE&#x2215;&gt;
          </h1>
        </div>

        <ul>
          <li>
            <a href="/">&lt;HOME&#x2215;&gt;</a>
          </li>
          <li>
            <a href="/about">&lt;ABOUT ME&#x2215;&gt;</a>
          </li>
          <li>
            <a href="/portfolio">&lt;PORTFOLIO&#x2215;&gt;</a>
          </li>
          <li>
            <a href="/contact">&lt;CONTACT ME&#x2215;&gt;</a>
          </li>
        </ul>
        <div>
          <p className="mobile_links_title">Social Links</p>
          <div className="social_mobile_links">
            <a href="https://www.linkedin.com/in/bharath-kbpr/" target="_blank">
              <img
                src={linkedin}
                alt=""
                style={{ verticalAlign: "middle", width: "40px" }}
              />
            </a>
            <a href="https://github.com/Bharath-Kbpr" target="_blank">
              <img
                src={github}
                alt=""
                style={{ verticalAlign: "middle", width: "40px" }}
              />
            </a>
            <a href="mailto: iamkbpr@gmail.com" target="_blank">
              <img
                src={mail}
                alt=""
                style={{ verticalAlign: "middle", width: "40px" }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="about_container">
        <div className="leftcontainer" ref={(el) => (blackbg = el)}>
          <h1 ref={(el) => (logo = el)}>
            <a href="/">kbpr</a>
          </h1>
        </div>
        <div className="rightcontainer">
          <div>
            <ul className="kbpr__menuitems kbpr__menuitems-about">
              <li ref={(el) => (menu_item1 = el)}>
                <a href="/">home</a>
              </li>
              <li ref={(el) => (menu_item2 = el)}>
                <a href="#">about</a>
              </li>
              <li ref={(el) => (menu_item3 = el)}>
                <a href="/portfolio">portfolio</a>
              </li>
              <li ref={(el) => (menu_item4 = el)}>
                <a href="/Contact">contact</a>
              </li>
            </ul>
            <span
              className="kbpr__menuitemsMobile-about"
              ref={(el) => (mobilemenu_item = el)}
              onClick={handleChange}
            >
              &lt;MENU&#x2215;&gt;
            </span>
          </div>
          <div className="about_story" ref={(el) => (storyProfile = el)}>
            <h1>My Story</h1>
            <p>
              "Hello, this is Bharath. I wrote my first program in 9th grade,
              and ever since then, I have been fascinated by the wonders of
              programming. This passion led me to pursue a{" "}
              <span style={{ color: "#E0171F" }}>
                Master’s degree in Computer Science
              </span>{" "}
              from the University of Missouri - Kansas City. I believe
              programming has the power to create something out of nothing. Over
              the years, I have gained expertise in Full Stack Development,
              specializing in React, Redux, and Node.js. I have experience
              building scalable web applications, optimizing platform
              performance, and ensuring accessibility compliance. Beyond
              programming, I enjoy contributing to open-source projects and
              developing high-level tools in Python. My journey in tech is
              fueled by continuous learning and a passion for creating impactful
              digital solutions."
            </p>
            <span className="resume">
              <a href={resume} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="center_container" ref={(el) => (profile = el)}></div>
    </section>
  );
}

export default Aboutpage;
