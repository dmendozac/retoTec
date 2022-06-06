import React from 'react';
import { Helmet } from 'react-helmet';
import { Encabezado, ContenedorHeader, ContenedorBotones } from './elementos/Encabezado';
import Boton from './elementos/Boton';
import Login from './componentes/Login';

const App = () => {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;