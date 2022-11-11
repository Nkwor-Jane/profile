import React from "react";
import "../styles/FooterStyles.css";

import SideIcons from "../components/SideIcons"


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid} from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Footer() {
  return (
    <div className="footerParDiv">
            <div>
              <SideIcons/>
            </div>
            <div>
              {/* <p className="footerPar">
                Made with{' '}
                <FontAwesomeIcon icon={solid("heart")} className="heart"/> 
                 {' '}by Nkwor Jane
              </p> */}
            </div>
    </div>
  )
}
