import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie'
import "../css/Comments.css"
function Comments(props){
    let token = Cookies.get('jwt')
    const [comments, setComments] = useState([{}]);
    const [userName, setUsername] = useState("Usuario")
    async function getUser(){
        await axios.get(`http://localhost:8000/verify/${token}`)
        .then((result) => {
            setUsername(result.data.userName)
        }).catch((err) => {
            console.log(err.response.data)
        });
    }
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
    getUser()
},[])
    return(
        <>
        <div className="hr-div">
        <hr />
        </div>
        <div className="comments">
            <h1>Comentarios</h1>
            <div>

            <form onSubmit={(e)=>formSubmit(e)} id="form"    >
                <div className="svg-cont">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-circle svg" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                     <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
                </div>
                <div className="input-title">
                <h1> {userName} </h1>
                <input type="text" placeholder="Escribe tu comentario" name="comment" className="comments-input"  autoComplete="off" required/>
                </div>
                <button type="submit" className="button-submit">
                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-check-circle-fill svg-check" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
                </button>
            </form>
            </div>
            {comments.length>0 ?(
                <div >
                    {comments.map((comments)=>{
                        return(
                            <div key={comments.index} className="comments-child">
                                {comments.comment?(
                                <div className="comments-user-svg">
                                    <div className="svg-cont">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-circle svg" viewBox="0 0 16 16">
                                         <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                         <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                         </svg>
                                    </div>
                                <div>
                                    <div className="user-date">
                                        <h1>{comments.user}</h1>
                                        <p>{comments.date}</p>
                                    </div>
                                <p className="comment">{comments.comment}</p>
                                </div>
                                </div>

                                ):(
                                    <></>
                                )}
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