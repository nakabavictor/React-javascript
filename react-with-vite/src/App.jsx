import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home";
import Project from "./pages/projects";
import Contact from "./pages/contact";
import About from "./pages/about";
import ScrollTop from "./utils/Scrollup";
import { AppContext } from "./context/AppContext";

function App() {
  const appContext = useContext(AppContext);

  if (appContext.loading) {
    return "Loading...";
  }

  return (
    <Router>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Project />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
