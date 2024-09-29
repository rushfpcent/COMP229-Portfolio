/*
File Name: Home.jsx
Student Name: Soroush Fazel-Pour
Student ID: 301368534
Date: September 29, 2024
*/

//#Mission Statement
import { Link } from 'react-router-dom';
import '../css/home.css';

export default function Home() {
    return (
        <div className='home'>
        <h2>Hello! Welcome to my personal page!</h2>
        <p>My name is Soroush and I am a student in Centennial College's Software Engineering Technology program with a focus on Artificial Intelligence and Machine Learning. </p>
        <br></br>
        <p>On this site you can find more information about <Link to="/about">me</Link>, <Link to="/services">my skill set</Link>, and <Link to="/project">what I have done so far.</Link></p>
        <br></br>
        <p>My goal with the creation of this website is to obtain greater knowledge of the React framework, as well as project deployment. In addition, I hope to use this project as a template for building my own professional website.</p>
        
        </div>
    );
}