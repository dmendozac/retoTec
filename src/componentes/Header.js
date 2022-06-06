import React from 'react';

import { Encabezado, Texto, ContenedorHeader } from './../elementos/Encabezado';
import {  IconoLila }from './../elementos/ElementosGenerales';
import LogoRIMAC from './../elementos/LogoRimac';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="header">
            <Encabezado>
                <ContenedorHeader>
                    <LogoRIMAC />              
                    <Texto>¿Tienes alguna duda?</Texto>
                    <Texto><IconoLila><FontAwesomeIcon icon={faPhone} />Llámanos</IconoLila></Texto>
                </ContenedorHeader>
            </Encabezado>
        </header>
    );
}

export default Header;