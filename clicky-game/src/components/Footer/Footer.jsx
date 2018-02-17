
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
        <footer class="footer">
            <div class="container">
                <p class="text-muted">
                    Place sticky footer content here.
                </p>
            </div>
        </footer>
    ); // END RETURN
}; // END FOOTER

// EXPORT FOOTER
export default Footer;