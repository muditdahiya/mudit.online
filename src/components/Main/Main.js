import Home from "../Home/Home";

// import About from "../../components/About/About";
import Projects from "../Projects/Projects";
import About from "../About/About";

import { Routes, Route } from "react-router-dom";

function Main() {
  return (
    <div className="Main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default Main;
