import React, { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from './../context/AuthProvider';
import axios from 'axios';

import { Helmet } from 'react-helmet';

import ArmaTuPlan from './ArmaTuPlan';

import Header from './Header';
import Imagen from './Imagen';
import Footer from './Footer';

import { useNavigate } from 'react-router-dom';

import Boton from './../elementos/Boton';
import Alerta from './../elementos/Alerta';
import { ContenedorFiltros, FormularioEstilo__W1, Input, Placeholder, Links,  ContenedorCheckbox , ContenedorBoton, Checkbox, CheckboxCuadro, Cuadro  } from '../elementos/ElementosFormularioW1';
import { Contenedor, Cabecera, Titulo, TextoGrande, TextoNormal, TextoPequeño }from './../elementos/ElementosGenerales';
import styled from 'styled-components';

import ComponenteInput from './../elementos/Input';
import ComponenteSelect from './../elementos/Select';
import { Encabezado, Texto, Telefono, ContenedorHeader, ContenedorBotones } from './../elementos/Encabezado';
import configData from "../config.json";

const Login = () =>{

   const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const history = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [user, setUser] = useState({campo:'', valido: null});
  const [user2, setUser2] = useState({campo:'', valido: null});
  const [user3, setUser3] = useState({campo:'', valido: null});
  const [nombre, setNombre] = useState('');
  const [celular, setCelular] = useState('');
  const [placa, setPlaca] = useState('');
  const [email, setEmail] = useState('');
  const [alerta, setAlerta] = useState({});

  //Permite escribir en los inputs
    const handleChange = (e) => {
      console.log(e.target.value);
        switch(e.target.name){
            case 'usuario':
              setUsuario(e.target.value);
                break;
            case 'celular':
              setCelular(e.target.value);
                break;
            case 'placa':
              setPlaca(e.target.value);
                break;
            default:
                break;
        }
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.get("https://jsonplaceholder.typicode.com/users/" + usuario)
        .then(res => {
          const equipo = res.data;
          setNombre(equipo.username);
          setEmail(equipo.email);
          console.log(equipo,' funcion');
          console.log(equipo.username,' funcion');
          console.log(nombre,' funcion');
        })
        //console.log(JSON.stringify(response?.data));
        setAuth({ usuario, nombre, celular, placa, email });
        setSuccess(true);        
      } catch (err) {
        if (!err.response) {
          setErrMsg('No hay respuesta del servidor');
        } else if(err.response?.status === 400){
          setErrMsg('No se encuentran los datos');
        } else if(err.response?.status === 401){
          setErrMsg('Sin autorización');
        } else {
          setErrMsg('Error en el logeo');
        }
        errRef.current.focus();
        console.log(err);
      }
      console.log(usuario, nombre, celular, placa, email, ' submit');
    }

    
  useEffect(() => {
    /* userRef.current.focus(); */
  },[]);

  useEffect(() => {
    setErrMsg('');
  }, [usuario, nombre, celular, placa, email]);
  
  return (
    <>
      {/*<p ref={errRef} className={errMsg? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>*/}
      <Helmet>
        <title>Login</title>
      </Helmet>
      {success ? (
        <section>
          <ArmaTuPlan
            usuario = {usuario}
            nombre = {nombre}
            celular = {celular}
            placa = {placa}
            email = {email}
          />
        </section>
      ):(
      <>
      <div className="container__grid maqueta__primaria">
      <Helmet>
        <title>Iniciar Sesión</title>
      </Helmet>
       <Header />
      <Imagen ventana="imagen__uno"/>
      <formulario className = "formulario"> {/*GRID*/}
      <Contenedor>
        <FormularioEstilo__W1 onSubmit = {handleSubmit}>
          <div className = "textoMediano">Déjanos tus datos</div>
          <ComponenteSelect
            estilo="textoFormulario"
            tipo="text"
            label=""
            placeholder="Nro. de doc"
            name="usuario"
            ref={userRef}
            leyendaError=""
            value = {usuario}
            expresionRegular = '/^[a-zA-Z0-9\_\-]{4,16}$/'
            onChange = {(e)=>setUsuario(e.target.value)}
            required
          />
          <ComponenteInput
            estado = {user}
            cambiarEstado = {setUser}
            select={false}
            estilo="textoFormulario"
            tipo="text"
            label=""
            placeholder="Celular"
            name="celular"
            leyendaError=""
            value = {user}
            expresionRegular = '/^[a-zA-Z0-9\_\-]{4,16}$/'
            required
          />
          <ComponenteInput
          estado = {user2}
          cambiarEstado = {setUser2}
            select = {false}
            estilo="textoFormulario"
            tipo="text"
            label=""
            placeholder="Placa"
            name="placa"
            leyendaError=""
            value = {user2}
            expresionRegular = '/^[a-zA-Z0-9\_\-]{4,16}$/'
            required
          />
          <ContenedorCheckbox>
            <CheckboxCuadro>
              <Cuadro src={"https://file.rendit.io/n/amrdFXnD1Mce1wGAvJkC.svg"} />
            </CheckboxCuadro>
            <TextoPequeño>
              {/* <Input type="checkbox" name="acepto" /> */}
              Acepto la <Links>Política de Protección de Datos Personales</Links> y los <Links>Términos y Condiciones.</Links>
            </TextoPequeño>
          </ContenedorCheckbox>
          <Boton as = "button" type="submit" texto='cotízalo'/>
        </FormularioEstilo__W1>
       </Contenedor> 
      </formulario>
          {/*

          </Formulario>

          <Formulario className = "formulario">

        <Alerta
        tipo={alerta.tipo}
        mensaje={alerta.mensaje}
        estadoAlerta={estadoAlerta}
        cambiarEstadoAlerta={setEstadoAlerta}
      />
      </Formulario>*/}

      <Footer />
    </div>
    
       

        </>
      )}
      
    </>
  );
}
export default Login;