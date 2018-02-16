import React from "react";
// JUMBOTRON STYLES
import "./Jumbotron.css";

// JUMBORTRON COMPONENT
const Jumbotron = ({ children }) => {
    // RETURN THE HTML FOR THE JUMBOTRON    
    return (
        // JUMBOTRON START
        <div className="jumbotron">
            Hello World!
        </div>        
    ); // END RETURN
}; // END JUMBOTRON

// EXPORT JUMBOTRON 
export default Jumbotron;