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

  return (
    <header>
      <a href="/" className="logo">
        uz
      </a>
      <ul style={{ display: isLargeScreen ? "flex" : "none" }}>
        <NavLinks link="/" children="Home" />
        <NavLinks link="/" children="About" />
        <NavLinks link="/" children="Projects" />
        <NavLinks link="/" children="Contact" />
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
        className={!props.isDisabled ? "disabled-button" : ""}
      >
        {props.children}
      </a>
      <div></div>
    </li>
  );
}

// function MenuToggle(props) {
//   if (props.isLargeScreen) props.setIsOpen(false);
//   return (
//     props.isLargeScreen === false && (
//       <button
//         className="toggle-menu"
//         style={{ alignSelf: props.isOpen ? "flex-end" : "center" }}
//         onClick={() => props.setIsOpen(!props.isOpen)}
//       >
//         <div className={props.isOpen ? "menu-first--animation" : ""}></div>
//         <div className={props.isOpen ? "menu-second--animation" : ""}></div>
//         <div className={props.isOpen ? "menu-third--animation" : ""}></div>
//       </button>
//     )
//   );
// }
function MenuToggle(props) {
  // If it's a large screen, don't render the button
  if (props.isLargeScreen) return null;

  // Determine the button's alignment based on the `isOpen` state
  const buttonAlignment = props.isOpen ? "flex-end" : "center";

  return (
    <button
      className="toggle-menu"
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
  return (
    props.isLargeScreen === false && (
      <ul style={{ display: props.isOpen ? "flex" : "none" }}>
        <NavLinks link="/" children="Home" isDisabled={props.isOpen} />
        <NavLinks link="/" children="About" isDisabled={props.isOpen} />
        <NavLinks link="/" children="Projects" isDisabled={props.isOpen} />
        <NavLinks link="/" children="Contact" isDisabled={props.isOpen} />
      </ul>
    )
  );
}
