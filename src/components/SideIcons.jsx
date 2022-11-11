import React from "react";
import {Link} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands} from '@fortawesome/fontawesome-svg-core/import.macro';

import "../styles/SideIcons.css";


export default function SideIcons() {
  return (
    <div className="wrapper">
    <div className="wrapper__links">
          <div className="pulser">
            <a href="https://www.linkedin.com/in/nkwor-jane/" target="_blank" rel="noreferrer" className="icons">
              <FontAwesomeIcon icon={brands("linkedin")} size="2x"/>
            </a>
            </div>
          <div className="pulser">
            <a href="https://twitter.com/gifted_jane" target="_blank" rel="noreferrer" className="icons" >
                <FontAwesomeIcon icon={brands("twitter")} size="2x" />
            </a>
          </div>
         
          <div className="pulser">
            <a href="https://github.com/Nkwor-Jane" target="_blank" rel="noreferrer" className="icons">
              <FontAwesomeIcon icon={brands("github")} size="2x" />
            </a>
          </div>
          <div className="pulser">
            <Link to="/contact" >
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
            </svg>
            </Link>
          </div>
    </div>
    </div>
  )
}
