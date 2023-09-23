// import styles
import "./styles/Navbar.css";
//import react
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Navbar() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 900);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 900);
    };

    // Add the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <a href="#home" className="logo">
        uz
      </a>
      <ul style={{ display: isLargeScreen ? "flex" : "none" }}>
        <NavLinks
          link="#home"
          children="Home"
          onClick={() => scrollToSection("home")}
        />
        <NavLinks
          link="#about"
          children="About"
          onClick={() => scrollToSection("about")}
        />
        <NavLinks
          link="#projects"
          children="Projects"
          onClick={() => scrollToSection("projects")}
        />
        <NavLinks
          link="#contact"
          children="Contact"
          onClick={() => scrollToSection("contact")}
        />
      </ul>
      <MenuToggle
        isLargeScreen={isLargeScreen}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div
        className="menu"
        style={{
          zIndex: isOpen ? 100 : -10,
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
        }}
      >
        <Menu isOpen={isOpen} isLargeScreen={isLargeScreen} />
      </div>
    </header>
  );
}

function NavLinks(props) {
  return (
    <li className="link-item">
      <a
        href={props.link}
        // className={!props.isDisabled ? "disabled-button" : ""}
        onClick={props.onClick}
      >
        {props.children}
      </a>
      <div></div>
    </li>
  );
}

function MenuToggle(props) {
  // If it's a large screen, don't render the button
  if (props.isLargeScreen) return null;

  // Determine the button's alignment based on the `isOpen` state
  const buttonAlignment = props.isOpen ? "flex-end" : "center";

  return (
    <button
      className="toggle-menu"
      id="toggle"
      style={{ alignSelf: buttonAlignment }}
      onClick={() => props.setIsOpen(!props.isOpen)}
    >
      <div className={props.isOpen ? "menu-first--animation" : ""}></div>
      <div className={props.isOpen ? "menu-second--animation" : ""}></div>
      <div className={props.isOpen ? "menu-third--animation" : ""}></div>
    </button>
  );
}

function Menu(props) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const toggle = document.getElementById("toggle");
    if (section) {
      toggle.click();
      section.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    props.isLargeScreen === false && (
      <ul style={{ display: props.isOpen ? "flex" : "none" }}>
        <NavLinks
          link="#home"
          children="Home"
          onClick={() => scrollToSection("home")}
        />
        <NavLinks
          link="#about"
          children="About"
          onClick={() => scrollToSection("about")}
        />
        <NavLinks
          link="#projects"
          children="Projects"
          onClick={() => scrollToSection("projects")}
        />
        <NavLinks
          link="#contact"
          children="Contact"
          onClick={() => scrollToSection("contact")}
        />
      </ul>
    )
  );
}
