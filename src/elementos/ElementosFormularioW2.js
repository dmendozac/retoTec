import styled from 'styled-components';

const ContenedorBg2 = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    position: relative;
    //right: 0px;
	/* PANTALLA TABLET */
	@media (max-width: 768px) {
        //height: 50vh;
    }
`;

const FormularioEstilo__W2 = styled.form`
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    //align-items: center;
    justify-content: left;
    input {//para todos los input que esten adentro
        width: 100%;
        padding: 1.2rem 1.2rem ;
        font-family: "Lato";
        font-weight: 200;
        &::placeholder {
            color: var(--grisClaro2);
        }
    }
 
    	/* PANTALLA TABLET */
	@media (max-width: 768px) {
        justify-content: start;
        padding: 0 15% 0 15%; /* 40px */
        input{
            
        }
    }
    	/* PANTALLA MOVIL */
	@media (max-width: 480px) {
        justify-content: start;
        padding: 0 5% 0 5%; /* 40px */
        input{
            
        }
    }
`;

const ContenedorDatos = styled.div`
    z-index: 2;
    width: 100%;
    height: 10rem;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    padding: 0px 0px 0px 20px;
    border: 3px solid var(--grisClaro);
    border-radius: 12px;
    margin: 4rem 0rem 4rem 0rem;
	/* PANTALLA TABLET */
	@media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContenedorBoton = styled.div`
    z-index: 2;
    display: flex;
    justify-content: center;
    /* margin: 2.5rem 0;  40px */


    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/*-------------- MONTO --------------*/
const ContenedorValores = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
  border-bottom: 1px solid var(--grisClaro);
  display: ${(props) => props.display};
`;

const Input = styled.input`
    z-index: 2;
    color: #A3ABCC;
`;

/*-------------- COBERTURAS --------------*/
const ContenedorCoberturas = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SeccionCoberturas = styled.button`
  width: 33%;
  height: 7.5rem;
  padding: 1.5rem;
  border: none;
  background-color: var(--blanco);
  border-bottom: 1px solid var(--grisClaro);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &: hover {
    color: var(--rojo);
    border-bottom: 1px solid var(--rojo);
  }
`;

const OpcionesCoberturas = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid var(--grisClaro);
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

const ImagenCoberturas = styled.svg`
  display: flex;
  height: 4rem;
  max-width: 4rem;
`;

const DetalleCoberturas = styled.div`
  display: flex;
  flex-direction: column;
`;

const TituloCoberturas = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
`;
const TextoCoberturas = styled.div`
  width: 20rem;
`;

export { ContenedorBg2, FormularioEstilo__W2, ContenedorDatos, ContenedorBoton,
  ContenedorValores, Input, 
  ContenedorCoberturas, SeccionCoberturas, OpcionesCoberturas, ImagenCoberturas, DetalleCoberturas, TituloCoberturas, TextoCoberturas };