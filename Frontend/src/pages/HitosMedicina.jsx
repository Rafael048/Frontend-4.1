import React from 'react'
import Header from '../Components/Header'
import Boxtext from '../Components/BoxText'
import '../css/HitosMedicina.css'


export default function HitosMedicina() {
    const color = null
    const hitos_page = 1
  return (
    <div>
        <section className='hitos-main'>
        <Header 
            hitos_page={hitos_page}
            color={color}
        ></Header>
        <Boxtext
            title={['Padre de la Bacteriología y Medicina Experimental']}
            text={['Hernández es considerado el fundador de la bacteriología en Venezuela, área a la que dedicó especial atención durante su ejercicio profesional, debido a la realidad sanitaria del país con enfermedades como la tuberculosis y fiebre tifoidea. ']}
            class='text-hitos-main'
        >

        </Boxtext>
        </section>

    </div>
  )
}
