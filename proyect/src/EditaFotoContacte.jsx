
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Row, Col } from 'reactstrap';

import { Titol, SeparadorY, SeparadorX} from './Util.js';

import axios from 'axios';

// xmysql -h localhost -d agenda -u root
const API = "http://localhost:3000";


class EditaFotoContacte extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: false, selectedFile: false };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.tornar = this.tornar.bind(this);
    this.submit = this.submit.bind(this);

    // this.loadData = this.loadData.bind(this);

    // this.loadData();

  }



  /*loadData*/
  // loadData() {

  //   let itemId = this.props.match.params.itemId;
  //   fetch(API + "/contactos/" + itemId)
  //     .then(results => results.json())
  //     .then(data => {
  //       console.log(data);
  //       return data[0];
  //     })
  //     .then(data => this.setState({
  //       id: data.id,
  //       nombre: data.nombre,
  //       email: data.email,
  //       ciudad: data.ciudad,
  //     }))
  //     .then(() => this.setState({ loading: false }))
  //     .catch(err => console.log(err));

  // }

  onChangeHandler = event=>{
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }


  submit(e) {
    e.preventDefault();

    const data = new FormData() 
    data.append('file', this.state.selectedFile);
    axios.post("http://localhost:3000/api/publicacion/foto", data, { 
      // receive two    parameter endpoint url ,form data
      })
    .then(res => { // then print response status
        console.log(res.statusText)
    })
    this.setState({ toList: true });
  }


  tornar() {
    this.setState({ toList: true });
  }


  render() {

    if (this.state.loading){
        return (
            <>
                <SeparadorY y="40px" />
                <Titol>Carregant dades...</Titol>
            </>
        );
    } 

    if (this.state.toList) {
      return <Redirect to="/contactes" />
    }


    return (
      <>
        <Form onSubmit={this.submit}>
          <SeparadorY y="40px" />
          <Row>
            <Col><Titol>Editar contacte</Titol></Col>
            <Col>
              <span className="float-right">
                <Button type="button" onClick={this.tornar} className='' size='sm' color="danger" >{"Sortir sense desar"}</Button>
                <SeparadorX x="10px" />
                <Button type="submit" className='' size='sm' color="success" >{"Desar canvis"}</Button>
              </span>
            </Col>
          </Row>
          <SeparadorY y="20px" />

          <Row>
            <Col sm="6">
              <FormGroup>
                <Label for="nombreFoto">Nom</Label>
                <Input type="file" name="file" onChange={this.onChangeHandler} id="nombreFoto" />
              </FormGroup>
            </Col>

          </Row>


        </Form>

      </>

    );
  }
}




export default EditaFotoContacte;




