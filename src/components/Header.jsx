import React from "react";
import {Link} from "react-router-dom";

import "../styles/Header.css";


export default function Header() {
    return (
        <div className="links">
            <div>
             <Link to="/" className='link nav-link active'>LOGO</Link>
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
