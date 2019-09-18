import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./css/calculadora.css";
import { BrowserRouter, Link, Switch, Route, NavLink } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import EditaPublicacion from './EditaPublicacion';
import NovaPublicacio from './NovaPublicacio';
import Producto from './Producto';
import Datos from './Datos_bbdd';
import Principal from './principal';

export default class App extends React.Component {
  render() {

    return (

      <>
        <BrowserRouter>
        <Container> 
     

       
          <Switch>

            <Route exact path="/" component={Principal} />
            <Route path="/producto" component={Producto} />
            <Route path="/datos_bbdd/:idPublicacion" component={Datos} />
            <Route path="/new_publicacion" component={NovaPublicacio} />
            <Route path="/edit_publicacion/:idPublicacion" render={(props) => <EditaPublicacion  {...props} />} />

          </Switch>

         
          </Container>
        </BrowserRouter>


      </>
    );
  }

}