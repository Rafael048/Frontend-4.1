import React from "react";

function BoxText(props){
    let className = props.class
    let title = props.title
    let text = props.text

return(
    <section className={className}>
        {title!=null? <h1>{title}</h1>:null}
        {text.map((text,index)=>{
            return(
                <p key={index}>{text} </p>
            )
        })}
    </section>
)
}

export default BoxText