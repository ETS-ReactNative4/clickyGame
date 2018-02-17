


/*
    APP FILE CONTAINS THE APP COMPONENT THAT ALL THE OTHER GET RENDERED ON. 
*/

// DEPENDENCIES
import React, {Component} from "react";

// JUMBOTRON
import Jumbotron from "./components/Jumbotron";

// APP COMPONENT
class App extends Component {
    // RENDRER
    render () {
        // RETRUN THIS HTML
        return (
            // BOOTSTRAP CONTAINER
            <div className="container">
                <div className="row text-center">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <Jumbotron  />
                    </div>      
                </div>
            </div>
        ); // END RETURN
    };// END RENDER
};  // END APP COMPONENT

// EXPORT APP COMPONENT
export default App;
