import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";
import Login from "./Login";
import Logout from "./Logout";

const Routing = () => {
  return (
    <Auth0Provider
    domain="balayokesh.eu.auth0.com"
    clientId="eDVL9dzVfiyBO5epWCA7VtoCgyZswzrU"
    redirectUri={window.location.origin}
  >
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
      <Route path='/' exact element={<App/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/logout' element={<Logout/>} />
      </Routes>
    </BrowserRouter>
  </Auth0Provider>
  )
}

ReactDOM.render(<Routing />, document.getElementById("root"));
