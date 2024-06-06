import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import HomeView from './home';
import FacturaView from './factura';
import E404 from './error/404';

function routes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <HomeView /> } />
        <Route exact path="/facturacion/imprimir" element={ <FacturaView /> } />
        <Route path="*" element={ <E404/> } />
      </Routes>
    </Router>
  );
}

export default routes;
