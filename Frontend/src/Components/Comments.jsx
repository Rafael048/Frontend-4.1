import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie'
import "../css/Comments.css"
function Comments(props){
    const [comments, setComments] = useState([{}]);
    async function getComments(){
        await axios.get(`http://localhost:8000/comments/${props.location}`)
        .then((comment) => {
            handleComments(comment.data)
        }).catch((err) => {
            if(err.response){
                console.log(err.response.data)
            }
        });
    }
    function handleComments(result){
        let data = result.data
        if(data.length>0){
            data.map((comment,index)=>{
                let data =     {
                        comment : comment.comment,
                        user : comment.user,
                        date : comment.date,
                        index : index
                    }
                setComments((prevComments)=>[...prevComments, data])
                return 1
            })
        }else{
            setComments([])
        }
        
    }
   async function formSubmit(e){
         e.preventDefault()
        let comment = e.target.comment.value
        let token = Cookies.get('jwt')
        let req = {
            comment: comment,
            user: token,
            location : props.location
        }
        await axios.post('http://localhost:8000/comments', req)
       .then((result) => {
        setComments((prevComments)=>[...prevComments, result.data.result])
        e.target.comment.value = ""

    }).catch((err) => {
        if(err.response){
            console.error(err.response.data)
        }
       });
   }
   useEffect(() => {
    getComments()
},[])
    return(
        <>
        <div className="comments">
            <h2>Comentarios</h2>

            <form onSubmit={(e)=>formSubmit(e)} id="form"    >
                <input type="text" placeholder="Escribe tu comentario" name="comment" className="comments-input"  autoComplete="off" required/>
                <button type="submit">Enviar</button>
            </form>
            {comments.length>0 ?(
                <div >
                    {comments.map((comments)=>{
                        return(
                            <div key={comments.index} className="comments-child">
                                <div className="comments-user">
                                <p> {comments.user} </p>
                                <p>{comments.date}</p>
                                </div>
                                <p className="comment">{comments.comment}</p>
                            </div>
                        )
                    })}
                </div>
            ):(
                    <h2>Aun no hay comentarios</h2>
            )}

        </div>
        </>
    )

}
export default Comments