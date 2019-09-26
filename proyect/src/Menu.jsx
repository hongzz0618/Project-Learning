import React from 'react';
// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { withRouter, Link } from "react-router-dom";
import "./pruebasMenu.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import logo from "./logoDeLaPagina/logoPagina.png";
import { Translate } from 'react-localize-redux';



// // Be sure to include styles at some point, probably during your bootstraping
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    return (
      <>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img src={logo} width="40px"></img></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="botonesNav ml-auto" navbar>
              <NavItem>
                <NavLink href="/principal"><img src="https://img.icons8.com/ios/50/000000/map.png" width="30"/></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/producto"><img src="https://img.icons8.com/ios/50/000000/course-assign.png" width="30"/></NavLink>
              </NavItem>
              <UncontrolledDropdown  nav inNavbar>
                <DropdownToggle nav caret>
                  <Translate id="global.opciones" />
                </DropdownToggle>
                <DropdownMenu className="botonesNavMovil" right>
                  <DropdownItem>
                  <Translate id="global.editarPerfil" />
                  </DropdownItem>
                  <DropdownItem>
                  <Translate id="global.misCursos" />
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <NavLink href="/"><Translate id="global.salir" /></NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

      </>
    );
  }
}

export default withRouter(Menu);