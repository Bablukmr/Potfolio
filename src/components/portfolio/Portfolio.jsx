import React from "react";
import './Portfolio.css';
import IMG1 from "../../assets/img1.PNG";
import IMG2 from "../../assets/img2.PNG";
import IMG3 from "../../assets/img3.PNG";

export default function Portfolio() {

  return (
    <section id="Portfolio">
      <h2>My Projects</h2>
      <div className="container portfolio__container">
        <article className="portfolio__items">
          <div className="porfolio__item-image">
            <img src={IMG1} alt="IMG1" />
          </div>
          <h3>This Is portfolio Items title</h3>
          <div className="portfolio__item-cta">
          <a
            href="https://github.com/Bablukmr/GayaG-Travel-Project"
            className="btn"
            target="blank"
          >
            Github
          </a>
          <a
            href="https://gayag.netlify.app/"
            target="blank"
            className="btn btn-primary"
          >
            Live Demo
          </a></div>
        </article>
        <article className="portfolio__items">
          <div className="porfolio__item-image">
            <img src={IMG2} alt="IMG2" />
          </div>
          <h3>This Is portfolio Items title</h3>
          <div className="portfolio__item-cta">
          <a
            href="https://github.com/Bablukmr/twitter-clone"
            className="btn"
            target="blank"
          >
            Github
          </a>
          <a
            href="https://twitter-clone-bablukmr.netlify.app/"
            target="blank"
            className="btn btn-primary"
          >
            Live Demo
          </a></div>
        </article>
        <article className="portfolio__items">
          <div className="porfolio__item-image">
            <img src={IMG3} alt="IMG3" />
          </div>
          <h3>This Is portfolio Items title</h3>
          <div className="portfolio__item-cta">
          <a
            href="https://github.com/Bablukmr/Kanban-Board"
            className="btn"
            target="blank"
          >
            Github
          </a>
          <a
            href="https://kanban-board-bablu.vercel.app/"
            target="blank"
            className="btn btn-primary"
          >
            Live Demo
          </a></div>
        </article>
      </div>
    </section>
  );
}
