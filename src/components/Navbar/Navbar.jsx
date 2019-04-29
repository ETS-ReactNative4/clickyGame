
/*
    NAVBAR.JSX CONTAINS THE NAVBAR COMPONENT
*/

// DEPENDENCIES
import React, { Component } from "react";

import styles from "./NavbarStyles"

// NAVBAR COMPONENT
class NavbarComp extends Component {
    // RENDER 
    render() {
        console.log(this.props.feedback)
        // RETURN THE HTML FOR THE NAVBAR
        return (
            // NAVBAR
            <div
                className="col-xs-12 text-center header">
                {/* COMMUMN ONE */}
                <div className="clicker col-xs-12 col-md-6" style={styles.brandLogo}>
                    CLICKER! 
                </div>
                {/* COMMUMN TWO */}
                {/* COMMUMN THREE */}
                <div 
                    className="score col-xs-12 col-md-6" 
                    style={styles.score}>
                Score: {this.props.score} | High-Score: {this.props.highScore}
                </div>
            </div>
        ); // END RETURN        
    }; // END RENDER














}; // END NAVBAR

// EXPORT NAVBAR
export default NavbarComp;