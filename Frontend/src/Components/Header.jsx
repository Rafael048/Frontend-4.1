import React from 'react'
import image from '../assets/Logo.png'
import ImageBox from './ImageBox'
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
            <li> <a href="" className='links'>Historia</a></li>
            <li> <a href="" className='link'>Hitos en la Medicina</a></li>
            <li><button className='button-nav'>Iniciar Sesion</button></li>
        </ul>
      </nav>
        </header>
    </div>
  )
}
