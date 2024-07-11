import React from 'react'
import image from '../assets/Logo.png'
import "../css/Header.css"
import ('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap')


export default function Header() {
  return (
    <div>
        <header>
      <nav>
        <div className='logo-title'>
            <figure className='logo'>
                <img src={image} alt="Logo" width={"100%"}/>  
            </figure>
            <h1>El Médico de los Pobres</h1>
        </div>
        <ul>
            <li>Historia</li>
            <li>Hitos en la Medicina</li>
            <li><button className='button-nav'>Iniciar Sesion</button></li>
        </ul>
      </nav>
        </header>
    </div>
  )
}
