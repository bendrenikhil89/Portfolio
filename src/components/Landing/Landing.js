import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div className="landing__container">
            <h1>Nikhil <span className="landing__lastname">Bendre</span></h1>
            <h2>I'm a software developer</h2>
            <ul className="landing__social-networks bounce">
                <li><a href="https://www.linkedin.com/in/nikhil-bendre-529939104/" className="landing__icon-linkedin" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/bendrenikhil89" className="landing__icon-github" target="_blank">GitHub</a></li>
            </ul>
            <div className="landing__arrow landing__bounce">
                <Link to="/portfolio"><i className="fas fa-angle-double-down fa-2x"></i></Link>
            </div>
        </div>
    )
}

export default Landing
