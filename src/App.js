// imported styles
import "./styles/General.css";
// imported files
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
      </main>
    </>
  );
}
