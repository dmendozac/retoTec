import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Logo} from './../images/LogoRIMAC.svg';
import {useNavigate} from 'react-router-dom';

const Btn = styled.button`
    display: flex;
    cursor: pointer;
    border: none;
    background-color: rgba(0,0,0,0);
`;
 
const Icono = styled(Logo)`
    width: 15rem;
`;
//LogoRIMAC va a la ruta raíz '/'
const LogoRIMAC = () => {
    const history = useNavigate();
    return (
        <Btn onClick={() => history('/')}><Icono /></Btn>
    );
}  
 
export default LogoRIMAC;