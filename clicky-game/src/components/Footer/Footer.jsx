
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
                    <p className="col-xs-6">
                        ©Clicker
                    </p>
                    <p className="col-xs-6 col-sm-6 col-md-6">
                        Joshua Spears 
                    </p>
                </div>
            </footer>
        ); // END RETURN        
    } // END RENDER
}; // END FOOTER

// EXPORT FOOTER
export default Footer;