
/*
    HEADER.JSX CONTAINS THE HEADER COMPONENT
*/

// DEPENDENCIES
import React from "react";
// HEADER STYLES
import "./Header.css";

// HEADER COMPONENT
const Header = ({ children }) => {
    // RETURN THE HTML FOR THE HEADER    
    return (
        // HEADER
        <div className="col-xs-12 col-xs-12 col-md-12 text-center header">
            {/* COMMUMN ONE */}
            <div className="col-xs-4">
                ONE 
            </div>
            {/* COMMUMN TWO */}
            <div className="col-xs-4">
                TWO
            </div>
            {/* COMMUMN THREE */}
            <div className="col-xs-4">
                THREE
            </div>
        </div>
    ); // END RETURN
}; // END HEADER

// EXPORT HEADER
export default Header;