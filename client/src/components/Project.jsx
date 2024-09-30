/*
File Name: Project.jsx
Student Name: Soroush Fazel-Pour
Student ID: 301368534
Date: September 29, 2024
*/
import React from "react";
import '../css/project.css';

export default function Project() {
    return (
        <div className="project-container">
            <h2 className="project-header">My Projects</h2>
            <div className="projects-columns">
                <div className="project-column">                    
                    <h3>Ontario's Premiers</h3>
                    <p>Created a WinForm app that displays a scrollable list of the Premiers of Ontario</p>
                    <p>Handled primary responsibility of creating the WinForm app and the dictionary containing the data</p>
                    <img src="/project1.png" alt="Project 1" className="imgProject" />   
                </div>
                <div className="project-column">
                    <h3>Course Evaluation Website Mockup</h3>
                    <p>Created a website meant for submitting course evaluations as a form.</p>
                    <img src="/project2.png" alt="Project 2" className="imgProject" />
                </div>
                <div className="project-column">
                    <h3>Realtor Website Mockup</h3>
                    <p>Created a multi-page website of a real-estate agent with 3 listings</p>
                    <p>Each listing had numerous images with descriptions, displayed using a carousel.</p>
                    <img src="project3.png" alt="Project 3" className="imgProject" />
                </div>
            </div>
        </div>
    );
}