import React from "react";
import Mapa from "./Mapa";
import './paginaPrincipal.css';
import Menu from "./Menu.jsx";

import { Container, Row, Col } from 'reactstrap';

const REACT_APP_GOOGLE_KEY = "AIzaSyC4g4B7cWdRTVvNkHJ8TjLZBlvr5IK-GtQ";

const API = "http://localhost:3000/api";

export default class Principal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      coords: "x,y"
    }
    this.coordenadas = this.coordenadas.bind(this);
  }

  coordenadas(e) {
    let c = e.latLng.toJSON();
    this.setState({ coords: c, data: [{ 'idPublicacion': 99, 'ubicacion_latitud': c.lat, 'ubicacion_longitud': c.lng }] });
  }

  componentDidMount() {
    const url = API + "/publicacion";
    fetch(url)
      .then(data => { return data.json(); })
      .then(datajs => {
        if (datajs.ok) {
          this.setState({ data: datajs.data });
        }
      })
      .catch(err => console.log(err));

  }

  render() {
    console.log(this.state.data);
    if (this.state.data.length === 0) {
      return <h3> Cargando Datos</h3>
    }

    let datos = this.state.data;
    console.log(datos);

    return (
      <>  
              <Menu />

              <Mapa pruebaMapa="100vh" datos={datos} altura='100%' anchura='100%' selector={false} coordenadas={this.coordenadas} />



      </>
    );
  }
}