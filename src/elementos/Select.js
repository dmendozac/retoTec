import React, {useState} from 'react';
import styled from 'styled-components';

import { ContenedorFiltros, Input, FlexRow, Placeholder, Links,  ContenedorCheckbox , ContenedorBoton, Checkbox, CheckboxCuadro, Cuadro  } from './ElementosFormularioW1';
import { Cabecera, Titulo, TextoGrande, TextoNormal, TextoPequeño, TextoFormulario, FlechaAbajo }from './../elementos/ElementosGenerales';

const ContenedorSelect = styled.div`
  //height: 32px;
  //width: 100%;
    font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
    text-align: center;
    display: flex;
    align-items: center;
    transition: .5s ease all;
    cursor: pointer;
    position: relative;
    border-radius: 4px;
    border: solid 1px var(--grisClaro2);
    background-color: var(--blanco);
    &:hover{
        background: var(--grisClaro);
    }
`;
const OpcionSeleccionada = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem;
    svg{
        width: 1.25rem;
        height: auto;
        margin-left: 1.25rem;
    }
`;
const Opciones = styled.div`
    position: absolute;
    width: 30%;
    top: 4rem;
    background-color: white;
    z-index: 100;
`;
const Opcion = styled.div`
    background-color: white;
    padding: 1.25rem;
    display: flex;
    img {
        width: 28px;
        height: auto;
        margin-right:1.25rem;
    }
    &:hover{
        background-color: red;
    }
`;

const ComponenteSelect = ({estilo, label, placeholder, name, seleccion, tipo, leyendaError, value, expresionRegular, onChange}) => {
    const [mostrarSelect, cambiarMostrarSelect] = useState(false);
   return (
        <div>
        <ContenedorFiltros></ContenedorFiltros>
            <ContenedorSelect onClick={()=>cambiarMostrarSelect(!mostrarSelect)}>
                <OpcionSeleccionada><TextoFormulario>DNI</TextoFormulario>
                    <FlechaAbajo
                    src={"https://file.rendit.io/n/EW0ihWwdmaOByVaXgHde.svg"}
                />
                </OpcionSeleccionada>
                {mostrarSelect &&
                    <Opciones>
                        <Opcion>DNI</Opcion>
                        <Opcion>CE</Opcion>
                        <Opcion>Pasaporte</Opcion>
                    </Opciones>
                }
                <Input
                    className = {estilo}
                    type={tipo}
                    placeholder={placeholder}
                    id={name}
                    value = {value}
                   /* pattern = {expresionRegular}*/
                    readOnly = {(estilo=="blocked")}
                    onChange = {(e)=>onChange(e)}
                />
            </ContenedorSelect>
        </div>
   ); 
}

export default ComponenteSelect;