/*
File Name: About.jsx
Student Name: Soroush Fazel-Pour
Student ID: 301368534
Date: September 29, 2024
*/

import React from "react";
import PdfViewer from "./PdfViewer";
import '../css/about.css';

export default function About() {
    return (
        <div className="about">
            <div className="about-container">
                <div className="about-text">
                    <h2>About Me</h2>
                    <p>My name is <b>Soroush Fazel-Pour</b> and I am currently in my second year of Software Engineering Technology at Centennial College.</p>
                    <p>The program has a focus on Artificial Intelligence and Machine Learning. I hope to leverage this education in pursuing a career at the intersection of machine learning and chemistry, my previous field of education.</p>
                    <p>In my spare time, I enjoy watching horror films, learning German, and trying out the vast variety of food Toronto has to offer.</p>
                </div>
                <div className="imgMe">
                    <img src="/me.jpg" alt="Picture of Soroush"/>
                </div>
            </div>
            <div className="pdf">
                <PdfViewer pdfUrl="/document.pdf" />
            </div>
        </div>
        
    );
}
