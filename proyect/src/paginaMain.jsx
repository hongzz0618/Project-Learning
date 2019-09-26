import React from 'react';
import {  Button, } from 'reactstrap';
import './estilosMain.css';
import Logo from "./logoDeLaPagina/logoPagina.png";
import {  Link} from "react-router-dom";





export default class Botones extends React.Component {


    render() {
   
        return(
			<div className="tm-containerPrimero">
			<div className="tm-text-white tm-page-header-container">
			  
				  <img className="logo" src={Logo} alt="logo"/>
			  
			</div>
			<div className="tm-main-content">

             {/* ENLACES BOTONES */}
			  <section className="tm-section tm-section-small">
			  <p>
				  Todos los cursos disponibles.

			  </p>

			  <Link to="/producto" className="button"><Button color="primary" size="lg">Cursos</Button>{' '}</Link>
			  </section>
	  

			  <hr />
			
			  <section className="tm-section tm-section-small">
				<p>
                Encuentra todo todo tipo de cursos disponibles, cerca tuyo.
				Nuestro maps te lo pondra fácil.
				</p>

				<Link to="/principal" className="button"><Button color="primary" size="lg">Cerca de ti</Button>{' '}</Link>

			  </section>
			  <hr />
			 {/* FOOTER DE LA PAGINA, SALE NUESTRA INFORMACION. */}
			  <section className="tm-section tm-section-small">
				<h2 className="tm-section-header">Contactanos</h2>
				<p className="tm-mb-0">
				  Envia un correo a nuestro
				<a href="mailto:info@example.com" className="emailNuestro">Email</a>
				  para cualquier duda.
				</p>
				<div className="iconosSociales">
				  <div className="tm-social-link-container">
					<a href="" className="tm-social-link">
					  <i className="fab fa-facebook"></i>
					</a>
				  </div>
				  <div className="tm-social-link-container">
					<a href="" className="tm-social-link">
					  <i className="fab fa-twitter"></i>
					</a>
				  </div>
				  <div className="tm-social-link-container">
					<a href="" className="tm-social-link">
					  <i className="fab fa-instagram"></i>
					</a>
				  </div>
				  <div className="tm-social-link-container">
					<a href="" className="tm-social-link">
					  <i className="fab fa-pinterest"></i>
					</a>
				  </div>
				</div>
			  </section>
			</div>
			<footer>
			  <p className="tm-text-white tm-footer-text">
				Copyright &copy; 2020 Company Name 
				. Design:
				<a href="" className="tm-footer-link">Tooplate</a>
			  </p>
			</footer>
		  </div>
		
        );
         
    }
    }
