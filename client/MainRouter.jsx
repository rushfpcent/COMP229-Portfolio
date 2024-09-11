import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Project from './components/Project';
import Layout from './components/Layout';

const MainRouter = () => {
    return (<div>
            <Layout/>
            <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/education" element={<Education />} />
                    <Route exact path="/project" element={<Project />} />
                    <Route exact path="/contact" element={<Contact />} />                    
            </Routes>

    </div>
    )
}
export default MainRouter