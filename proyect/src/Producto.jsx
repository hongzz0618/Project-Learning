import React from "react";
import { Translate, withLocalize } from "react-localize-redux";
import { Input, Row, Col, Container,Button, Form } from 'reactstrap';
import Menu from './Menu';
import "./css/estilosProducto.css";
import {  Link, NavLink } from "react-router-dom";




const API = "http://localhost:5000/api";

class Producto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            publicacion: [], like: 0, comentario: 0, inser: 0,
            desactivados: [], usuarioActual: 1, inputMovie: '',publicacion_search: [],
            buscando: false
        };
        this.loadData = this.loadData.bind(this);
        this.insertLike = this.insertLike.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }
    componentDidMount() {//funcion de react 
        this.loadData();

    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }


    insertLike(id) {

        if (this.state.inser === 0) {

            console.log(this.state.inser);
            this.setState({
                inser: 1
            });

         if (this.state.desactivados.indexOf(id)!==-1) {
                return;
            }

            this.setState({desactivados: [...this.state.desactivados, id]});
            let contacto = {
                Usuario_idUsuario: this.state.usuarioActual,
                Publicacion_idPublicacion: id,

            }
            fetch(API + '/likes/', {
                method: 'POST',
                headers: new Headers({ 'Content-Type': 'application/json' }),
                body: JSON.stringify(contacto)
            })
                .then(respuesta => respuesta.json())
                .then(() => this.loadData())
                .catch(err => console.log(err));


        }
        else {
            console.log(this.state.inser);
            this.setState({
                inser: 0
            });
            fetch(API + "/likes/" + id + "/" + this.state.usuarioActual, { method: 'DELETE' })
                .then(() => this.loadData())
                .catch(err => console.log(err))


        }
    }
    loadData() {

        fetch(API + "/publicacion")
            .then(datos => datos.json())
            .then(publicacion => this.setState({ publicacion: publicacion.data }))
            .catch(err => console.log(err));


    }
    _handleSubmit = (e) => {
        e.preventDefault();

if (this.state.inputMovie==="") {
 
    this.setState({ buscando: false, })
}else{

    fetch(API + "/publicacion/nombre/"+this.state.inputMovie)
    .then(res => res.json())
    .then(publicacions => this.setState({ buscando: true, publicacion_search: publicacions.data }))
    .catch(err => console.log(err));

}
       

    }



    render() {
        if (!this.state.publicacion || !this.props.activeLanguage) {
            return <h1>Cargando datos...</h1>
        }

        // this.props.activeLanguage.code ha sido "inyectado" en este componente y lo podemos utilizar
        // gracias al withLocalize(...) de abajo del todo...
        let idioma_actual = this.props.activeLanguage.code;
        let campo_nombre = "nombre_" + idioma_actual.toUpperCase();
        let campo_info = "Info_" + idioma_actual.toUpperCase();





        let bbdd = this.state.publicacion.map(el => <>

            <Col xs="12" sm="6" md="4" xl="3">
            <div key={el.idPublicacion} className="cajaProducto" >
            <i style={ (this.state.desactivados.indexOf(el.idPublicacion)!==-1) ? {color:"red"} : {color:"gray"}} className="corazonProducto fas fa-heart" onClick={() =>  this.insertLike(el.idPublicacion)} onChange={this.handleInputChange}>{el.numLikes}</i>
                <NavLink className="navProducto" to={"/datos_bbdd/" + el.idPublicacion}>
                    
                        <div>
                            {el.file ? <img className="imagenProducto" src={'http://localhost:5000/img/' + el.file} alt="xx" /> : "No foto"}
                        </div>
                        <h3>{el[campo_nombre]}</h3>
                        <p>{el.precio}</p>

                        <div className="textoProducto">{el[campo_info]}</div> <br />


                        <form>

                            <i className="comentariosDatos fas fa-comment-dots"  aria-hidden="true">({el.numComent})</i>
                        </form>
                    

                </NavLink>
            </div>
            </Col>

        </>);
        
let bbdd_search = this.state.publicacion_search.map(el => <>
<Col xs="12" sm="6" md="4" xl="3">
<div key={el.idPublicacion} className="cajaProducto" >
        
<i style={ (this.state.desactivados.indexOf(el.idPublicacion)!==-1) ? {color:"red"} : {color:"gray"}} className="corazonProducto fas fa-heart" onClick={() =>  this.insertLike(el.idPublicacion)} onChange={this.handleInputChange}>{el.numLikes}</i>
        
        <NavLink className="navProducto" to={"/datos_bbdd/" + el.idPublicacion}>
            <center>
                <div>
                    {el.file ? <img className="imagenProducto" src={'http://localhost:5000/img/' + el.file} alt="xx" /> : "No foto"}
                </div>
                <h3>{el[campo_nombre]}</h3>
                <p>{el.precio}</p>

                <div className="textoProducto">{el[campo_info]}</div> <br />


                <form>

                <i className="comentariosDatos fas fa-comment-dots"  aria-hidden="true">({el.numComent})</i>
                </form>
            </center>

        </NavLink>
    </div>
    </Col>

</>);

        return (
            <>
                
                <Menu />

                <Container fluid>
                <Row>
                <Col xs="6" lg="6">  
                <Link className="botonProductoPublicar btn btn-secondary" to="/new_publicacion"><Translate id="global.nuevaPublicacion" /></Link>
                </Col>
                <Col xs="6" lg="6">
                <Form  inline onSubmit={this._handleSubmit} className="formularioProducto medium-margin-bottom">
                        <div className="field has-addons">
                            
                                <Button size="sm" className="botonBuscar button is-info" type="submit">
                                   Buscar
						        </Button>
                                <Input 
                                    autoFocus
                                    onChange={this._handleChange}
                         placeholder="Introduce para buscar un producto"
                                    type="text"
                                    value={this.state.inputMovie}
                                />
                          
                            
                        </div>
                    </Form>
                    </Col>
                </Row>
                <Row>
            
                {(this.state.buscando) ?  bbdd_search : bbdd}
                  {(this.state.publicacion_search.length>1 || this.state.buscando===false) ? "":<><h1>No existe el Producto introducido</h1></>}
                
                
                 </Row>
                </Container>



            </>
        )
    }

}
export default withLocalize(Producto);  