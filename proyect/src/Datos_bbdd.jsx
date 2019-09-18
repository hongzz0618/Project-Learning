import React from "react";
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Row, Col } from 'reactstrap';
const URL = "http://localhost:3000/api";
export default class datos_bbdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            publicacion: [], aEditar: false, aBorrar: false, comentario: '', coment: [],
        };
        this.editItem = this.editItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.loadData = this.loadData.bind(this);
        this.tornar = this.tornar.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submit = this.submit.bind(this);
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
        fetch(URL + "/comentario/"+itemId)
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
             if (!this.state.publicacion) {
            return <h1>Cargando datos...</h1>
        }




        if (this.state.aEditar) {
            return <Redirect to={"/edit_publicacion/" + this.state.aEditar} />
        }
        if (this.state.toList) {
            return <Redirect to="/" />
        }
        let datosComent = this.state.coment.map(el => <div>{el.comentario}</div>);
        console.log(this.state.coment);
        return (
            <>
                <h1>{this.state.publicacion.nombre_ES} <br/>{this.state.publicacion.nombre_EN} <br/>{this.state.publicacion.nombre_CH} <br/></h1>

                <div>{this.state.publicacion.Info_ES}<br/> {this.state.publicacion.Info_EN} <br/> {this.state.publicacion.Info_CH}  <br />  <i style={{ cursor: "pointer" }} className='fa fa-lg fa-edit text-success' onClick={() => this.editItem(this.state.publicacion.idPublicacion)}></i> <i style={{ cursor: "pointer" }} className='fa fa-lg fa-trash text-danger' onClick={() => this.deleteItem(this.state.publicacion.idPublicacion)}></i></div>
                <Button type="button" onClick={this.tornar} className='' size='sm' color="primary" >{"<-"}</Button>
                <h3>Comentarios: </h3>
                {datosComent}
                <Form onSubmit={this.submit}>
                    <Row>

                        <Col sm="6">
                            <FormGroup>
                                <Label for="comentarioInput"></Label>
                                <Input type="text" name="comentario" id="comentarioInput"
                                    value={this.state.comentario}
                                    onChange={this.handleInputChange} />
                            </FormGroup>
                        </Col>

                        <Button type="submit" className='' size='sm' color="success" >{"Publicar Comentario"}</Button>



                    </Row>

                </Form>
            </>
        )
    }

}