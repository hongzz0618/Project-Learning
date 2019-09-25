
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import axios from 'axios';
import Mapa from './Mapa';
/*multiIdiomas*/
import { Translate, withLocalize } from "react-localize-redux";
// ESTE CSS ES PARA EL INPUT DE ABAJO
import "./formularioNuevaPublicacion.css";

const API = "http://localhost:3000/api";


class NovaPublicacio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ubicacion_latitud: '',
            ubicacion_longitud: '',
            nombre_ES: '',
            nombre_EN: '',
            nombre_CH: '',
            precio: '',
            Info_ES: '',
            Info_EN: '',
            Info_CH: '',
            file: '',loading: false, selectedFile: false, itemId: this.props.match.params.itemId,
            data: [],
            coords: "x,y"
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.tornar = this.tornar.bind(this);
        this.submit = this.submit.bind(this);
        this.coordenadas = this.coordenadas.bind(this);
    }

    coordenadas(e) {
        let c = e.latLng.toJSON();
        this.setState({ coords: c, data: [{ 'idPublicacion': 99, 'ubicacion_latitud': c.lat.toString(), 'ubicacion_longitud': c.lng.toString() }] });
        console.log("arriba",this.state.coords, this.state.data);
      }
    

    onChangeHandler = event=>{
        this.setState({
          selectedFile: event.target.files[0],
          loaded: 0,
        })
      }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }



    submit(e) {
        e.preventDefault();

        const data = new FormData() 
        data.append('file', this.state.selectedFile);

        data.append('ubicacion_latitud', this.state.data[0].ubicacion_latitud);
        data.append('ubicacion_longitud', this.state.data[0].ubicacion_longitud);
        data.append('precio', this.state.precio);
        data.append('Info_ES', this.state.Info_ES);
        data.append('Info_EN', this.state.Info_EN);
        data.append('Info_CH', this.state.Info_CH);
        data.append('nombre_ES', this.state.nombre_ES);
        data.append('nombre_EN', this.state.nombre_EN);
        data.append('nombre_CH', this.state.nombre_CH);
        axios.post(API+"/publicacion/foto", data)
        .then(res => { 
            console.log(res);
            this.setState({toList: true });
        })

    }

/* pestaña para que avise si quiere salir sin guardar*/
    tornar() {
        let mensaje;
        switch (this.props.activeLanguage.code) {
            case "es":
                mensaje = "¿Salir sin guardar?"
                break;
            case "en":
                mensaje = "¿Exit without save?"
                break;

            case "ch":
                mensaje = "退出而不保存?"
                break;

                default:
                break;
        }
        let resultado = window.confirm(mensaje);
        if (resultado===true){this.setState({ toList: true })}
        
    }
    


    render() {

        if (this.state.loading) return <h3>Cargando datos...</h3>;

        if (this.state.toList) {
            return <Redirect to="/producto" />
        }
        
        let datos = this.state.data;

        return (
            <>
            
                <Form className="formPublicacion" onSubmit={this.submit}>


                    <Row>
                        <Col><h3 className="tituloPublicacion"><Translate id="global.nuevaPublicacion"/></h3></Col>
                        <Col>
                            <span className="float-right">
                                <Button style={{margin: 2}} type="button" onClick={this.tornar} className='' size='sm' color="danger" ><Translate id="global.salirPublicacion"/></Button>
{/*EN ESTOS BOTONES VA LA NOTIFICACION, TAMBIEN HAY QUE MODIFICAR EL IDIOMA */}
                                <Button type="submit" className='' size='sm' color="secondary" ><Translate id="global.publicarPublicacion" /></Button>
                            </span>
                        </Col>
                    </Row>


                    <Row>
                        <Col sm="6">
                            <FormGroup>
                                <Label for="nombre_ESInput" className="textoPublicacion"><Translate id="global.nombreEspañolPublicacion" /></Label>
                                <Input type="text" name="nombre_ES" id="nombre_ESInput"
                                    value={this.state.nombre_ES}
                                    onChange={this.handleInputChange} required />
                            </FormGroup>
                        </Col>

                        <Col sm="6">
                            <FormGroup>
                                <Label for="nombre_ENInput" className="textoPublicacion"><Translate id="global.nombreInglesPublicacion" /></Label>
                                <Input type="text" name="nombre_EN" id="nombre_ENInput"
                                    value={this.state.nombre_EN}
                                    onChange={this.handleInputChange} required />
                            </FormGroup>
                        </Col>
                        <Col sm="6">
                            <FormGroup>
                                <Label for="nombre_CHInput" className="textoPublicacion"><Translate id="global.nombreChinoPublicacion" /></Label>
                                <Input type="text" name="nombre_CH" id="nombre_CHInput"
                                    value={this.state.nombre_CH}
                                    onChange={this.handleInputChange} required />
                            </FormGroup>
                        </Col>
                        <Col sm="6">
                            <FormGroup>
                                <Label for="precioInput" className="textoPublicacion"><Translate id="global.precioPublicacion" /></Label>
                                <Input type="text" name="precio" id="precioInput"
                                    value={this.state.precio}
                                    onChange={this.handleInputChange} />
                            </FormGroup>
                        </Col>

                        <Col sm="6">
                            <FormGroup>
                                <Label for="Info_ESInput" className="textoPublicacion"><Translate id="global.informacionEspañolPublicacion" /></Label>
                                <Input type="text" name="Info_ES" id="Info_ESInput"
                                    value={this.state.Info_ES}
                                    onChange={this.handleInputChange} />
                            </FormGroup>
                        </Col>

                        <Col sm="6">
                            <FormGroup>
                                <Label for="Info_ENInput" className="textoPublicacion"><Translate id="global.informacionInglesPublicacion" /></Label>
                                <Input type="text" name="Info_EN" id="Info_ENInput"
                                    value={this.state.Info_EN}
                                    onChange={this.handleInputChange} />
                            </FormGroup>
                        </Col>

                        <Col sm="6">
                            <FormGroup>
                                <Label for="Info_CHInput" className="textoPublicacion"><Translate id="global.informacionChinoPublicacion" /></Label>
                                <Input type="text" name="Info_CH" id="Info_CHInput"
                                    value={this.state.Info_CH}
                                    onChange={this.handleInputChange} />
                            </FormGroup>
                        </Col>

                        <Col sm="6">
                            <FormGroup>
                                <Label for="imgInput" className="textoPublicacion"><Translate id="global.imagenPublicacion" /><br/><img className="imagenBotonEnviar" src="https://img.icons8.com/ultraviolet/40/000000/upload-to-ftp.png" /></Label>
                                {/* EL BOTON ESTA INVISIBLE Y LA IMAGEN HACE COMO BOTON */}
                                <Input type="file" name="file" id="imgInput"
                                    onChange={this.onChangeHandler} className="botonEnviar"/>
                                   
                            </FormGroup>
                        </Col>

                        <Col sm="6">
                        
                            <Mapa datos={datos} pruebaMapa="100%" altura='400px' anchura='100%' selector={true} coordenadas={this.coordenadas} />

                        </Col>




                    </Row>


                </Form>

            </>

        );
    }
}




export default withLocalize(NovaPublicacio);




