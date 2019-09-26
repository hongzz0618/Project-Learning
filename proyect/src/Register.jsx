import React from 'react';
import {
  Container,
  Alert,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
} from 'reactstrap';
import {Redirect } from 'react-router-dom';

//styles
import Zoom from 'react-reveal/Zoom';

import Slide from 'react-reveal/Slide';

const API = 'http://localhost:8080';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleSubmitSignIn = this.handleSubmitSignIn.bind(this);
    this.handleSubmitLogIn = this.handleSubmitLogIn.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      isOpen: false,
      nombre: '',
      email: '',
      password: '',
      passwordCheck: '',
      passwordlogin: '',
      emaillogin: '',
      token: {},
      volver: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleInputChange(event) {
    const target = event.target;
    let value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmitLogIn(event) {
    event.preventDefault();
    let user = {
      email: this.state.emaillogin,
      password: this.state.passwordlogin
    };

    console.log(user);

    fetch(API+'/login', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(user)
    })
      .then(data => data.json())
      .then(user => {
        console.log(user);
        this.setState = {
          user: user,
          volver: true
        };
      })
      .catch(err => console.log(err));
  }

  handleSubmitSignIn(event) {
    console.log("creando usuario...")
    event.preventDefault();
    let user = {
      nombre: this.state.nombre,
      email: this.state.email,
      password: this.state.password,
      passwordCheck: this.state.passwordCheck
    };

    if (this.state.password === this.state.passwordCheck) {
      fetch(API+'/newUser', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(user)
      })
        .then(data => data.json)
        .then(data => {
          console.log(data);
          this.setState = {
            token: data,
            volver: true
          };
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    if (this.state.volver === true) {
        console.log('redirigiendo');
      return <Redirect token={this.state.token} to="/" />;
    }

    return (
      <div>
        <Navbar color="transparent" light expand="xl">
          <NavbarBrand href="/">iEstudia</NavbarBrand>
          <NavbarToggler className="mt-5" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mx-auto mt-5" navbar>
              <Form onSubmit={this.handleSubmitLogIn}>
                <Container>
                  <Row>
                    <Col sm={4}>
                      <Zoom>
                        <Input
                          type="email"
                          name="emaillogin"
                          id="emaillogin"
                          className="mt-2 floating"
                          placeholder="Escribe tu email"
                          value={this.state.emaillogin}
                          onChange={this.handleInputChange}
                        />
                      </Zoom>
                    </Col>
                    <Col sm={4}>
                      <Zoom>
                        <Input
                          type="password"
                          name="passwordlogin"
                          id="passwordlogin"
                          className="mt-2 floating"
                          placeholder="Escribe tu contraseña"
                          value={this.state.passwordlogin}
                          onChange={this.handleInputChange}
                        />
                      </Zoom>
                    </Col>
                    <Col sm={4}>
                      <Zoom>
                        <Button className="buttons mt-2" block>
                          Iniciar sesión
                        </Button>
                      </Zoom>
                    </Col>
                  </Row>
                </Container>
              </Form>
            </Nav>
          </Collapse>
        </Navbar>

        <Container className="mb-5">
          <Slide left>
            <Alert
              style={{ width: '75%' }}
              className="mx-auto my-5 floating"
              color="primary"
            >
              Empieza hoy mismo gratis.
            </Alert>
          </Slide>
          <Slide bottom>
            <Form
              method="post"
              onSubmit={this.handleSubmitSignIn}
              className="mx-auto mt-5 floating"
              id="regiterform"
            >
              <FormGroup className="mt-5" row>
                <Label for="exampleName" sm={2}>
                  Nombre
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="nombre"
                    id="exampleName"
                    placeholder="Escribe tu nombre"
                    value={this.state.nombre}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleEmail" sm={2}>
                  Email
                </Label>
                <Col sm={10}>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Escribe tu email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="examplePassword" sm={2}>
                  Contraseña
                </Label>
                <Col sm={10}>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Escribe tu contraseña"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="examplePassword2" sm={2}>
                  Repite la contraseña
                </Label>
                <Col sm={10}>
                  <Input
                    type="password"
                    name="passwordCheck"
                    id="examplePassword2"
                    placeholder="Repite tu contraseña"
                    value={this.state.passwordCheck}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup className="ml-4 mb-2" check>
                <Label check>
                  <Input required type="checkbox" /> Acepto los términos y
                  condiciones.
                </Label>
              </FormGroup>
              <FormGroup check row>
                <Col>
                  <Button className="buttons" block>
                    Registrarse
                  </Button>
                  <Label className="mt-2">
                    ¿Ya tienes cuenta? Inicia sesión
                  </Label>
                </Col>
              </FormGroup>
            </Form>
          </Slide>
        </Container>
      </div>
    );
  }
}

export default Register;
