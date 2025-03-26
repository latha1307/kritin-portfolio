import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar.tsx";
import { Projects } from "./pages/Projects.tsx";
import { DesignExpo } from "./pages/DesignExpo.tsx";
import { About } from "./pages/About.tsx";
import { Contact } from "./pages/Contact.tsx";
import NewParentCaseStudy from "./pages/NewParentCaseStudy.tsx";
import { Footer } from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.tsx"; // Import ScrollToTop

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensure this is inside Router */}
      <div className="bg-secondary">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/design" element={<DesignExpo />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-study" element={<NewParentCaseStudy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
