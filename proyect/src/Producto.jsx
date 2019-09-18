import React from "react";
import { Redirect } from 'react-router-dom';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./css/calculadora.css";
import { BrowserRouter, Link, Switch, Route, NavLink } from "react-router-dom";
const API = "http://localhost:3000/api";

export default class Producto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            publicacion: [], like: 0, comentario: 0
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
        if (!this.state.publicacion) {
            return <h1>Cargando datos...</h1>
        }

        let bbdd = this.state.publicacion.map(el => <>


            <div key={el.idPublicacion} className="producto" ><div><i className="far fa-heart corazon" onClick={() => this.insertLike(el.idPublicacion)} onChange={this.handleInputChange}>{el.numLikes}</i></div>
                <NavLink to={"/datos_bbdd/" + el.idPublicacion}>
                    <center><div>{el.file ? <img src={'http://localhost:3000/img/' + el.file} alt="xx" /> : "No foto"} </div>  <h3>{el.nombre_ES}</h3><p>{el.precio}</p>

                        {el.Info_ES} <br />


                        <form>
                            {/* <div className="clasificacion coment">
                            <input id="radio1" type="radio" name="estrellas" value="5" />
                            <label for="radio1">★</label>
                            <input id="radio2" type="radio" name="estrellas" value="4" />
                            <label for="radio2">★</label>
                            <input id="radio3" type="radio" name="estrellas" value="3" />
                            <label for="radio3">★</label>
                            <input id="radio4" type="radio" name="estrellas" value="2" />
                            <label for="radio4">★</label>
                            <input id="radio5" type="radio" name="estrellas" value="1" />
                            <label for="radio5">★</label>

                        </div> */}
                            <p className="coment"> ({el.numComent})</p>
                        </form>
                    </center>

                </NavLink>
            </div>

        </>);

        return (
            <>

                <center>
                    <Button className="b_newpublicacion" ><Link className="dropdown-item" to="/new_publicacion">Nova publicacion</Link></Button>

                </center>
                {bbdd}



            </>
        )
    }

}