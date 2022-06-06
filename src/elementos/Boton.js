import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

const Btn = styled.button`
    z-index: 2;
//al enlace del link queremos aplicarle estilos
    font-family: Lato;
    // si el boton tiene icono
    //width: ${(props) => props.conIcono ? '15.62rem' : 'auto'}; /* 250px */
    width: 100%;
    height: 3.75rem; /* 60px */
    text-align: center;
    font-size: 14px; /* 15px */
    font-weight: bold;
    line-height: 16px;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    border: none;
    justify-content: center;
    align-items: center;
    background: var(--rojo);
    
    border-radius: 8px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: var(--blanco);
    padding: 20px 0px;
    svg { //estilos para los iconos que iran dentro del boton
        height: ${(props) => props.iconoGrande ? '100%' : '0.75rem;'};  /* 12px */
        fill: white;
    }
    box-shadow: 0 0 100px 100px rgba(255, 255, 255, 0.3);
`;

const Boton = ({ruta = '/', texto}) => {
    const history = useNavigate();
    return (
        <Btn onClick={() => history(ruta)}>{texto}</Btn>
    );
}  

export default Boton;