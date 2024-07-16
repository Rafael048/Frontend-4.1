import React from "react";
import axios from "axios";
import Cookies from "js-cookie"
import '../css/FormLogin.css'

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
        const token = result.data
        Cookies.set('jwt', token, { expires: 1 })
        window.location.href = '/'
       })
       .catch((err) => {
        if(err.response){
            console.log(err.response.data)
        }
    })
    }

    return(
        <div className="form">
        <div className="header">
            <h1>Bienvendos</h1>
            <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
            </svg></a>
        </div>
        <div className="data">
            <form onSubmit={(e)=>handleSubmit(e)} className="form-login">
                <input type="input" placeholder="Usuario" name="user" required className="input-data"></input>
                <input type="password" placeholder="Contraseña" name="password" required className="input-data"></input>
                <button type="submit" className="bt-login">Iniciar Sesión</button>
            </form>
                <div className="link-register">
                    <p>¿No estás registrado? <b><a href="/FormRegister" className="link-register">Registrarse</a></b></p>
                </div>
        </div>
        <div className="title-sub">
        <h1 className="title-form">El Médico de los Pobres</h1>
        </div>
        </div>
    )
}
export default FormLogin