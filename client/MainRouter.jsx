/*
File Name: MainRouter.jsx
Student Name: Soroush Fazel-Pour
Student ID: 301368534
Date: September 29, 2024
*/

import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './src/components/Home';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Services from './src/components/Services';
import Project from './src/components/Project';
import Layout from './src/components/Layout';

const MainRouter = () => {
    return (<div>
            <Layout/>
            <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/services" element={<Services />} />
                    <Route exact path="/project" element={<Project />} />
                    <Route exact path="/contact" element={<Contact />} />                    
            </Routes>

    </div>
    )
}
export default MainRouter