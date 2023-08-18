import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/img1.PNG";
import IMG2 from "../../assets/img2.PNG";
import IMG3 from "../../assets/img3.PNG";
import IMG4 from "../../assets/Gym.PNG";
import IMG5 from "../../assets/doc.PNG";
import Blogger from "../../assets/blog.png";

export default function Portfolio() {
  return (
    <section id="Portfolio" className="portfolio_section">
      <h2>My Projects</h2>
      <div className="container portfolio__container">
        <article className="portfolio__items">
          <div className="porfolio__item-image">
            <img src={IMG1} alt="IMG1" />
          </div>
          <h3>GayaG Travel</h3>
          <p>
            Through this project, represent home district, Gaya Tourism. Gaya is
            historically rich and renowned for tourism.
          </p>
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
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="porfolio__item-image">
            <img src={IMG2} alt="IMG2" />
          </div>
          <h3>Twitter Clone</h3>
          <p>
            - Collaborated with a team to build a feature Twitter clone from
            scratch.
            <br />
            -Designed and developed the front-end interface, ensuring an
            intuitive and user-friendly experience.
          </p>
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
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="porfolio__item-image">
            <img src={IMG3} alt="IMG3" />
          </div>
          <h3>Kanban Board</h3>
          <p>
            Kanban board is used to track work items as they move through each
            stage of the workflow. Each work item is represented by a card that
            is placed on the board,
          </p>
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
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="porfolio__item-image">
            <img src={IMG4} alt="IMG3" />
          </div>
          <h3>Gym-website</h3>
          <p>
            - This project is based on GYM Site.
            <br />- Users can check the overview and features of the Gym.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Bablukmr/Gym-website"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://gym-bablukmr.vercel.app/"
              target="blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="porfolio__item-image">
            <img src={IMG5} alt="IMG3" />
          </div>
          <h3>Google Doc</h3>
          <p>
            - Utilized Google Docs as a powerful tool using quill library
            <br />- Google Docs allows users to create and edit documents
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Bablukmr/Google-Doc"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://google-doc-bablukmr.vercel.app/"
              target="blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="porfolio__item-image">
            <img src={Blogger} alt="IMG3" />
          </div>
          <h3>Blogger-Application</h3>
          <p>
          full stack web application that provides users with an immersive and seamless blogging experience. By leveraging the power of Next.js and React.js, users can enjoy a dynamic, fast, and responsive platform for expressing their thoughts and ideas through captivating blog posts.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Bablukmr/blog-application"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://blog-application-bk.vercel.app/"
              target="blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
