import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Boton from './../elementos/Boton';
import BotonAtras from './../elementos/BotonAtras';
import { ContenedorBg2, FormularioEstilo__W2, ContenedorDatos, ContenedorBoton,
  ContenedorValores,
  ContenedorCoberturas, SeccionCoberturas, OpcionesCoberturas, ImagenCoberturas, DetalleCoberturas, TituloCoberturas, TextoCoberturas } from '../elementos/ElementosFormularioW2';
import { Contenedor, Cabecera, Titulo, TextoGrande, TextoNormal, TextoPequeño, FlechaAbajo, IconoRojo, IconoLila, IconoVerde }from './../elementos/ElementosGenerales';
import FondoW2 from './../elementos/FondoW2';

import Header from './Header';
import Imagen from './Imagen';
import Gracias from './Gracias';

import {ReactComponent as W2Llanta}  from './../images/W2Llanta.svg';
import {ReactComponent as W2Choque}  from './../images/W2Choque.svg';
import {ReactComponent as W2Atropello}  from './../images/W2Atropello.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa2, faCheck, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus, faSquareMinus } from '@fortawesome/free-regular-svg-icons';

import configData from "../config.json";

const ArmaTuPlan = ({ usuario, nombre , celular, placa, email, objeto }) => {
  const [success, setSuccess] = useState(false);
  const [cobertura, setCobertura] = useState(20);
  const handleSubmit = async (e) => {
      setSuccess(true);        
  }
  const handleBoton1 = (e) => {
    e.preventDefault();
      setCobertura(cobertura + 15)
  }
  
  const handleBoton2 = (e) => {
    e.preventDefault();
      setCobertura(cobertura + 20)
  }
    
  const handleBoton3 = (e) => {
    e.preventDefault();
      setCobertura(cobertura + 50)
  } 
    return (
      <>
        {success ? (
          <section>
          {console.log(email, 'arma tu plan')}
            <Gracias
              email = {email}
              placa = {placa}
            />
          </section>
        ):(
        <>
          <div className="container__grid maqueta__secundaria">
            <Helmet>
              <title>Arma tu plan</title>
            </Helmet>
            <Header />
            <barra className="barra">
              <Contenedor>
                <TextoNormal><IconoLila><FontAwesomeIcon icon={fa1} /></IconoLila><span>Datos</span></TextoNormal>
                <TextoNormal><IconoLila><FontAwesomeIcon icon={fa2} /></IconoLila><span>Arma Tu plan</span></TextoNormal>
              </Contenedor>
            </barra>
            <Imagen
              ventana="imagen__dos"
              nombre = {nombre}
              placa = {placa}
            />
            
            <formulario className = "formulario"> {/*GRID*/}
              <Contenedor>
                <FormularioEstilo__W2>

                  
                  <div className='textoMediano'>Agrega o quita coberturas</div>
                  <ContenedorCoberturas>
                      <SeccionCoberturas className = 'textoMini'>Protege a tu auto</SeccionCoberturas>
                      <SeccionCoberturas className = 'textoMini'>Protege a los que te rodean</SeccionCoberturas>
                      <SeccionCoberturas className = 'textoMini'>Mejora tu plan</SeccionCoberturas>
                  </ContenedorCoberturas>
                  <OpcionesCoberturas>
                    <ImagenCoberturas><W2Llanta /></ImagenCoberturas>
                    <DetalleCoberturas>
                      <TituloCoberturas className='textoNormal'>Llanta robada
                        <FlechaAbajo src={"https://file.rendit.io/n/EW0ihWwdmaOByVaXgHde.svg"} />
                      </TituloCoberturas>
                      <TextoCoberturas>  
                        <IconoLila as = "button" onClick={handleBoton1}><FontAwesomeIcon icon={faSquarePlus} /><span>Quitar</span></IconoLila> 
                        <div className='textoPequeño'>He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más</div>
                      </TextoCoberturas>
                    </DetalleCoberturas>
                  </OpcionesCoberturas>
                  <OpcionesCoberturas>
                    <ImagenCoberturas><W2Choque /></ImagenCoberturas>
                    <DetalleCoberturas>
                      <TituloCoberturas className='textoNormal'>Choque y/o pasarte la luz roja
                        <FlechaAbajo src={"https://file.rendit.io/n/EW0ihWwdmaOByVaXgHde.svg"} />
                      </TituloCoberturas>
                      <TextoCoberturas>
                        <IconoLila as = "button" onClick={handleBoton2}><FontAwesomeIcon icon={faSquareMinus} /><span>Agregar</span></IconoLila> 
                        <div className='textoPequeño'></div>
                      </TextoCoberturas>
                    </DetalleCoberturas>
                  </OpcionesCoberturas>
                  <OpcionesCoberturas>
                    <ImagenCoberturas><W2Atropello /></ImagenCoberturas>
                    <DetalleCoberturas>
                      <TituloCoberturas className='textoNormal'>Protege a los que te rodean
                        <FlechaAbajo src={"https://file.rendit.io/n/EW0ihWwdmaOByVaXgHde.svg"} />
                      </TituloCoberturas>
                      <TextoCoberturas>
                        <IconoLila as = "button" onClick={handleBoton3}><FontAwesomeIcon icon={faSquareMinus} /><span>Agregar</span></IconoLila> 
                        <div className='textoPequeño'></div>
                      </TextoCoberturas>
                    </DetalleCoberturas>
                  </OpcionesCoberturas>



                </FormularioEstilo__W2>
              </Contenedor>

            </formulario>
            <resumen className="resumen">
            <form onSubmit={handleSubmit}>
                  <Contenedor>
                    <TextoNormal>Monto</TextoNormal>
                    <TextoGrande>$ {cobertura}</TextoGrande>
                    <TextoPequeño>mensuales</TextoPequeño>
                    <TextoNormal>El precio incluye:</TextoNormal>
                    <TextoNormal><IconoVerde><FontAwesomeIcon icon={faCheck} /></IconoVerde><span>Llanta de repuesto</span></TextoNormal>
                    <TextoNormal><IconoVerde><FontAwesomeIcon icon={faCheck} /></IconoVerde><span>Analisis de motor</span></TextoNormal>
                    <TextoNormal><IconoVerde><FontAwesomeIcon icon={faCheck} /></IconoVerde><span>Aros gratis</span></TextoNormal>
                    <Boton as = "button" type="submit" texto='lo quiero'/>
                  </Contenedor></form>
            </resumen>
          </div>      
        </>
        )}
      </>
    );
}

export default ArmaTuPlan;