import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './home.css'

function Home () {
    return(
        <>
        <h1>Home</h1>
        <nav>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Home;
