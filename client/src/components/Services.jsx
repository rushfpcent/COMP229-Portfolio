/*
File Name: Services.jsx
Student Name: Soroush Fazel-Pour
Student ID: 301368534
Date: September 29, 2024
*/
import React from "react";
import '../css/services.css'

// React list info obtained from https://react.dev/learn/rendering-lists
// Specifically for nested lists, https://stackoverflow.com/questions/53773088/create-nested-jsx-list-items-from-multi-level-nested-array-of-objects-reactjs 

const services = [
    "General Programming",
    [
        "C#",
        "Java", 
        "Python",
    ],
    "Front-end web development",
    [
        "HTML",
        "CSS",
        "JavaScript"
    ],
    "Search Engine Optimization",

    "Additional",
    [
    "2 Years Chemistry Laboratory Experience",
    "Various Analytical Chemistry Techniques and Software"
    ]
];

export default function Services() {
    return (
        <>
            <div className="services-container">
            <h2>Services</h2>
            <ul className="services-list">
                {services.map((service, index) => (
                    <li key={index}>
                        {Array.isArray(service) ? (
                            <ul>
                                {service.map((subService, subIndex) => (
                                    <li key={subIndex}>{subService}</li>
                                ))}
                            </ul>
                        ) : (
                            service
                        )}
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
}