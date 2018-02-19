/*
    IMAGE.JSX CONTAINS THE IMAGE COMPONENT THAT ALL THE IMAGES WILL RENDER AS
*/

// DEPENDENCIES
import React from "react";
// IMAGE STYLES
import "./Image.css";

// IMAGE COMPONENT
function Image(props) {

    const image = props.image;

    const renderImage = image.map(img => <button type="button" class="btn btn-default btn-lg" key={img.id}>
            {img.link}
        </button>
    );

    // RENDER RETURN THE HTML FOR THE IMAGE
    return (
        <div>
            {renderImage}
        </div>
    ); // END RETURN
}; // END IMAGE

// EXPORT IMAGE
export default Image;