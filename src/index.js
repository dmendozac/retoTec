import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './componentes/Login';
import ArmaTuPlan from './componentes/ArmaTuPlan';
import Gracias from './componentes/Gracias';
import { Helmet } from 'react-helmet';
import favicon from './images/LogoRIMAC.svg';
import WebFont from 'webfontloader';
import { AuthProvider } from './context/AuthProvider';

WebFont.load({
    google: {
        families: ['Poppins', "Lato:100,300,400,700", "Roboto:100,300,400,700","undefined:"]
    }
  });

const container = document.getElementById('root');
const root = createRoot(container);

const Index = () =>{
  return (
    <>
    <AuthProvider>
      <Helmet>
        {/* Ventana */}
        <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
        <tittle>Rimac</tittle>
      </Helmet>
      <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<Login />}/>
            {/* <Route path = "/iniciar-sesion" element = {<InicioSesion />}/> */}
            <Route path = "/arma-tu-plan" element = {<ArmaTuPlan />}/>
            {/* envía el id de la página anterior */ } 
            <Route path = "/gracias" element = {<Gracias />}/>
            {/* App */}
          </Routes>
      </BrowserRouter>
    </AuthProvider>
    </>
  );
}
root.render(<Index />);