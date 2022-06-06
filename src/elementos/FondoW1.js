import React from 'react';
import styled from 'styled-components';
import { Cabecera, Titulo, TextoGrande, TextoNormal, TextoPequeño, TextoMini }from './../elementos/ElementosGenerales';
import { ReactComponent as FondoIlustDesktopW1 } from './../images/W1-Illustracion-desktop.svg';
import { ReactComponent as FondoIlustMobileW1 } from './../images/W1-Illustracion-mobile.svg';
import FondoBgW1 from './../images/W1-Bg.svg';

const Img = styled.div`
    background: url(${FondoBgW1});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    //position: absolute;
    z-index: 0;
    opacity: 100%;
    background-color: var(--grisBg);
    
	/* PANTALLA TABLET */
	@media (max-width: 768px) {
        opacity: 0%;
        //position: absolute;
        //height: 50px;
    }
`;
const TextoBg = styled.div`
    height: 50%;
    //position: absolute;
    z-index: 2;
    margin-top: 26rem;
    left: 5rem;
	/* PANTALLA TABLET */
	@media (max-width: 768px) {
        //position: absolute;
        //height: 100vh;
    }
`;

const IlusDesk = styled(FondoIlustDesktopW1)`
    opacity: 100%;
    z-index: 1;
    position: absolute;
    display: flex;
    height: 70%;
    left: 20%;
	/* PANTALLA TABLET */
	@media (max-width: 768px) {
        opacity: 0%;

    }
`;

const IlusMob = styled(FondoIlustMobileW1)`
    opacity: 0%;
    z-index: 1;
    position: absolute;
    height: 70%;
    right: 0rem;
    	/* PANTALLA TABLET */
	@media (max-width: 768px) {
        opacity: 100%;
        //height: 50vh;
        //top: 98px;
    }
`;

const FondoW1 = () => {
    return (
        <>
            <IlusDesk /><Img />
            <IlusMob />
            <TextoBg>
                <TextoMini>¡NUEVO!</TextoMini>
                <Titulo negro>Seguro </Titulo>
                <Titulo rojo>Vehicular Tracking</Titulo>
                <TextoNormal>Cuentanos donde le haras seguimiento a tu seguro</TextoNormal>
            </TextoBg>
        </>       
    );
}

export default FondoW1;