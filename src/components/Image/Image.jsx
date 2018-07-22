/*
    IMAGE.JSX CONTAINS THE IMAGE COMPONENT THAT ALL THE IMAGES WILL RENDER AS
*/

// DEPENDENCIES
import React from "react";
// IMAGE STYLES
import "./Image.css";

// SHUFFLE ARRAY MOVES EVERYTHING IN THE ARRAY AROUND RANDOMLY BEFORE RENDERING
function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}; // END SHUFFLE ARRAY

// IMAGE COMPONENT
function Image(props) {

    // IMAGE IS THE IMAGE ARRAY TAKEN IN AS A PROP
    const image = props.image;
    // PASS THE IMAGES INTO THE SHUFFLE ARRAY FUNCTION ABOVE
    const shuffledPosts = shuffleArray(image);

    // RENDER IMAGE IS A LOOP THAT CREATES MULTIPLE IMAGES FROM THE ARRAY
    const renderImage = shuffledPosts.map(img => {
        // RETURN THIS COMPONENT
        return (
            <div className="col-xs-4 col-xs-3 col-xs-3">
                <button 
                key={img.id.toString()}
                onClick={(e) => {
                    e.preventDefault();
                    props.onClick(img.id)
                }}
                    type="button"
                    className="btn btn-default btn-lg"
                    >
                    
                    <img src={img.link} alt={img.name} height='200'/>
                    
                </button>
            </div>
        ); // END RETURN
    }); // END RENDER IMAGE

    // RENDER RETURN THE HTML FOR THE IMAGE
    return (
        <div>
            {renderImage}
        </div>
    ); // END RETURN
}; // END IMAGE

// EXPORT IMAGE
export default Image;