import styled from 'styled-components';

const ContenedorBg1 = styled.div`
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

const ContenedorFiltros = styled.div`
    z-index: 2;
    //display: flex;
    justify-content: space-between;
    //margin-bottom: 1.87rem; /* 30px */
    font-size: 16px;
    line-height: 24px;
    //display: flex-start;
    align-items: left;
    letter-spacing: 0.2px;
    //color: var(--grisClaro3);
    //width: 100%;
    //padding: 1.5rem 1.5rem ;
    font-family: "Lato";
    font-weight: 400;
 
	/* PANTALLA TABLET */
	@media (max-width: 768px) {
        flex-direction: column;
 
        & > * {
            //width: 100%;
            margin-bottom: 0.62rem; /* 10px */
        }
    }
`;
 
const FormularioEstilo__W1 = styled.form`
    z-index: 2;
    height: 100%;
    padding: 0 30% 0 30%;  /*40px */
    display: flex;
    flex-direction: column;
    //align-items: center;
    justify-content: left;
    input {//para todos los input que esten adentro
        width: 100%;
        padding: 1.2rem 1.2rem ;
        font-family: "Lato";
        //font-weight: 200;
        &::placeholder {
            color: var(--grisClaro2);
            border: var(--grisClaro2);
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
const FormularioEstilo__W2 = styled.form`
    z-index: 2;
    height: 100%;
    padding: 0 10% 0 10%;  /*40px */
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

const Input = styled.input`
    z-index: 2;
/*    width: 100vw;
    //outline: none;
    margin: none;
     font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 1.5rem;/* 40px 
    color: var(--grisClaro2);*/
`;

const Placeholder = styled.input`
  font-size: 16px;
  font-family: Lato;
  font-weight: 400;
  line-height: 24px;
  color: #a3abcc;
  padding: 0px;
  border-width: 0px;
  background: none;
  :: placeholder {
    color: #a3abcc;
  }
  display: inline-block;
  outline-width: 0px;
  width: ${(props) => props.width};
`;

const Links = styled.span`
  font-size: 12px;
  font-family: Roboto;
  text-decoration: underline;
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 20px;
  white-space: pre-wrap;
  color: #676f8f;
  
  //display: contents;
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

const ContenedorCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  //justify-content: flex-start;
  gap: 12px;
  align-items: center;
  margin: 20px 0px 52px 0px;
  line-height: 20px;
  display: ${(props) => props.display};
`;

const Checkbox = styled.input`
    & > * {
            color: var(--grisClaro2);
            background-color: var(--grisClaro2);
    }
    color: var(--verde);
`;

const CheckboxCuadro = styled.div`
  height: 20px;
  background-image: url("https://file.rendit.io/n/1ABvtj3NgtGvv4o20V5H.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 2px;
`;

const Cuadro = styled.img`
  width: 16px;
  height: 16px;
`;

export { ContenedorBg1, ContenedorFiltros,
    FormularioEstilo__W1,
    FormularioEstilo__W2,
    Input, Placeholder, Links, ContenedorCheckbox ,ContenedorBoton, Checkbox, CheckboxCuadro, Cuadro };