// imported styles
import "./styles/General.css";
// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
// imported files
import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

library.add(faHtml5);

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
      </main>
    </>
  );
}
