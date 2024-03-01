// import css
import React from "react";
import "./styles/Home.css";
// import files

export default function Home() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="home" id="home">
      <h1>Aspiring Web Developer</h1>
      <p>Passionate about creating web applications that make a difference</p>
      <a href="#projects" onClick={() => scrollToSection("projects")}>
        Projects
      </a>
    </section>
  );
}
