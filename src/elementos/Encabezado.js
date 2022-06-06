import styled from 'styled-components';

const Encabezado = styled.div`
    width: 100%;
    padding: 1.5rem;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    justify-content: space-between;
    //position: fixed;
    top: 0;
    border-bottom: 1px solid var(--grisClaro);
    z-index: 100;
    display:flex;
    flex-direction:row;
    font-size: 12px;
    /*
        display: flex;
    justify-content: center;
    align-items: center;
     */
	/* PANTALLA TABLET */
	@media (max-width: 768px) {
        justify-content: start;
        max-height: none;
    }
`;

const Texto = styled.label`
    text-align: right;
    color: var(--grisClaro3);
    opacity: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:row;

    	/* PANTALLA TABLET */
	@media (max-width: 768px) {
        opacity: 0%;
    }
`;

//la diferencia entre header y el contenedor header es que el conenedor posee la parte responsive
const ContenedorHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    	/* PANTALLA TABLET */
	@media (max-width: 768px) {
        display: flex;
        //flex-direction: column-reverse;
        align-items: center;
        & > div {
            display: flex;
            margin-bottom: 1.25rem; /* 20px */
            justify-content: end;
        }
    }
`;

export { Encabezado, Texto, ContenedorHeader };