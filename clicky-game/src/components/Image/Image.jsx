
/*
    IMAGE.JSX CONTAINS THE IMAGE COMPONENT THAT ALL THE IMAGES WILL RENDER AS
*/

// DEPENDENCIES
import React, {Component} from "react";
// IMAGE STYLES
import "./Image.css";

// IMAGE COMPONENT
class Image extends Component {
    // RENDER
    render () {
        // RETURN THE HTML FOR THE IMAGE    
        return (
            <button>
                IMAGE BUTTON
            </button>
        ); // END RETURN        
    } // END RENDER 
}; // END IMAGE

// EXPORT IMAGE 
export default Image;