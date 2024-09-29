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
        <>
            <p>About Me</p>
            <div className="pdf">
            <PdfViewer pdfUrl="/document.pdf" />
            </div>
        </>
        
    );
}
