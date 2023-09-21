// import css
import "./styles/About.css";
// import react
import { useState } from "react";
import React from "react";
//import images
import projectImage from "./images/project-1.png";
import projectImage2 from "./images/project-2.jpg";

export default function About() {
  return (
    <section className="about">
      <Story />
      <Skills />
      <Projects />
    </section>
  );
}

function Story() {
  const [storyOpen, setStoryOpen] = useState(false);
  return (
    <div className="story">
      <div className="upper-part">
        <h3>About me:</h3>
        <ToggleButton storyOpen={storyOpen} setStoryOpen={setStoryOpen} />
      </div>

      <p style={{ display: storyOpen ? "block" : "none" }}>
        Hello! I'm a web developer from a small Serbian town with a background
        in English. I graduated in 2022 and began my web development journey by
        mastering HTML, CSS, and JavaScript, eventually diving into TypeScript
        and React. In 2023, I joined the Divac Foundation's IT Bootcamp to delve
        into backend development using PHP, SQL, Laravel, and GIT. With both
        front-end and back-end skills, I've worked on personal projects and
        contributed as a front-end developer to open-source projects. I'm
        passionate about web development and excited to tackle new challenges,
        bringing innovative web solutions to life.
      </p>
    </div>
  );
}

function Skills() {
  const [storyOpen, setStoryOpen] = useState(false);
  return (
    <div className="story">
      <div className="upper-part">
        <h3 style={{ marginLeft: "6rem" }}>Skills:</h3>
        <ToggleButton storyOpen={storyOpen} setStoryOpen={setStoryOpen} />
      </div>
      <ul
        className="skill-list"
        style={{
          display: storyOpen ? "grid" : "none",
        }}
      >
        <li>HTML</li>
        <li>CSS/SASS</li>
        <li>Bootstrap</li>
        <li>JavaScript/TS</li>
        <li>React</li>
        <li>PHP</li>
        <li>Laravel</li>
        <li>SQL</li>
        <li>GIT</li>
      </ul>
    </div>
  );
}

function Projects() {
  const [storyOpen, setStoryOpen] = useState(false);
  return (
    <div className="story">
      <div className="upper-part">
        <h3>Projects:</h3>
        <ToggleButton storyOpen={storyOpen} setStoryOpen={setStoryOpen} />
      </div>
      <Project
        storyOpen={storyOpen}
        setStoryOpen={setStoryOpen}
        src={projectImage}
        name={"portfolio website"}
        technologies={"React, Sass, Git"}
        description={
          "Portfolio project demonstrates my portfolio page using frameworkes, React and Sass. "
        }
        website={"https://github.com/UrosZikic/Portfolio"}
        github={"https://uroszikic.github.io/Portfolio/"}
      />
      <Project
        storyOpen={storyOpen}
        setStoryOpen={setStoryOpen}
        src={projectImage2}
        name={"Snow Website"}
        technologies={"JavaScript, Bootstrap, CSS, HTML"}
        description={
          "Snow project demonstrates a simple and elegant page design. It was built in vanilla JS and styled with CSS and BootStrap. "
        }
        website={"https://uroszikic.github.io/Snow-prototype/index.html"}
        github={" https://github.com/UrosZikic/Snow-prototype"}
      />
    </div>
  );
}

function Project(props) {
  return (
    <div
      className="project-list"
      style={{
        display: props.storyOpen ? "grid" : "none",
      }}
    >
      <div className="projects">
        <img src={props.src} alt="project" />
        <div>
          <p>project: {props.name}</p>
          <p>Technologies: {props.technologies}</p>
          <p>
            {props.description}
            <a href={props.github} target="blank">
              Visit Github
            </a>
            ,
            <a
              href={props.website}
              target="blank"
              style={{ marginLeft: "5px" }}
            >
              Visit Website
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

function ToggleButton(props) {
  return (
    <button
      style={{
        alignSelf: props.storyOpen ? "flex-end" : "center",
        transform: props.storyOpen ? "translateY(-8px)" : "translateY(0px)",
      }}
      onClick={() => props.setStoryOpen(!props.storyOpen)}
    >
      <div className={props.storyOpen ? "menu-first--animation" : ""}></div>
      <div className={props.storyOpen ? "menu-second--animation" : ""}></div>
      <div className={props.storyOpen ? "menu-third--animation" : ""}></div>
    </button>
  );
}
