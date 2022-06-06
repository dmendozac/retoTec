import React, {useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
import {Helmet} from 'react-helmet';

import Header from './Header';
import Imagen from './Imagen';
import Footer from './Footer';

import Boton from './../elementos/Boton';

import { FormularioEstilo__W3, GrupoTexto, Email, ContenedorBoton } from '../elementos/ElementosFormularioW3';
import { Contenedor, Cabecera, Titulo, TextoGrande, TextoNormal, TextoPequeño }from './../elementos/ElementosGenerales';


const Gracias = ({email}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const ejemplo = searchParams.get("email");
  useEffect(() => {

  }, [email])
  
    return (
      <>
      {console.log(ejemplo, 'gracias')}
        <div className="container__grid maqueta__primaria">
          <Helmet>
            <title>Gracias</title>
          </Helmet>
          <Header />
          <Imagen ventana="imagen__tres"/>
          <formulario className = "formulario"> {/*GRID*/}
            <Contenedor>
              <FormularioEstilo__W3>
                <Titulo rojo>¡Te damos la bienvenida! </Titulo>
                <Titulo grisOscuro>Cuenta con nosotros para proteger tu vehículo</Titulo>
                <GrupoTexto>
                  <TextoNormal>Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:</TextoNormal>
                  <Email>{email}</Email>
                </GrupoTexto>
                <Boton type="button" ruta="/" texto='como usar mi seguro'/>
              </FormularioEstilo__W3>          
            </Contenedor>
          </formulario>

          <Footer />
        </div>
      </>
    );
}

export default Gracias;