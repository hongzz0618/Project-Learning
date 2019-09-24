import React from 'react';

import "./css/estilosProducto.css";
import { BrowserRouter, Link, Switch, Route, NavLink } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import EditaPublicacion from './EditaPublicacion';
import NovaPublicacio from './NovaPublicacio';
import Producto from './Producto';
import Datos from './Datos_bbdd';
import Principal from './principal';

/*multiIdioma*/
import { withLocalize } from "react-localize-redux";
import { renderToStaticMarkup } from "react-dom/server";
import globalTranslations from "./translations/global.json";


import TriaIdioma from './TriaIdioma';
import "./estilosBotonesIdiomas.css";



class App extends React.Component {

  constructor(props) {
    super(props);

    this.props.initialize({
      languages: [
        {name: <img className="iconoIdiomas" src="https://img.icons8.com/color/48/000000/spain.png" />, code:"es"},
        {name: <img className="iconoIdiomas" src="https://img.icons8.com/color/48/000000/usa.png" />, code:"en"},
        {name: <img className="iconoIdiomas" src="https://img.icons8.com/color/48/000000/china.png" />, code:"ch"},
      ],
      translation: globalTranslations,
      options: { renderToStaticMarkup, defaultLanguage:'es'}
    });
  }

  render() {

    return (

      <>
      {/* pruebas del idioma */}
      <TriaIdioma />
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

export default withLocalize(App);