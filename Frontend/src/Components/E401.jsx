import React from "react";
import { useEffect } from "react";
import "../css/E401.css"
function E401(){
    useEffect(()=>{
         setTimeout(() => {
            window.location.href = "/FormLogin";
        }, 3000);
    },[])
    return(
                <section className="center">
                    <p>
                        <b>Error 401</b>:No estas autorizado para ingresar a esta seccion, por favor inicia sesion para continuar.
                    </p>
                    <p>
                        Reedirigiendo al inicio de sesion...
                    </p>
                </section>
        
    )
}
export default E401