import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './estilos.css';





export default class Botones extends React.Component {


    render() {
   
        return(
			<Container fluid>
				<Row className="cabecera">
					<Col sm="12" xl="12">
						<h1 className="logo">TituloW</h1>
						<Button className="botonInicio" color="primary" size="sm">Iniciar sesion</Button>{' '}
					</Col>
					<Col sm="12" xl="12">
					<div className="cajaUno">
						<h1 className="tituloUno">PUBLICA TUS CURSOS</h1>
						<Button color="primary" size="md">Registrate</Button>{' '}

					</div>
					</Col>
				</Row>
				<Row className="pie">
					<Col sm="12" xl="12">
					<div className="cajaDos">
					<img src="http://www.estadistica.ucr.ac.cr/images/EEST/images/cursos.png" className="imagen"/>

					</div>
					</Col>
				</Row>
			</Container>

        );
         
    }
    }
