import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { withRouter, BrowserRouter, Link, Switch, Route, NavLink, Router, Redirect } from "react-router-dom";



// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

 class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <SideNav style={{  position: 'fixed'}}
                    onSelect={(selected) => {
                        const to = '/' + selected;
                        if (this.props.location.pathname !== to) {
                            this.props.history.push(to);
                        }
                    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="">
                        <NavItem eventKey="">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Principal
                        </NavText>
                        </NavItem>
                        <NavItem eventKey="producto">
                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Cursos
                        </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            </>
        );
    }
}

export default withRouter(Menu);