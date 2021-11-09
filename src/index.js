import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";
import Login from "./Login";
import Logout from "./Logout";

ReactDOM.render(
  <Auth0Provider
    domain="balayokesh.eu.auth0.com"
    clientId="eDVL9dzVfiyBO5epWCA7VtoCgyZswzrU"
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/logout' element={<Logout/>} />
      </Routes>
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById("root")
);