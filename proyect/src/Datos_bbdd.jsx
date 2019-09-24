import React from "react";
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container, Card, CardTitle, CardBody, CardImg, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
import "./css/estilosDatos.css";
import { Translate, withLocalize } from "react-localize-redux";


const URL = "http://localhost:3000/api";

class Datos_bbdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            publicacion: [], aEditar: false, aBorrar: false, comentario: '', coment: [], modal: false
        };
        this.editItem = this.editItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.loadData = this.loadData.bind(this);
        this.tornar = this.tornar.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submit = this.submit.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
      
    componentDidMount() {//funcion de react 
        this.loadData();
    }
    loadData() {
        let itemId = this.props.match.params.idPublicacion;
        fetch(URL + "/publicacion/" + itemId)
            .then(datos => datos.json())
            .then(publicacion => this.setState({ publicacion: publicacion.data }))
            .catch(err => console.log(err));
        fetch(URL + "/comentario/" + itemId)
            .then(datos => datos.json())
            .then(coment => this.setState({ coment: coment.data }))
            .then(x => {
                console.log(x);
                return x;
            })
            .catch(err => console.log(err));

    }
    editItem(itemId) {
        this.setState({ aEditar: itemId });
    }
    tornar() {
        this.setState({ toList: true });
    }

    deleteItem(itemId) {
        this.setState({ aBorrar: itemId });
        if (!itemId) return;
        fetch(URL + "/publicacion/" + itemId, { method: 'DELETE' })
            .then(() => this.setState({ toList: true }))
            .catch(err => console.log(err))

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

        let contacto = {

            comentario: this.state.comentario,
            Publicacion_idPublicacion: this.props.match.params.idPublicacion,

        }

        fetch(URL + '/comentario/', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(contacto)
        })
            .then(respuesta => respuesta.json())
            .then(() => this.loadData())
            .catch(err => console.log(err))


        this.setState({ comentario: "" });

        


    }

    render() {
        if (!this.state.publicacion || !this.props.activeLanguage) {
            return <h1>Cargando datos...</h1>
        }

      
        if (this.state.aEditar) {
            return <Redirect to={"/edit_publicacion/" + this.state.aEditar} />
        }
        if (this.state.toList) {
            return <Redirect to="/producto" />
        }
        let datosComent = this.state.coment.map(el => <div>{el.comentario}</div>);
        console.log(this.state.coment);


        // this.props.activeLanguage.code ha sido "inyectado" en este componente y lo podemos utilizar
        // gracias al withLocalize(...) de abajo del todo...
        let idioma_actual = this.props.activeLanguage.code;
        let campo_nombre = "nombre_"+idioma_actual.toUpperCase();
        let campo_info = "Info_"+idioma_actual.toUpperCase();


        let hola = this.state.publicacion

        return (

            /*informacion en castellano ingles y chino*/
            <Container fluid>
                <Row className="cajaPrimariaRow">
                    
                <Col sm="6" lg="6">
                <Button style={{marginBottom: 10}} type="button" onClick={this.tornar} className='secodary' size='sm'><Translate id="global.volverDatos" /></Button>
                </Col>
                <Col sm="6" lg="6">
                    {/* BOTONES EDITAR Y BORRAR */}
                <div className="botonesEditarBorrarDatos">
                    <i style={{ cursor: "pointer", marginRight: 5 }} className='fa fa-lg fa-edit text-success' onClick={() => this.editItem(this.state.publicacion.idPublicacion)}></i>
                    <i style={{ cursor: "pointer" }} className='fa fa-lg fa-trash text-danger' onClick={() => this.deleteItem(this.state.publicacion.idPublicacion)}></i>
                </div>
                </Col>
                <Col sm="12" lg="12">
                <Card>
                    {hola.file ? <img className="imagenDatos" src={'http://localhost:3000/img/' + hola.file} alt="xx" /> : "No foto"} 
                <CardTitle><h1>{this.state.publicacion[campo_nombre]}</h1></CardTitle>
                <CardBody>
                    {this.state.publicacion[campo_info]}
                </CardBody>
                


{/* DATOS DE CONTACTO Y REDES SOCIALES. */}

                <div>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Redes sociales</ModalHeader>
                    <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Aceptar</Button>{' '}

                    </ModalFooter>
                </Modal>
               </div>




                </Card>
                </Col>
                </Row>
                
                <Row className="CajaSecundariaRow">
                    <Col>
                <Form onSubmit={this.submit}>
                    {/* PONER ALGO PARA LOS COMENTARIOS que los esconda */}
                    
                <h3><Translate id="global.comentariosDatos" /></h3>
                <hr />
                <div className="textoComentariosDatos">
                {datosComent}
                </div>

                        
                            <FormGroup>
                                <Label for="comentarioInput"></Label>
                                <Input type="text" name="comentario" id="comentarioInput"
                                    value={this.state.comentario}
                                    onChange={this.handleInputChange} />
                            </FormGroup>
                        

                        <Button type="submit" className="botonPublicarComentarioDatos" size='sm' color="secondary" >{<Translate id="global.publicarComentarioDatos" />}</Button>



                    

                </Form>
                </Col>
                </Row>
            </Container>
        )
    }

}


export default withLocalize(Datos_bbdd);
