import React from "react";
import "./About.css";
import ME from "../../assets/imgmebk.png";

export default function About() {
  return (
    <section id="about">
      <hr />
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="IMG" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__card">
            <h1>Welcome to my portfolio!</h1>
            <h3>My name is Bablu Kumar, and I am a dedicated Front-End Developer with a broad range of skills and expertise</h3>
            <br />
            <p>
           In my journey as a web developer, I have honed my abilities in various technologies, including HTML, CSS, JavaScript (JS), React, Next.js, Redux, Material UI, Chakra UI, GitHub, Tailwind CSS, React Native, and MongoDB.<br/><br/>
              Passion-driven learner and a web developer with the ability to
              write clean, reusable, optimised code. Skilled and experienced at
              building and maintaining Front-End based responsive web
              applications. Looking forward to joining a progressive and
              challenging work environment.
            </p>
            <br />

            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
