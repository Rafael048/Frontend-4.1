import React from 'react'
import image from '../assets/Logo.png'
import ImageBox from './ImageBox'
import Button from './Button'
import "../css/Header.css"


export default function Header({color,history_page}) {
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
          <li> <a href="History"className={ color ? 'link-header-black' : 'link-header'} class={history_page ? 'Pages': null} >Historia</a></li>
          <li> <a href="" className={ color ? 'link-header-black' : 'link-header'}>Hitos en la Medicina</a></li>
          <li><a href="" className={ color ? 'link-header-black' : 'link-header'}>Ubicación</a></li>
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
