//import react
import React from "react";
//import images
import projectImage from "./images/project-1.webp";
import projectImage2 from "./images/project-2.jpg";
import projectImage3 from "./images/project-3.jpg";
import projectImage4 from "./images/project-4.png";
import projectImage5 from "./images/project-5.png";
// import styles
import "./styles/Projects.css";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>PROJECTS</h2>
      <p>
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </p>
      <Project
        src={projectImage}
        alt={"E-shop"}
        head={"E-shop"}
        desc={
          "E-shop is a simple e-commerce website designed for small businesses."
        }
        git={"https://github.com/UrosZikic/E-shop"}
        web={"https://cbonlinestore.000webhostapp.com/"}
        position={"center"}
        fit={"contain"}
      />
      <Project
        src={projectImage2}
        alt={"Snow Website"}
        head={"Snow"}
        desc={
          "Snow is a website I have cloned using html, css and javascript. Snow showcases products and consists of several pages."
        }
        git={"https://github.com/UrosZikic/Snow-prototype"}
        web={"https://uroszikic.github.io/Snow-prototype/"}
        position={"center"}
        fit={"cover"}
      />
      <Project
        src={projectImage3}
        alt={"Movie Overview"}
        head={"Moview Overview"}
        desc={
          "Film-overview utilizes TMDB API FILM-OVERVIEW is a show based website built on TMDB's API."
        }
        git={"https://github.com/UrosZikic/film-overview"}
        web={"https://uroszikic.github.io/film-overview/"}
        position={"center"}
        fit={"cover"}
      />
      <Project
        src={projectImage4}
        alt={"ErrandEr Website"}
        head={"ErrandEr"}
        desc={
          "ErrandEr is a task management app built in JavaScript. It provides crud capabilities, filtering tasks by priority as well as a theme toggle."
        }
        git={"https://github.com/UrosZikic/ErrandEr"}
        web={"https://uroszikic.github.io/ErrandEr/"}
        position={"bottom"}
        fit={"contain"}
      />
      <Project
        src={projectImage5}
        alt={"Statistics Website"}
        head={"EU Population Info"}
        desc={
          "This website provides general info on any European country as well as a table data containing info about the country's population, fertility, mortality and so on.. This website was built with JS API with PHP and SQL on the backend."
        }
        git={"https://github.com/UrosZikic/Euro-Stats"}
        web={"https://euro-stats.000webhostapp.com/index.php"}
        position={"bottom"}
        fit={"cover"}
      />
    </section>
  );
}

function Project({ src, alt, head, desc, git, web, position, fit }) {
  return (
    <div className="project" id="projects">
      <img
        src={src}
        alt={alt}
        style={{ objectPosition: position, objectFit: fit }}
      />
      <div>
        <h3>{head}</h3>
        <p>{desc}</p>
        <a href={git} target="blank">
          github
        </a>
        <a
          style={{ display: web ? "block" : "none" }}
          href={web}
          target="blank"
        >
          website
        </a>
      </div>
    </div>
  );
}
