import React from 'react';
import styled from 'styled-components';
import FondoBgDesktopW3 from './../images/W3-Illustracion-desktop.png';
import { ReactComponent as FondoBgMobileW3} from './../images/W3-Illustracion-mobile.svg';

const ImgDesk = styled.div`
    background: url(${FondoBgDesktopW3});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    right: 0px;
    position: absolute;
    z-index: 0;
    opacity: 100%;

    /* PANTALLA TABLET */
	@media (max-width: 768px) {
        opacity: 0%;
        //position: absolute;
        //height: 100vh;
    }
`;
const ImgMob = styled(FondoBgMobileW3)`
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    top: 0px;
    //position: absolute;
    z-index: 0;
    opacity: 0%;
    
    /* PANTALLA TABLET */
	@media (max-width: 768px) {
        opacity: 100%;
        //position: absolute;
        //height: 100vh;
    }
`;

const FondoW3 = () => {
    return (
        <>
            <ImgDesk />
            <ImgMob />
            
            
        </>
    );
}

export default FondoW3;