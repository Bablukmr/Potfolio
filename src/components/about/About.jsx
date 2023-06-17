import React from "react";
import "./About.css";
import ME from "../../assets/bablu.jpg";

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
            <h3>Hello My Name Is Bablu Kumar, I am a Front-End Developer</h3>
            <br />
            <p>
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
