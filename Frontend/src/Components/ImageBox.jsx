import React from "react";

function ImageBox(props){

    return(
        <div className={props.class?props.class:"image-box"}>
            <img src={props.url} alt={props.alt} />
        </div>
)
}
export default ImageBox