import styled from 'styled-components';

const ContenedorBg3 = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    //right: 0px;
	/* PANTALLA TABLET */
	@media (max-width: 768px) {
        //height: 50vh;
    }
`;

const FormularioEstilo__W3 = styled.form`
    z-index: 2;
    height: 100%;
    padding: 0 10% 0 10%;  /*40px */
    display: flex;
    flex-direction: column;
    //align-items: center;
    justify-content: left;
 
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

const GrupoTexto = styled.div`
    z-index: 2;
    width: 100%;
    margin: 2rem 0 4rem 0;  
    /* PANTALLA TABLET */
        @media (max-width: 768px) {
        font-size: 1rem; /* 24px */
    }
`;

const Email = styled.div`
  font-weight: 500;
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
export { ContenedorBg3, FormularioEstilo__W3, GrupoTexto, Email, ContenedorBoton };