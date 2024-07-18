import React from 'react'
import Header from '../Components/Header'
import BoxText from '../Components/BoxText'
import MapView from '../Components/Mapview'
import Footer from '../Components/Footer'
import Comments from './Comments'

function UbicacionContent(){
    const color = 1
    const ubi_page = 1
    return(
        <div className='main'>
        <Header
            color={color}
            ubi_page={ubi_page}
        ></Header>
        <div className='main-ubi'>
          <article className='map-text'>
            <BoxText
              title={['Santuario de José Gregorio Hernández']}
              text={['En su natal Isnotú su santuario oficializado desde 2021 es el Santuario del Niño Jesús, donde además reposan sus restos.']}
              class='text-ubi'
            ></BoxText>
            <div className='map'>
            <MapView></MapView>
            </div>
          </article>
        </div>
        <Comments
            location = "Map"
        />
        <Footer></Footer>
    </div>
    )
}
export default UbicacionContent