
/*
    JUMBOTRON.JSX CONTAINS THE JUMBOTRON COMPONENT
*/

// DEPENDENCIES
import React, {Component} from "react";
// JUMBOTRON STYLES
import "./Jumbotron.css";

// JUMBORTRON COMPONENT
class Jumbotron extends Component {
    // RENDER
    render () {
        // RETURN THE HTML FOR THE JUMBOTRON    
        return (
            // BOOTSTRAP JUMBOTRON 
            <div className="jumbotron col-xs-12 col-sm-12 col-md-12 text-center">
                <h1 className="jumbo-header">
                    Dont click the same picture twice!
                </h1>
            </div>        
        ); // END RETURN        
    } // END RENDER 
}; // END JUMBOTRON

// EXPORT JUMBOTRON 
export default Jumbotron;