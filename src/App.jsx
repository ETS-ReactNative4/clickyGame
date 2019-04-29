
/*
    APP.JSX CONTAINS THE APP COMPONENT THAT ALL THE OTHER GET RENDERED ON. 
*/

// DEPENDENCIES
import React, { Component } from "react";

// NAVBAR
import Navbar from "./components/Navbar";
// IMAGE
import Image from "./components/Image";

//  IMAGES
import Pic from "./Images.json";

import styles from "./AppStyles";

// GAME RULE VARS
let guess = [];
let score = 0;
let highScore = 0;

// APP COMPONENT
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            correct: true
        };
    }; 

    resetTheGame = () => {
        score = 0;
        guess = [];
        this.setState({ correct: true });
    };

    compareTheScore = () => {
        if (score > highScore) {
            highScore = score;
            this.resetTheGame();
        } else {
            this.resetTheGame();
        }
    };

    checkThePlayerGuess = (id) => {
        // CHACK TO SEE IF IMG HAS BEEN CHOSEN YET
        if (guess.indexOf(id) > -1) {
            this.compareTheScore();
        } else {
            guess.push(id);
            score++;
            this.setState({ correct: false });
        };
    }; // END PLAYER GUESS

    // RENDRER
    render() {
        // RETRUN THIS HTML
        return (
            // THESE COMPONENTS STAY OUT OF THE CONTAINER
            <div style={styles.contentStyle}>
                {/* NAVBAR */}
                <div>
                    <Navbar
                        style={styles.navbarStyle}
                        score={score}
                        highScore={highScore}
                    />
                </div>
                <div className="container text-center">
                    {/* IMAGE */}
                    <div className="row"  style={styles.imageContent}>
                        <Image
                            onClick={this.checkThePlayerGuess}
                            image={Pic}
                        />
                    </div>
                </div>
            </div>
        );  // END RETURN
    };  // END RENDER
};  // END APP COMPONENT

// EXPORT APP COMPONENT
export default App;
