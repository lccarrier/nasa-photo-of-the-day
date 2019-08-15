import React from "react";

export function Image(props) {

    return (
        <img src={props.imgURL} alt="x" style={{ width: "100px", height: "100px"}}></img>
    )
}

export default Image;