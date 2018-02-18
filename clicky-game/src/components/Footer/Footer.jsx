
/*
    FOOTER.JSX CONTAINS THE FOOTER COMPONENT
*/

// DEPENDENCIES
import React, {Component} from "react";
// HEADER STYLES
import "./Footer.css";

// FOOTER COMPONENT
class Footer extends Component {
    // RENDER THIS COMPONENT
    render () {
        // RETURN THE HTML FOR THE FOOTER    
        return (  
            //FOOTER
            <footer className="footer text-center">
                <div className="container">
                    <p>
                        © CLICKER! | Joshua Spears-Phillips
                    </p>
                </div>
            </footer>
        ); // END RETURN        
    } // END RENDER
}; // END FOOTER

// EXPORT FOOTER
export default Footer;