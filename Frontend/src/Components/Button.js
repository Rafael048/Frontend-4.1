import React from "react";
import axios from "axios"
import Cookies from "js-cookie"
function Prueba(props){
    async function getUser(e) {
        try {
          const response = await axios.get(e.target.name);
          console.log(response.data);
          if(response.data === "Logout"){
            Cookies.remove("jwt")
          }
        } catch (error) {
          console.error(error);
        }
      }
      return(
        <>
        <div>
            <button onClick={(e)=>getUser(e)} name= {props.url}> {props.name} </button>
        </div>
        </>
      )

}
export default Prueba