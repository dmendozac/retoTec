import styled, {css} from 'styled-components';

const Contenedor = styled.div`
    padding: 2rem;
    width: 100%;
	/* PANTALLA TABLET */
	@media (max-width: 768px) {
        max-height: none;
  }
`;

const GrupoInput = styled.div`
    //width: 30%;
    border: 1px solid var(--grisClaro2);
    border-radius: 8px;
    box-sizing: border-box;
    padding: 8x;
    margin: 8px 0px 8px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* PANTALLA TABLET */
        @media (max-width: 768px) {
        font-size: 1rem; /* 24px */
    }
`;

const Titulo = styled.span`
    font-weight: normal;
    letter-spacing: -0.2px;
    font-size: 44px;
    line-height: 52px;
    font-family: Lato;
    font-weight: 500;
  z-index: 98;

	/* PANTALLA TABLET */
	@media (max-width: 768px) {
        font-size: 2rem; /* 32px */
    }
    ${props => props.rojo && css`
        color: var(--rojo);
    `}
    ${props => props.grisOscuro && css`
        color: var(--grisOscuro);
    `}
`;
const TextoGrande = styled.div`
    z-index: 2;
    //margin-top: 3em;
    //margin-bottom: 1rem;
    font-family: Lato;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    color: #494F66;
    ${props => props.rojo && css`
        color: var(--rojo);
    `}
    ${props => props.grisOscuro && css`
        color: var(--grisOscuro);
    `}
`;

const TextoNormal = styled.div`
    z-index: 2;
    //margin-top: 3rem;
    margin-bottom: 1rem;
    margin-right: 1rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.2px;
    color: #494F66;
`;

const TextoPequeño = styled.div`
    z-index: 2;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #676F8F;
      white-space: pre-wrap;
  display: ${(props) => props.display};
    input {
        margin-top:24px;
        color: var(--verde);
        border-radius: 4px;
    }
`;

const TextoMini = styled.span`
  font-size: 12px;
  line-height: 18px;
  font-family: Lato;
  font-weight: 700;
  letter-spacing: 0.8px;

  text-transform: uppercase;
  color: #494f66;
  margin-bottom: 4px;
`;

const TextoFormulario = styled.span`
  width: 40.3px;
  font-size: 16px;
  font-family: Lato;
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 24px;
  color: #494f66;
  margin: 0px 8.03px 0px 0px;
`;

const FlechaAbajo = styled.img`
  width: 16.1px;
  height: 16.1px;
`;

const IconoRojo = styled.span`
  font-weight: 400;
  color: var(--rojo);
  border: none;
  background: var(--blanco);
  margin: 0px 10px 0px 10px;
`;

const IconoLila = styled.span`
  font-weight: 400;
  color: var(--lila);
  border: none;
  background: var(--blanco);
  margin: 0px 10px 0px 10px;
`;

const IconoVerde = styled.span`
  font-weight: 400;
  color: var(--verde);
  border: none;
  background: var(--blanco);
  margin: 0px 10px 0px 10px;
`;

export { Contenedor, GrupoInput, Titulo, TextoGrande, TextoNormal, TextoPequeño, TextoMini, TextoFormulario,
  FlechaAbajo,
  IconoRojo, IconoLila, IconoVerde };