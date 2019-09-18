import React from "react";
import Mapa from "./Mapa";


const API = "http://localhost:3000/api";

export default class Principal extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        data : [],
        coords: "x,y"
      }
      this.coordenadas = this.coordenadas.bind(this);
    }

    coordenadas(e){
      let c = e.latLng.toJSON();
      this.setState({coords: c, data:[{'idPublicacion':99,'ubicacion_latitud':c.lat,'ubicacion_longitud':c.lng}]});
    }

    componentDidMount(){
      const url = API+"/publicacion";
      fetch(url)
      .then(data => {return data.json();})
      .then(datajs => {
        if(datajs.ok) {
          this.setState({data: datajs.data});
        }
      })
      .catch(err => console.log(err));
  
    }

    render(){
      if(this.state.data.length === 0){
        return <h3> Cargando Datos</h3>
      }

      let datos = this.state.data;
      console.log(datos);

      return(
        <>  
            <div className='prueba' style={{width:'100%',height:'100%'}}>
        
            <Mapa datos={datos} altura='100%' anchura='100%' selector={false} coordenadas={this.coordenadas}/>
            </div>
        </>
      );
    }
}