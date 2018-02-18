
/*
    APP.JSX CONTAINS THE APP COMPONENT THAT ALL THE OTHER GET RENDERED ON. 
*/

// DEPENDENCIES
import React, {Component} from "react";

// JUMBOTRON
import Jumbotron from "./components/Jumbotron";
// NAVBAR
import Navbar from "./components/Navbar";
// FOOTER 
import Footer from "./components/Footer";
//  IMAGES
// import Heros from "./Heros";

// APP COMPONENT
class App extends Component {
    // RENDRER
    render () {
        // RETRUN THIS HTML
        return (
            // THESE COMPONENTS STAY OUT OF THE CONTAINER
            <div>
                {/* NAVBAR */}
                <div className="row">
                    <Navbar />
                </div>
                {/* JUMBOTRON */}
                <div className="row">
                    <Jumbotron  />     
                </div>                
                <div className="row">
                    <Footer />
                </div>
            </div>
        );  // END RETURN
    };  // END RENDER
};  // END APP COMPONENT

// EXPORT APP COMPONENT
export default App;
