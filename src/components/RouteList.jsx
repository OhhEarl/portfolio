import { Routes, Route } from "react-router-dom";
import Home from "./Home"; // Assuming you have a Home component
import About from "./About"; // Assuming you have a Home component
import NotFound from "./NotFound"; // Assuming you have a Home component

import GetInTouch from "./GetInTouch";
import Projects from "./Projects";

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/get-in-touch" element={<GetInTouch />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouteList;
