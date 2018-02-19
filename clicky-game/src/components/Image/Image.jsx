/*
    IMAGE.JSX CONTAINS THE IMAGE COMPONENT THAT ALL THE IMAGES WILL RENDER AS
*/

// DEPENDENCIES
import React from "react";
// IMAGE STYLES
import "./Image.css";

// IMAGE COMPONENT
function Image(props) {
    // IMAGE IS THE IMAGE ARRAY TAKEN IN AS A PROP
    const image = props.image;
    // RENDER IMAGE IS A LOOP THAT CREATES MULTIPLE IMAGES FROM THE ARRAY
    const renderImage = image.map(img => <button type="button" class="btn col-xs-4 col-xs-3 col-xs-3" key={img.id}>
        {img.link}
    </button>);
    // RENDER RETURN THE HTML FOR THE IMAGE
    return (
        <div>
            {renderImage}
        </div>
    ); // END RETURN
}; // END IMAGE

// EXPORT IMAGE
export default Image;