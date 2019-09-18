
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import axios from 'axios';


const API = "http://localhost:3000/api";


class NovaPublicacio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ubicacion_latitud: '',
            ubicacion_longitud: '',
            nombre_ES: '',
            precio: '',
            Info_ES: '',
            file: '',loading: false, selectedFile: false, itemId: this.props.match.params.itemId
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.tornar = this.tornar.bind(this);
        this.submit = this.submit.bind(this);
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
     
        data.append('ubicacion_latitud', this.state.ubicacion_latitud);
        data.append('ubicacion_longitud', this.state.ubicacion_longitud);
        data.append('precio', this.state.precio);
        data.append('Info_ES', this.state.Info_ES);
        data.append('nombre_ES', this.state.nombre_ES);
        axios.post(API+"/publicacion/foto", data)
        .then(res => { 
            console.log(res);
            this.setState({toList: true });
        })

    }


    tornar() {
        this.setState({ toList: true });
    }


    render() {

        if (this.state.loading) return <h3>Cargando datos...</h3>;

        if (this.state.toList) {
            return <Redirect to="/producto" />
        }


        return (
            <>
                <Form onSubmit={this.submit}>


                    <Row>
                        <Col>Nova Publicacio</Col>
                        <Col>
                            <span className="float-right">
                                <Button type="button" onClick={this.tornar} className='' size='sm' color="danger" >{"Sortir sense desar"}</Button>

                                <Button type="submit" className='' size='sm' color="success" >{"Desar canvis"}</Button>
                            </span>
                        </Col>
                    </Row>


                    <Row>


                        <Col sm="6">
                            <FormGroup>
                                <Label for="ubicacion_latitudInput">ubicacion_latitud</Label>
                                <Input type="text" name="ubicacion_latitud" id="ubicacion_latitudInput"
                                    value={this.state.ubicacion_latitud}
                                    onChange={this.handleInputChange} />
                            </FormGroup>
                        </Col>
                        <Col sm="6">
                            <FormGroup>
                                <Label for="ubicacion_longitudInput">ubicacion_longitud</Label>
                                <Input type="text" name="ubicacion_longitud" id="ubicacion_longitudInput"
                                    value={this.state.ubicacion_longitud}
                                    onChange={this.handleInputChange} />
                            </FormGroup>
                        </Col>
                        <Col sm="6">
                            <FormGroup>
                                <Label for="nombre_ESInput">Nom</Label>
                                <Input type="text" name="nombre_ES" id="nombre_ESInput"
                                    value={this.state.nombre_ES}
                                    onChange={this.handleInputChange} />
                            </FormGroup>
                        </Col>

                        <Col sm="6">
                            <FormGroup>
                                <Label for="precioInput">precio</Label>
                                <Input type="text" name="precio" id="precioInput"
                                    value={this.state.precio}
                                    onChange={this.handleInputChange} />
                            </FormGroup>
                        </Col>

                        <Col sm="6">
                            <FormGroup>
                                <Label for="Info_ESInput">Info_ES</Label>
                                <Input type="text" name="Info_ES" id="Info_ESInput"
                                    value={this.state.Info_ES}
                                    onChange={this.handleInputChange} />
                            </FormGroup>
                        </Col>

                        <Col sm="6">
                            <FormGroup>
                                <Label for="imgInput">img</Label>
                                <Input type="file" name="file" id="imgInput"
                                    onChange={this.onChangeHandler} />
                                   
                            </FormGroup>
                        </Col>





                    </Row>


                </Form>

            </>

        );
    }
}




export default NovaPublicacio;




