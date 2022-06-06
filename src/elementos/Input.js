import React from 'react';
import { ContenedorFiltros, Input, FlexRow, Placeholder, Links,  ContenedorCheckbox , ContenedorBoton, Checkbox, CheckboxCuadro, Cuadro  } from './ElementosFormularioW1';
import { GrupoInput, Cabecera, Titulo, TextoGrande, TextoNormal, TextoPequeño, TextoFormulario }from './../elementos/ElementosGenerales';

const ComponenteInput = ({ estado, cambiarEstado, estilo, tipo, label, placeholder, name, leyendaError, value, expresionRegular }) => {
    const onChange = (e) => {
        cambiarEstado({...estado, campo: e.target.value});
    }

    const validacion = () => {
        console.log('aquiiiii')
        if (expresionRegular) {
          if (expresionRegular.test(estado.campo)){
            console.log('Input correcto')
          } else {
            console.log('Input incorrecto')
          }
        }
    }
    
    return (
        <GrupoInput>
            <Input
                className = {estilo}
                type={tipo}
                placeholder={placeholder}
                id={name}
                value = {estado.campo}/*value*/
                readOnly = {(estilo=="blocked")}
                onChange = {(e)=>onChange(e)}
                onKeyUp = {validacion}
                onBlur = {validacion}
            />
        </GrupoInput>
    ); 
}

export default ComponenteInput;