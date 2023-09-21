//import react
import React from "react";
//import images
import projectImage from "./images/project-1.png";
import projectImage2 from "./images/project-2.jpg";
import projectImage3 from "./images/project-3.jpg";
import projectImage4 from "./images/project-4.jpg";
import projectImage5 from "./images/project-4.png";
// import styles
import "./styles/Projects.css";

export default function Projects() {
  return (
    <section className="projects">
      <h2>PROJECTS</h2>
      <p>
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </p>
      <Project
        src={projectImage}
        alt={"portfolio website"}
        head={"Portfolio"}
        desc={
          "Portfolio website is my private project with a minimalist design built in React"
        }
        git={"https://github.com/UrosZikic/Portfolio"}
        web={"https://uroszikic.github.io/Portfolio/"}
        position={"bottom"}
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
      />
      <Project
        src={projectImage3}
        alt={"Grapxo Website"}
        head={"Grapxo"}
        desc={
          "Grapxo is a single pagewebsite built in html, css and javascript. Grapxo showcases many different sections ranging from a carousel to contact form"
        }
        git={"https://github.com/UrosZikic/Graxpo"}
        web={"https://uroszikic.github.io/Graxpo/"}
        position={"center"}
      />
      <Project
        src={projectImage4}
        alt={"Omni Website"}
        head={"Omni"}
        desc={
          "Omni is an e-commerce website project. Omni showcases typical online store features such as a carousel, a store page, categories, product pages and a contact form."
        }
        git={"https://github.com/UrosZikic/OmniPhones"}
        web={"https://uroszikic.github.io/OmniPhones/"}
        position={"bottom"}
      />
      <Project
        src={projectImage5}
        alt={"Statistics Website"}
        head={"EU Population Info"}
        desc={
          "This website provides general info on any European country as well as a table data containing info about the country's population, fertility, mortality and so on.. This website was built with JS API with PHP and SQL on the backend."
        }
        git={"https://github.com/UrosZikic/Euro-Stats"}
        // web={"https://uroszikic.github.io/OmniPhones/"}
        position={"bottom"}
      />
    </section>
  );
}

function Project({ src, alt, head, desc, git, web, position }) {
  return (
    <div className="project" id="projects">
      <img src={src} alt={alt} style={{ objectPosition: position }} />
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
