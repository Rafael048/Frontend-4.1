import React from "react";
import axios from "axios"
import Cookies from "js-cookie"
import {Link} from 'react-router-dom'
function Button(props){
    async function linkButton(e) {
        try {
         
          if(e.target.name === "Logout"){
            const response = await axios.get(e.target.name);
            console.log(response.data);
            if(response.data === "Logout")
            Cookies.remove("jwt")
          }
        } catch (error) {
          console.error(error);
        }
      }
      return(
        <>
        <div>
        {props.name === "Logout"? (
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