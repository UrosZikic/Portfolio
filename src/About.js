// import css
import "./styles/About.css";
// import react
import React from "react";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faPhp } from "@fortawesome/free-brands-svg-icons";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <section className="about">
      <Description />
      <Skills />
    </section>
  );
}

function Description() {
  return (
    <div className="description">
      <h2>About me:</h2>
      <p>
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
  return (
    <ul className="skills">
      <li>
        <FontAwesomeIcon icon={faHtml5} />
      </li>
      <li>
        <FontAwesomeIcon icon={faCss3} />
      </li>
      <li>
        <FontAwesomeIcon icon={faSass} />
      </li>
      <li>
        <FontAwesomeIcon icon={faBootstrap} />
      </li>
      <li>
        <FontAwesomeIcon icon={faJs} />
      </li>
      <li>
        <FontAwesomeIcon icon={faReact} />
      </li>
      <li>
        <FontAwesomeIcon icon={faGitAlt} />
      </li>
      <li>
        <FontAwesomeIcon icon={faPhp} />
      </li>
      <li>
        <FontAwesomeIcon icon={faDatabase} />
      </li>
    </ul>
  );
}
