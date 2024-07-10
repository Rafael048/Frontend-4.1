import React from "react";
import axios from "axios";

function FormRegister(){

    async function handleSubmit(e){
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            user: e.target.user.value,
            password: e.target.password.value
        }
        console.log(data)
        await axios.post('http://localhost:8000/register',data)
       .then((result) => {
        console.log(result)
       })
       .catch((err) => {
            console.log(err)
       })
    }

    return(
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type="input" placeholder="Nombre" name="name" required></input>
            <input type="input" placeholder="Usuario" name="user" required></input>
            <input type="password" placeholder="Contraseña" name="password" required></input>
            <button type="submit">Enviar</button>
        </form>
    )
}
export default FormRegister