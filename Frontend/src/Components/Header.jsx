import React, { useState, useEffect } from 'react'
import image from '../assets/Logo.png'
import ImageBox from './ImageBox'
import Button from './Button'
import "../css/Header.css"
import Cookies from 'js-cookie'


export default function Header({color,history_page,hitos_page,ubi_page}) {
  const [open, setOpen] = useState(false)
  const [buttonOpen, setButtonOpen] = useState(true)
  const [buttonUser, setButtonUser] = useState(false)
  useEffect(()=>{
    const token = Cookies.get('jwt')
    if(token){
      setButtonUser(
        <Button
        name = "Cerrar Sesion"
        class = "button-nav Comp-Link"
        />
      )
    }else{
      setButtonUser(
        <Button
              url = "/FormLogin"
              name = "Iniciar Sesion"
              class = "button-nav Comp-Link"
              />
      )
    }
  },[])
  function bt_open() {
    setOpen(true)
    setButtonOpen(false)
  }

  function bt_close() {
    setOpen(false)
    setButtonOpen(true)
  }

  return (
    <div>
        <header>
      <nav>
        <div className='title-logo'>
            <ImageBox 
            url = {image}
            alt = "logo"
            class = "logo"
            />
            <h1 className='title-header'><a href="/" className={color ? 'logo-title-black': 'logo-title'}>El Médico de los Pobres</a></h1>
        </div>
        <button className={`${buttonOpen ? 'open-menu' : 'bt-desactive'}`} onClick={bt_open}>
        <svg xmlns="http://www.w3.org/2000/svg" width="6vw" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>          
        </button>  
        <ul className={`menu-links ${open ? 'active' : 'desactive'}`}>
          <button className='close-menu' onClick={bt_close}><svg xmlns="http://www.w3.org/2000/svg" width="6vw"  fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg></button>
          <li> <a href="History"className={ color ? 'link-header-black' : 'link-header'} class={history_page ? 'Page_histoy': null} >Historia</a></li>
          <li> <a href="HitosMedicina" className={ color ? 'link-header-black' : 'link-header'} class={hitos_page ? 'Pages':null}>Hitos en la Medicina</a></li>
          <li><a href="Ubicacion" className={ color ? 'link-header-black' : 'link-header'} class={ubi_page ? 'Pages' : null}>Ubicación</a></li>
          <li>
              {buttonUser}
          </li>
      </ul>

        
      </nav>
        </header>
    </div>
  )
}
