import React from 'react'
import Header from '../Components/Header'
import Boxtext from '../Components/BoxText'
import ImageBox from '../Components/ImageBox'
import pecho from   '../assets/pecho.png'
import jose_logo from '../assets/jose-logo.png'
import bacteria from '../assets/bacteria.png'
import mosquito from '../assets/mosquito.png'
import pulmon from '../assets/pulmon.png'
import medicine from '../assets/medicina.png'
import Footer from '../Components/Footer'

import '../css/HitosMedicina.css'


export default function HitosMedicina() {
    const color = null
    const hitos_page = 1
  return (
    <div>
            <div className='hitos-container-main'>
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

        <section className='hitos-description'>
            <Boxtext
                text={['Recién graduado de médico, en el año 1888, en la Universidad Central de Venezuela (UCV), presentó dos temas relacionados con esta área: 1) la doctrina de Laennec, que asienta la unidad del tubérculo, frente a la escuela de Virchow, que sostiene la dualidad; y 2) la fiebre tifoidea típica de presentarse en Caracas.','El Dr. José Gregorio Hernández estudió en Francia teoría y práctica en las especialidades de microscopia, histología normal y patológica, bacteriología y fisiología experimental. En Berlín profundizó sus estudios en histología y anatomía patológica y realizó un curso de bacteriología. En Estados Unidos realizó también estudios para aprender nuevas técnicas de bacteriología.','Gracias a este médico trujillano, nacido en Isnotú el 26 de octubre de 1864, comenzó en Venezuela la verdadera docencia científica y pedagógica, a base de lecciones explicativas, con observación de los fenómenos vitales, la experimentación sistematizada, prácticas de vivisección, pruebas de laboratorio y cultivo de microbios.']}
                class='text-hitos-description'
            ></Boxtext>
            <div className='contain-text-hitos'>
                <div className='description-hitos'>
                <Boxtext
                    title={['Estudios sobre Angina de Pecho']}
                    text={['Junto a Nicanor Guardia, el Dr. José Gregorio Hernández escribió para un estudio dedicado a la Facultad de Medicina de Madrid sobre la angina de pecho de naturaleza paludosa. En este trabajo científico, publicado en la Gaceta Médica de Caracas de 1894, destacó la observación de tres casos, que le sirvieron de base para estudiar con más detalle esta enfermedad poco conocida y mal estudiada para ese momento.']}
                    class='text-hitos-description'
                ></Boxtext>

                <Boxtext
                    title={['Libro de Bacteriología']}
                    text={['En 1906, el médico de los pobres publicó una de sus obras más importantes: Elementos de Bacteriología, primer texto de esa especialidad editado en el país y en el que a lo largo de sus 194 páginas presentó las definiciones de bacteriología, los microbios, microbios vegetales, animales, sus formas, coccus, bacilos, spirilos, clasificación de Pasteur, entre otros. Este libro fue referencia durante muchos años en la cátedra de Bacteriología de la UCV.']}
                    class='text-hitos-description'
                ></Boxtext>
                </div>
                <div className='images-hito'>
                    <ImageBox
                        url={pecho}
                        alt='pecho jose'
                        class='image-hito'
                    ></ImageBox>
                    <ImageBox
                        url={jose_logo}
                        alt='Jose'
                        class='image-hito'
                    ></ImageBox>
                    <ImageBox
                        url={bacteria}
                        alt='Bacteria'
                        class='image-hito'
                    ></ImageBox>

                </div>
            </div>
        </section>

        <section className='studies'>
            <article className='mosquito'>
                <h1 className='title-studies'>Estudios sobre Fiebre Amarilla, Tuberculosis y Bilharziasis</h1>
                <ImageBox
                    url={mosquito}
                    alt="moquito"
                    class="studies-image"
                ></ImageBox>
                <Boxtext
                    text={['Entre otras de sus publicaciones, se encuentra De la nefritis en la fiebre amarilla, en colaboración con el doctor Felipe Guevara Rojas, en el año 1910, en la que explicó que las lesiones encontradas eran: “aumento de volumen y congestionamiento, manchas equiomáticas y sangre en la orina, lesiones en los glomérulos de Malpigio... Apartando los casos fulminantes que destrozan el hígado por esteatosis sobreaguda, podemos establecer para los demás la siguiente ley: en el tratamiento de la fiebre amarilla lo primero es defender el riñón”.']}
                    class="text-studies"
                ></Boxtext>
            </article>
            <article className='pulmon'>
                <h1 className='title-studies'>Estudios de Pulmonía</h1>
                <ImageBox
                    url={pulmon}
                    alt="pulmon"
                    class="img-pulmon"
                ></ImageBox>
                <Boxtext
                    text={['Hernández realizó estudios de las denominadas lesiones anatomopatológicas de la pulmonía simple o crupal, publicado en la Gaceta Médica de Caracas de 1910, con los que demostró que dicha enfermedad era bastante común en Caracas, muy al contrario de lo que se creía en la época, considerada una afección rara o excepcional.','En su trabajo sobre pulmonía, el Dr. Hernández concluyó: “La muerte puede sobrevenir en cualquiera de los períodos de la pulmonía. La causa de muerte es por agotamiento del corazón por excesivo funcionamiento (…) De estas consideraciones podemos deducir la regla de conducta que debemos observar en presencia de un caso de pulmonía, fácil de sintetizar: en el tratamiento de la pulmonía lo primero es defender el corazón”.']}
                    class="text-studies"
                ></Boxtext>
            </article>
        </section>
        
        <section className='more-studies'>
            <article className='more'>
                <Boxtext
                    title={['Medicina Psicosomática']}
                    text={['Hernández sabía de medicina psicosomática, mucho antes de que se hablara de ella. Aunque no era psicólogo, conocía la importancia de la psique en el desarrollo de muchas enfermedades. Sobre neuropatología escribe en relación a Santa Teresa de Jesús, rechazando el diagnóstico de histerismo dado a la santa:',' “La neuropatología nos enseña a conocer perfectamente el histerismo, de tal suerte que apenas hay enfermedad de más fácil diagnóstico. Es una enfermedad del sistema nervioso que carece de localización anatomopatológica y que presenta distintos grados de desarrollo, pero en todos los enfermos se observan ciertos rasgos morales peculiares que se descubren prontamente…”.']}
                    class='text-more-studies'
                ></Boxtext>
                <Boxtext
                    title={['Estudio sobre los Glóbulos Rojos']}
                    text={['Hernández comprobó los hechos relacionados a la numeración globular roja y las presentó al I Congreso Médico Panamericano de Washington en 1892. ']}
                    class='text-more-studies'
                ></Boxtext>
            </article>
            <ImageBox 
                url={medicine}
                alt='medicina'
                class="image-medicine"
            ></ImageBox>
        </section>
    </div>

        <Footer></Footer>
    </div>
  )
}
