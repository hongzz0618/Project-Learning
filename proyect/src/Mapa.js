import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps";


const mapa = Map;

const REACT_APP_GOOGLE_KEY = "AIzaSyC4g4B7cWdRTVvNkHJ8TjLZBlvr5IK-GtQ";

 

function seleccion(e, s){
    // console.log(e.latLng.toJSON())
    s(e);
    return e.latLng.toJSON();
}

function Map(props) {
    const selecCoords = props.selecCoords;
    const datos = props.datos;
    const p = props.posicion;
    const s = props.selector;
    const [selectedItem, setSelectedItem] = React.useState(null);
    

    return (
        <GoogleMap 
        onClick={e => {if(s) seleccion(e, selecCoords)}}
            defaultCenter={p}
            defaultZoom={10}
        >

            {datos.map((el) => (
                <Marker
                    key={el.idPublicacion}
                    position={{ lat: el.ubicacion_latitud*1, lng: el.ubicacion_longitud*1 }}
                    onClick={() => {
                        setSelectedItem(el);
                    }}
                    
                />
            ))} 

            {selectedItem && !s &&(
                <InfoWindow
                    onCloseClick={() => {
                        setSelectedItem(null);
                    }}
                    position={{
                        lat: selectedItem.ubicacion_latitud*1,
                        lng: selectedItem.ubicacion_longitud*1
                    }}
                >
                    <div>
                        <h2>{selectedItem.nombre_ES}</h2>
                        
                    </div>
                </InfoWindow>
            )}
        
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(mapa));


export default class Mapa extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            coordenadas : {lat:0,lng:0}
        }

        this.iniPos = this.iniPos.bind(this);
        this.iniPos();
    }



    iniPos(){

        var options = {
            enableHighAccuracy: true,
            timeout: 60000,
            maximumAge: 0
          };        
          
        navigator.geolocation.getCurrentPosition((pos) => {this.setState({coordenadas:{lat:pos.coords.latitude,lng:pos.coords.longitude}})},() => {this.setState({coordenadas:{lat:0,lng:0}})}, options);

    }

    render() {

        const url = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${REACT_APP_GOOGLE_KEY}`;
        
        return (
            <div style={{ height: this.props.altura, width: this.props.anchura }}>
                <WrappedMap
                    selecCoords={this.props.coordenadas}
                    selector={this.props.selector}
                    datos = {this.props.datos}
                    posicion = {this.state.coordenadas}
                    googleMapURL={url}
                    loadingElement={<div style={{ height: '100%' }} />}
                    containerElement={<div style={{ height: '100%' }} />}
                    mapElement={<div style={{ height: '100%' }} />}
                />
            </div>
        );
    }
}