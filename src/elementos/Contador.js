import React, {useState} from 'react';

import { Contenedor, GrupoInput , Cabecera, Titulo, TextoGrande, TextoNormal, TextoPequeño, FlechaAbajo, IconoRojo, IconoLila, IconoVerde }from './../elementos/ElementosGenerales';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import configData from "../config.json";

const Contador = ({tipo, mensaje, estadoAlerta, cambiarEstadoAlerta}) => {
  const [counter, setCounter] = useState(12500)
  
  const handlePlus = (e) => {
    e.preventDefault();
    if(counter != 16500)
        setCounter(counter + 100)
  }
  
  const handleMinus = (e) => {
    e.preventDefault();
    if(counter != 12500)
        setCounter(counter - 100)
  }    
    return (
        <GrupoInput className='textoMini'>
            <IconoLila as = "button" onClick={handleMinus}><FontAwesomeIcon icon={faMinus} /></IconoLila>
            $ {counter}
            <IconoLila as = "button" onClick={handlePlus}><FontAwesomeIcon icon={faPlus} /></IconoLila>
        </GrupoInput>
    );
}
export default Contador;