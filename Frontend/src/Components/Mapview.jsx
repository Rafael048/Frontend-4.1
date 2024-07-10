import React from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

  function Mapview(){
    return(
        <MapContainer center={[9.3654, -70.70262]} zoom={16}>
            <TileLayer attribution= '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' />
        </MapContainer>
    )
}
export default Mapview