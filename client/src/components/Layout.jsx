import React from "react";
import { Link } from "react-router-dom";
import "../css/styles.css";

 function Layout() {
    return (
        <>
            <h1>My Portfolio</h1>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/services">Services </Link>| <Link to="/project">Projects </Link>| <Link to="/contact">Contact</Link>
            </nav>
            <br/><br/>
            <hr />
        </>
    );
}
export default Layout;