import Header from '../Components/Header'
import Footer from '../Components/Footer'
import image from '../assets/Historia.png'
import BoxText from '../Components/BoxText'
import imageDead from '../assets/muerte.png'
import E401 from '../Components/E401'
import '../css/History.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
export default function History() {
    const color = 1
    const history_page = 1
    const [authenticated, setAuthenticated] = useState(false)
    const [pageContent, setPageContent] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        try {
            const token = Cookies.get('jwt')
            if(token===null){
                setAuthenticated(false)
                setLoading(false)
            }else{
                axios.get(`http://localhost:8000/verify/${token}`)
                .then((result) => {
                    console.log(result)
                    setAuthenticated(true)
                     setPageContent( 
                     <div>
                    <Header class="header-history" 
                        color={color}
                        history_page={history_page}
                    ></Header>
            
                    <div className='container'>
                    <section className='History-description'>
                        <div className='container-text'>
                            <h1 className='title-history'><b>José Gregorio Hernández</b></h1>
                            <h2>Historia de Vida</h2>
                            <BoxText 
                                text = {['José Gregorio Hernández (1864-1919) fue un destacado médico venezolano, conocido por sus contribuciones a la medicina y su dedicación a ayudar a los más necesitados']}
                                class="text-history"
                            ></BoxText>
                        </div>
                        <figure>
                            <img 
                                src={image} 
                                alt="Doctor" 
                                class='image-history'/>
                        </figure>
                    </section>
            
                    <section className='inf'>
                        <BoxText
                            title= {['Infancia']}
                            text = {['José Gregorio Hernández Cisneros nació el 26 de octubre de 1864 en Isnotú, un pequeño pueblo en el estado Trujillo, Venezuela. Fue el primer hijo de Benigno María Hernández Manzaneda y Josefa Antonia Cisneros Mansilla. Su familia, de profundas convicciones religiosas, tuvo una gran influencia en su formación moral y espiritual.']}
                            class='text-his text-infancia'
                        ></BoxText>
                        <BoxText
                            title= {['Educación']}
                            text = {["Desde muy joven, José Gregorio mostró una gran inteligencia y dedicación al estudio. Realizó su educación primaria en su pueblo natal y luego se trasladó a Caracas para continuar su formación académica en el Colegio Villegas.","En 1883, ingresó a la Universidad Central de Venezuela (UCV) para estudiar medicina. Se destacó como un estudiante brillante y comprometido, graduándose en 1888 con honores.","Gracias a una beca del gobierno venezolano, viajó a París en 1889 para especializarse en microbiología, histología, patología y fisiología experimental en el Instituto Pasteur y la Universidad de La Sorbona. Sus estudios en Europa le permitieron adquirir conocimientos avanzados y técnicas modernas que luego introduciría en Venezuela."]}
                            class='text-his text-educacion'
                        ></BoxText>
                        <BoxText
                            title= {['Carrera']}
                            text = {["En 1891, José Gregorio Hernández regresó a Venezuela y se incorporó como profesor en la UCV. Fue pionero en la introducción del microscopio y técnicas de laboratorio modernas en el país.","En 1891, José Gregorio Hernández regresó a Venezuela y se incorporó como profesor en la UCV. Fue pionero en la introducción del microscopio y técnicas de laboratorio modernas en el país.","Además de su labor académica, ejerció la medicina con un profundo sentido humanitario, atendiendo a pacientes de todas las clases sociales, especialmente a los más necesitados. Su dedicación a la atención primaria y la medicina preventiva lo destacaron como un médico comprometido con la salud pública."]}
                            class='text-his text-carrera'
                        ></BoxText>
                    </section>
            
                    <section className='religion-legacy-recognitions'>
                        <article className='religion-legacy'>
                            <BoxText
                                title={["Vocación Religiosa"]}
                                text={["Profundamente religioso, José Gregorio Hernández sintió en varias ocasiones el llamado a la vida religiosa. En 1908, viajó a Italia con la intención de unirse a la Orden de los Cartujos. Sin embargo, debido a problemas de salud, tuvo que regresar a Venezuela.","A pesar de no poder concretar su vocación religiosa, vivió una vida de profunda espiritualidad y devoción. Fue miembro de la Tercera Orden de San Francisco y dedicó gran parte de su tiempo a obras de caridad y servicio a los pobres"]}
                                class="text-religion"
                                ></BoxText>
            
                            <BoxText 
                                title={["Muerte y Legado"]}
                                text={["El 29 de junio de 1919, mientras se dirigía a comprar medicamentos para un paciente, fue atropellado por un automóvil en Caracas, falleciendo poco después a los 54 años.","El 19 de junio de 2020, el Papa Francisco aprobó su beatificación, reconociendo un milagro atribuido a su intercesión. La ceremonia de beatificación se llevó a cabo el 30 de abril de 2021"]}
                                class="text-legacy"
                                ></BoxText>
                           
                        </article>
            
                        <article className='recognitions'>
                            <figure className='image-recognitions'>
                                <img 
                                    src={imageDead} 
                                    alt="reliquia"
                                    width={'100%'}
                                    />
                            </figure>
            
                            <BoxText
                                title={["Reconocimientos"]}
                                text={["José Gregorio Hernández es considerado un santo popular en Venezuela y otros países de América Latina. Su figura es objeto de devoción tanto por creyentes católicos como por personas de otras confesiones y espiritualidades. José dejó un legado perdurable en el campo de la medicina y en la conciencia colectiva de Venezuela, simbolizando el ideal del médico dedicado a la ciencia y al servicio humanitario."]}
                                class="text-recognitions"
                                ></BoxText>
                        </article>
                    </section>
            
                    </div>
            
                    <Footer></Footer>
                  
                </div>)
                setLoading(false)
                }).catch((err) => {
                    console.log(err.response.data)
                     setPageContent(<E401/>) 
                     setLoading(false)
                });
            }
            
        } catch (error) {
            console.error(error)
            setPageContent(<E401/>) 
        }
     
    },[])
  return (
    <div>
    {loading ? (
      <div>Cargando...</div>
    ) : authenticated ? (
      pageContent
    ) : (
      <E401 />
    )}
  </div>
  )
}
