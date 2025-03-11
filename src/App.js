import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar.tsx';
import { Projects } from './pages/Projects.tsx';
import { DesignExpo } from './pages/DesignExpo.tsx';
import { About } from './pages/About.tsx';
import { Contact } from './pages/Contact.tsx';

function App() {
  return (
    <Router>
      <div className='bg-secondary'>
      <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/design" element={<DesignExpo />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
