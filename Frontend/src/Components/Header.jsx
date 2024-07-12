import React from 'react'
import image from '../assets/Logo.png'
import ImageBox from './ImageBox'
import Button from './Button'
import "../css/Header.css"


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
            <li> <a href="" className='link'>Historia</a></li>
            <li> <a href="" className='link'>Hitos en la Medicina</a></li>
            <li>
              <Button
              url = "/FormLogin"
              name = "Iniciar Sesion"
              class = "button-nav Comp-Link"
              />
            </li>
        </ul>
      </nav>
        </header>
    </div>
  )
}
