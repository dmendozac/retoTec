import React from 'react';
import styled from 'styled-components';
import { ReactComponent as FondoIlustW2 } from './../images/W2-Illustracion.svg';

const Ilus = styled(FondoIlustW2)`
    opacity: 100%;
    z-index: 99;
    display: flex;
    height: 20vh;
    margin-right: 0;
    position: absolute;
    left: 18rem;
    bottom: 4rem;
`;

const FondoW2 = () => {
    return (
            <Ilus />
    );
}

export default FondoW2;