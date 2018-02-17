
/*
    JUMBOTRON.JSX CONTAINS THE JUMBOTRON COMPONENT
*/

// DEPENDENCIES
import React from "react";
// JUMBOTRON STYLES
import "./Jumbotron.css";

// JUMBORTRON COMPONENT
const Jumbotron = ({ children }) => {
    // RETURN THE HTML FOR THE JUMBOTRON    
    return (
        // BOOTSTRAP JUMBOTRON 
        <div className="jumbotron col-xs-12 col-sm-12 col-md-12 text-center">
            <h1>
                Hello World! 
            </h1>
        </div>        
    ); // END RETURN
}; // END JUMBOTRON

// EXPORT JUMBOTRON 
export default Jumbotron;