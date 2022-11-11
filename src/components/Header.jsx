import React from "react";
import {Link} from "react-router-dom";
import profilePic from "../images/profile.jpg";

import "../styles/Header.css";


export default function Header() {
    return (
        <div className="links">
            <div>
             <Link to="/" className='link nav-link active'>
                <img src={profilePic} alt="my personal-pic" className="my-pic"/>
             </Link>
            </div>
            <nav>
                <ul>
                <li>
                    <Link to="/about" className='link nav-link active'>About Me</Link>
                </li>
                <li>
                    <Link to="/projects" className='link nav-link active'>Projects</Link>
                </li>
                <li>
                    <Link to="/contact" className='link nav-link active'>Contact Me</Link>
                </li>
                </ul>
            </nav>
        </div>
    )
}
