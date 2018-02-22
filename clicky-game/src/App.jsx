
/*
    APP.JSX CONTAINS THE APP COMPONENT THAT ALL THE OTHER GET RENDERED ON. 
*/

// DEPENDENCIES
import React, { Component } from "react";

// JUMBOTRON
import Jumbotron from "./components/Jumbotron";
// NAVBAR
import Navbar from "./components/Navbar";
// FOOTER 
import Footer from "./components/Footer";
// IMAGE
import Image from "./components/Image";

//  IMAGES
import Pic from "./Images.json";

const guess = [];

// APP COMPONENT
class App extends Component {

    // PLAYER GUESS
    playerGuess = (id) => {
        // LOG THE ID 
        console.log(id);
        // PUSH THE ID INTO THE ARRAY
        guess.push(id);
        // LOG THE ARRAY WITH THE NEW ENTRY 
        console.log(guess);
    }; // END PLAYER GUESS


    // RENDRER
    render() {
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
                    <Jumbotron />
                </div>
                <div className="container">
                    {/* IMAGE */}
                    <div className="row">
                        <Image
                            onClick={this.playerGuess}
                            image={Pic} />
                    </div>
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
