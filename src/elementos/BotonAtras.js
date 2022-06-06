import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {useNavigate} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';

const Buton = styled(Link)`
    width: 3.12rem; /* 50px */
    height: 3.12rem; /* 50px */
    line-height: 3.12rem; /* 50px */
    border: none;
    color: var(--rojo);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
 
    @media(max-width: 60rem){ /* 950px */
        width: 2.5rem; /* 40px */
        height: 2.5rem; /* 40px */
        line-height: 2.5rem; /* 40px */
    }
`;

//BotonRuta indicará la ruta a la que se quiere ir, sino será a la carpeta razín '/'
const BotonAtras = ({ruta = '/'}) => {
    const history = useNavigate();
    return (
        <div>
        
        <FontAwesomeIcon icon={faCircleLeft} />
        <span>Volver</span>
        </div>
        
        /* <Buton onClick={() => history(ruta)}><FontAwesomeIcon icon={faArrowAltCircleLeft}/></Buton> */
    );
}
 
export default BotonAtras;