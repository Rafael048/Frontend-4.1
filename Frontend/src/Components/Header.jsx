import React from 'react'
import image from '../assets/Logo.png'
import ImageBox from './ImageBox'
import Button from './Button'
import "../css/Header.css"
import ('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap')


export default function Header() {
  return (
    <div>
        <header>
      <nav>
        <div className='logo-title'>
            <ImageBox 
            url = {image}
            alt = "logo"
            class = "logo"
            />
            <h1>El Médico de los Pobres</h1>
        </div>
        <ul>
            <li>Historia</li>
            <li>Hitos en la Medicina</li>
            <li>
              
              <Button
                name = "Iniciar Sesion"
                class = "button-nav"
                url = "/Formlogin"
              />
            </li>
        </ul>
      </nav>
        </header>
    </div>
  )
}
