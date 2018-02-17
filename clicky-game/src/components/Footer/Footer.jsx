
/*
    FOOTER.JSX CONTAINS THE FOOTER COMPONENT
*/

// DEPENDENCIES
import React from "react";
// HEADER STYLES
import "./Footer.css";

// FOOTER COMPONENT
const Footer = ({ children }) => {
    // RETURN THE HTML FOR THE FOOTER    
    return (  
        //FOOTER
        <footer className="footer text-center">
            <div className="container">
                <p className="col-xs-6">
                    ©Clicker
                </p>
                <p className="col-xs-6 col-sm-6 col-md-6">
                    Joshua Spears 
                </p>
            </div>
        </footer>
    ); // END RETURN
}; // END FOOTER

// EXPORT FOOTER
export default Footer;