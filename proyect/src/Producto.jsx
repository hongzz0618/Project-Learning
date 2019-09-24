import React from "react";
import { Redirect } from 'react-router-dom';
import { Translate, withLocalize } from "react-localize-redux";

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./css/estilosProducto.css";
import { BrowserRouter, Link, Switch, Route, NavLink } from "react-router-dom";
const API = "http://localhost:3000/api";

class Producto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            publicacion: [], like: 0, comentario: 0,
            desactivados: []
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


    insertLike(id) {

        if (this.state.desactivados.indexOf(id)!==-1) {
            return;
        }
        
        this.setState({desactivados: [...this.state.desactivados, id]});

        let contacto = {

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
    loadData() {

        fetch(API + "/publicacion")
            .then(datos => datos.json())
            .then(publicacion => this.setState({ publicacion: publicacion.data }))
            .catch(err => console.log(err));


        // fetch(API + "/likes/1/count")
        //     .then(datos => datos.json())
        //     .then(like => this.setState({ like: like.data.cuantos }))
        //     .catch(err => console.log(err));

        // fetch(API + "/comentario/1/count")
        //     .then(datos => datos.json())
        //     .then(comentario => this.setState({ comentario: comentario.data.cuantos }))
        //     .catch(err => console.log(err));

    }

    render() {
        if (!this.state.publicacion || !this.props.activeLanguage) {
            return <h1>Cargando datos...</h1>
        }

                // this.props.activeLanguage.code ha sido "inyectado" en este componente y lo podemos utilizar
        // gracias al withLocalize(...) de abajo del todo...
        let idioma_actual = this.props.activeLanguage.code;
        let campo_nombre = "nombre_"+idioma_actual.toUpperCase();
        let campo_info = "Info_"+idioma_actual.toUpperCase();





        let bbdd = this.state.publicacion.map(el => <>


            <div key={el.idPublicacion} className="cajaProducto" >
                
                <div>
                   <i className="corazonProducto far fa-heart" onClick={() => this.insertLike(el.idPublicacion)} onChange={this.handleInputChange}>{el.numLikes}</i>
                </div>
                <NavLink className="navProducto" to={"/datos_bbdd/" + el.idPublicacion}>
                    <center>
                        <div>
                        {el.file ? <img className="imagenProducto" src={'http://localhost:3000/img/' + el.file} alt="xx" /> : "No foto"} 
                        </div>  
                        <h3>{el[campo_nombre]}</h3>
                        <p>{el.precio}</p>

                        <div className="textoProducto">{el[campo_info]}</div> <br />


                        <form>

                            <p className="comentariosProducto"><img src="https://img.icons8.com/plasticine/100/000000/comments.png" width="40%" />({el.numComent})</p>
                        </form>
                    </center>

                </NavLink>
            </div>

        </>);

        return (
            <>

                <center>
                    <Link className="botonProductoPublicar btn btn-secondary" to="/new_publicacion"><Translate id="global.nuevaPublicacion" /></Link>

                </center>
                {bbdd}



            </>
        )
    }

}
export default withLocalize(Producto);  