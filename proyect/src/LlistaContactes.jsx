
import React, { Component } from 'react';
import { Button, Row, Col, Table } from 'reactstrap';
import { Redirect } from 'react-router-dom';

import { Titol, SeparadorY, SeparadorX} from './Util.js';

//PREPARAT PER API SEQUELIZE-CONTACTES
const API = "http://localhost:3000";


class LlistaContactes extends Component {

    constructor(props) {

        super(props);
        this.state = {
            aBorrar: false,
            aEditar: false,
            aFoto: false,
            nouItem: false,
        }

        this.newItem = this.newItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.editFoto = this.editFoto.bind(this);
        this.loadData = this.loadData.bind(this);

    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
      
        fetch( API+"/api/publicacion")
        .then(resp => resp.json())
        .then(dades => {this.setState({dades: dades.data})
        console.log(dades);}
        )
        .catch(err=>console.log(err));
    }
    


    newItem() {
        this.setState({ nouItem: true })
    }

    deleteItem(itemId) {
        if (!itemId) return;
        fetch(API+"/api/publicacion/"+itemId,  {method: 'DELETE'})
            .then(() => this.loadData())
            .catch(err => console.log(err))
    }

    editItem(itemId) {
        this.setState({ aEditar: itemId });
    }    
    
    editFoto(itemId) {
        this.setState({ aFoto: itemId });
    }    
    
    render() {

        
        if (!this.state.dades){
            return (
                <>
                    <SeparadorY y="40px" />
                    <Titol>Carregant dades...</Titol>
                </>
            );
        } 


        if (this.state.nouItem) {
            return <Redirect to={"/nou-contacte"} />
        }

        if (this.state.aEditar) {
            return <Redirect to={"/edit-contacte/"+this.state.aEditar} />
        }

        if (this.state.aFoto) {
            return <Redirect to={"/edit-contacte-foto/"+this.state.aFoto} />
        }

    


        const filesTaula = this.state.dades.map((el) =>
            <tr >
          
                <td>{el.nombre}</td>
            
                <td>{el.img}</td>
                <td>{el.precio}</td>

                <td>
                    <i style={{cursor: "pointer"}} className='fa fa-lg fa-edit text-success' onClick={() => this.editItem(el.idPublicacion)}></i>
                    <SeparadorX x="20px" />
                    <i style={{cursor: "pointer"}} className='fa fa-lg fa-edit text-primary' onClick={() => this.editFoto(el.idPublicacion)}></i>
                    <SeparadorX x="20px" />
                    <i style={{cursor: "pointer"}} className='fa fa-lg fa-trash text-danger' onClick={() => this.deleteItem(el.idPublicacion)}></i>
             </td>
            </tr>
        );

        return (
            <>
                <SeparadorY y="40px" />
                <Row>
                    <Col><Titol>Llista de contactes</Titol></Col>
                    <Col><Button className='float-right' size='sm' color="primary" onClick={this.newItem}>Nou contacte</Button></Col>
                </Row>
                <SeparadorY y="20px" />
                <Row>
                    <Col>
                        <Table>
                            <thead>
                                <tr>
                                   
                                    <th>Nom</th>

                                    <th>Foto</th>
                                    <th>precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filesTaula}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <br />
            </>
        );
    }
}



export default LlistaContactes;
