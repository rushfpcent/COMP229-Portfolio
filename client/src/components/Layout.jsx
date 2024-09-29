/*
File Name: Layout.jsx
Student Name: Soroush Fazel-Pour
Student ID: 301368534
Date: September 29, 2024
*/

import React from "react";
import { Link } from "react-router-dom";
import "../css/styles.css";

 function Layout() {
    return (
        <>
            <h1>
            <img src="..\src\assets\icons\logo1.png" alt="Logo" className="logo" />   My Portfolio
            </h1>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/services">Services </Link>| <Link to="/project">Projects </Link>| <Link to="/contact">Contact</Link>
            </nav>
            <br/><br/>
            <hr />
        </>
    );
}
export default Layout;