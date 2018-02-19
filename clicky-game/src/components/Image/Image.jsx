/*
    IMAGE.JSX CONTAINS THE IMAGE COMPONENT THAT ALL THE IMAGES WILL RENDER AS
*/

// DEPENDENCIES
import React, {Component} from "react";
// IMAGE STYLES
import "./Image.css";

// IMAGE COMPONENT
function Image(props) {

    const image = props.image;
  
    const renderImage = image.map((img) =>
      <button type="button" class="btn btn-default btn-lg">
        {image.link}
      </button>

    // RENDER RETURN THE HTML FOR THE IMAGE
    return (
        <div class="col-xs-4 col-sm-3 col-md-3">

        </div>
    ); // END RETURN
}; // END IMAGE

// EXPORT IMAGE
export default Image;