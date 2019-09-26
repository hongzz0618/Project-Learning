import React from 'react';
import { Container, Row, Col, Button, } from 'reactstrap';
import './estilosMain.css';
import Logo from "./logoDeLaPagina/logoPagina.png";
import { BrowserRouter, Link, Switch, Route, NavLink } from "react-router-dom";





export default class Botones extends React.Component {


    render() {
   
        return(
			<div class="tm-containerPrimero">
			<div class="tm-text-white tm-page-header-container">
			  
				  <img className="logo" src={Logo} alt="logo"/>
			  
			</div>
			<div class="tm-main-content">

             {/* ENLACES BOTONES */}
			  <section class="tm-section tm-section-small">
			  <p>Todos los cursos disponibles.

			  </p>

			  <Link to="/producto" class="button"><Button color="primary" size="lg">Cursos</Button>{' '}</Link>
			  </section>
	  

			  <hr />
			
			  <section class="tm-section tm-section-small">
				<p>
                Encuentra todo todo tipo de cursos disponibles, cerca tuyo.
				Nuestro maps te lo pondra fácil.
				</p>

				<Link to="/principal" class="button"><Button color="primary" size="lg">Cerca de ti</Button>{' '}</Link>

			  </section>
			  <hr />
			 {/* FOOTER DE LA PAGINA, SALE NUESTRA INFORMACION. */}
			  <section class="tm-section tm-section-small">
				<h2 class="tm-section-header">Contactanos</h2>
				<p class="tm-mb-0">
				  Envia un correo a nuestro
				<a href="mailto:info@example.com" class="emailNuestro">Email</a>
				  para cualquier duda.
				</p>
				<div class="iconosSociales">
				  <div class="tm-social-link-container">
					<a href="" class="tm-social-link">
					  <i class="fab fa-facebook"></i>
					</a>
				  </div>
				  <div class="tm-social-link-container">
					<a href="" class="tm-social-link">
					  <i class="fab fa-twitter"></i>
					</a>
				  </div>
				  <div class="tm-social-link-container">
					<a href="" class="tm-social-link">
					  <i class="fab fa-instagram"></i>
					</a>
				  </div>
				  <div class="tm-social-link-container">
					<a href="" class="tm-social-link">
					  <i class="fab fa-pinterest"></i>
					</a>
				  </div>
				</div>
			  </section>
			</div>
			<footer>
			  <p class="tm-text-white tm-footer-text">
				Copyright &copy; 2020 Company Name 
				. Design:
				<a href="" class="tm-footer-link">Tooplate</a>
			  </p>
			</footer>
		  </div>
		
        );
         
    }
    }
