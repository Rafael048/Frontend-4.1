import React from "react";
import axios from "axios"
import Cookies from "js-cookie"
import {Link} from 'react-router-dom'
function Button(props){
    async function linkButton(e) {
        try {
         
          if(e.target.name === "Cerrar Sesion"){
            const response = await axios.get('http://localhost:8000/logout')
            console.log(response.data);
            if(response.data === "Logout")
            Cookies.remove("jwt")
            window.location.href = "/"
          }
        } catch (error) {
          console.error(error);
        }
      }
      return(
        <>
        <div>
        {props.name === "Cerrar Sesion"? (
          <button onClick={linkButton} name={props.name} className={props.class}>
            {props.name}
          </button>
        ) : (
          <Link to={props.url} className={props.class}>
            {props.name}
          </Link>
        )}



        </div>
        </>
      )

}
export default Button