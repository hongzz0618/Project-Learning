import React from 'react';
import { Button, } from 'reactstrap';
import './estilosMain.css';
import Logo from "./logoDeLaPagina/logoPagina.png";
import { Link } from "react-router-dom";
import { Translate } from 'react-localize-redux';





export default class paginaMain extends React.Component {


	render() {

		return (
			<div className="tm-containerPrimero">

				<Link to="/register"><Button className="botonesSesion" color="primary"><Translate id="global.registrate" /></Button></Link>
				<Button className="botonesSesion margen" color="primary"><Translate id="global.iniciarSesion" /></Button>

				<div className="tm-text-white tm-page-header-container">

					<img className="logo" src={Logo} alt="logo" />

				</div>
				<div className="tm-main-content">

					{/* ENLACES BOTONES */}
					<section class="tm-section tm-section-small">
						<p>
						<Translate id="global.primerTextoCursos" />
		                </p>

						<Link to="/producto" className="button"><Button color="primary" size="lg"><Translate id="global.botonCursos" /></Button>{' '}</Link>
					</section>


					<hr />

					<section className="tm-section tm-section-small">
						<p>
						<Translate id="global.segundoTextoMapa" />
				        </p>

						<Link to="/principal" className="button"><Button color="primary" size="lg"><Translate id="global.botonCerca" /></Button>{' '}</Link>

					</section>
					<hr />
					{/* FOOTER DE LA PAGINA, SALE NUESTRA INFORMACION. */}
					<section className="tm-section tm-section-small">
						<h2 className="tm-section-header"><Translate id="global.tituloContactanos" /></h2>
						<p className="tm-mb-0">
							<Translate id="global.textoCorreo" />
							<a href="mailto:info@example.com" class="emailNuestro"><Translate id="global.email" /></a>
							<Translate id="global.textoCorreoDos" />
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
							<div class="tm-social-link-container">
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
