import React from "react";

function ImageBox(props){

    return(
        <figure className={props.class} >
        <img src={props.url} alt={props.alt} width={"100%"}/>
      </figure>
)
}
export default ImageBox