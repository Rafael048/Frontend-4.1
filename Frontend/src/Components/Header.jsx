import React from 'react'
import image from '../assets/Logo.png'
import ImageBox from './ImageBox'
import Button from './Button'
import "../css/Header.css"


export default function Header({color,history_page,hitos_page,ubi_page}) {
  return (
    <div>
        <header>
      <nav>
        <div className={color ? 'logo-title-black': 'logo-title'}>
            <ImageBox 
            url = {image}
            alt = "logo"
            class = "logo"
            />
            <h1>El Médico de los Pobres</h1>
        </div>
          
        <ul>
          <li> <a href="History"className={ color ? 'link-header-black' : 'link-header'} class={history_page ? 'Page_histoy': null} >Historia</a></li>
          <li> <a href="HitosMedicina" className={ color ? 'link-header-black' : 'link-header'} class={hitos_page ? 'Pages':null}>Hitos en la Medicina</a></li>
          <li><a href="Ubicacion" className={ color ? 'link-header-black' : 'link-header'} class={ubi_page ? 'Pages' : null}>Ubicación</a></li>
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
