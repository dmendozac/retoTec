import React from 'react';
import FondoW1 from '../elementos/FondoW1';
import FondoW2 from '../elementos/FondoW2';
import FondoW3 from '../elementos/FondoW3';
import BotonAtras from './../elementos/BotonAtras';
import Contador from './../elementos/Contador';

import { ContenedorBg1 } from '../elementos/ElementosFormularioW1';
import { ContenedorBg2, FormularioEstilo__W2, ContenedorDatos, ContenedorBoton,
    ContenedorValores,
    ContenedorCoberturas, SeccionCoberturas, OpcionesCoberturas, ImagenCoberturas, DetalleCoberturas, TituloCoberturas, TextoCoberturas, GrupoInput } from '../elementos/ElementosFormularioW2';
import { ContenedorBg3 } from '../elementos/ElementosFormularioW3';
import { Contenedor, Cabecera, Titulo, TextoGrande, TextoNormal, TextoPequeño, FlechaAbajo, IconoRojo, IconoLila, IconoVerde }from './../elementos/ElementosGenerales';

import configData from "../config.json";


const Imagen = ({ventana, nombre, placa }) => {
    switch(ventana){
        case 'imagen__uno':
            return (
                <imagen className="imagen">
                    <ContenedorBg1>
                        <FondoW1 />
                    </ContenedorBg1>
                </imagen>
            );
        case 'imagen__dos':
            return(
                <imagen className="imagen">
                    <Contenedor>
                        <BotonAtras />
                        <div className="titulo">¡Hola, <Titulo rojo>{nombre}!</Titulo></div>
                        <div className="textoPequeño">Conoce las coberturas para tu plan</div>
                        <ContenedorDatos>
                            <div>
                                <span className="textoMini">Placa: <span className="textoMini">{placa}</span></span>
                                <div className= "textoMediano">{configData.MARCA} {configData.AÑO}<br></br>
                                {configData.MODELO}</div>
                            </div>
                        </ContenedorDatos>
                        <ContenedorBg2>
                            <FondoW2 />
                        </ContenedorBg2>
                        <ContenedorValores>
                            <div className='textoMediano'>Indica la suma asegurada
                                <div>
                                    <span className='textoMini'>Min ${configData.MINIMO}</span>
                                    <span className='textoMini'>Max ${configData.MAXIMO}</span>
                                </div>
                            </div>
                            <Contador />
                        </ContenedorValores> 
                    </Contenedor>
                </imagen>
            );
        case 'imagen__tres':
            return (
                <imagen className="imagen">
                    <ContenedorBg3>
                        <FondoW3 />
                    </ContenedorBg3>                
                </imagen>
            );
        default:
            return(
                <imagen></imagen>
            );
    }

}

export default Imagen;