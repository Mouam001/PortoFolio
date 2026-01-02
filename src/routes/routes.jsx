import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Voyages from "../pages/Voyages/index.jsx";
import Skills from "../pages/Skills/index.jsx";
import Formations from "../pages/Formations/index.jsx";
import About from "../pages/About/index.jsx";
import Contact from "../pages/Contact/index.jsx";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/voyages" element={<Voyages />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}