import React from "react";
import axios from "axios";
import Cookies from "js-cookie"

function FormLogin(){

    async function handleSubmit(e){
        e.preventDefault();
        const data = {
            user: e.target.user.value,
            password: e.target.password.value
        }
        console.log(data)
        await axios.post('http://localhost:8000/login',data)
       .then((result) => {
        console.log(result)
        const token = result.data
        Cookies.set('jwt', token, { expires: 1 })
       })
       .catch((err) => {
        if(err.response){
            console.log(err.response.data)
        }
    })
    }

    return(
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type="input" placeholder="Usuario" name="user" required></input>
            <input type="password" placeholder="Contraseña" name="password" required></input>
            <button type="submit">Enviar</button>
        </form>
    )
}
export default FormLogin