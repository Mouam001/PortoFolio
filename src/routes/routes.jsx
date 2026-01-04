import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Skills from "../pages/Skills/index.jsx";
import Formations from "../pages/Formations/index.jsx";
import About from "../pages/About/index.jsx";
import Contact from "../pages/Contact/index.jsx";
import Vie from "../pages/Vie/index.jsx";
import Voyages from "../pages/Vie/voyages/index.jsx";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/formations" element={<Formations/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/vie" element={<Vie/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/vie/voyages" element={<Voyages/>}/>
        </Routes>
    );
}