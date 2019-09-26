import React from 'react';
// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { withRouter, Link} from "react-router-dom";
import "./pruebasMenu.css";



// // Be sure to include styles at some point, probably during your bootstraping
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';

 class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <section class="menu menu--circle">
  <input type="checkbox" id="menu__active"/>
  <label for="menu__active" class="menu__active">
    <div class="menu__toggle">
      <div class="icon">
        <div class="hamburger"></div>
      </div>
    </div>
    <input type="radio" name="arrow--up" id="degree--up-0"/>
    <input type="radio" name="arrow--up" id="degree--up-1" />
    <input type="radio" name="arrow--up" id="degree--up-2" />
    <div class="menu__listings">
      <ul class="circle">
        <li>
          <div class="placeholder">
            <div class="upside">
              <Link to="/principal" class="button"><img src="https://img.icons8.com/ios/40/000000/map.png"/></Link>
            </div>
          </div>
        </li>
        <li>
          <div class="placeholder">
            <div class="upside">
              <Link to="/producto" class="button"><img src="https://img.icons8.com/ios/40/000000/courses.png"/></Link>
            </div>
          </div>
        </li>
        <li>
          <div class="placeholder">
            <div class="upside">
              
            </div>
          </div>
        </li>
        <li>
          <div class="placeholder">
            <div class="upside">
              
            </div>
          </div>
        </li>
        <li>
          <div class="placeholder">
            <div class="upside">
              
            </div>
          </div>
        </li>
        <li>
          <div class="placeholder">
            <div class="upside">
              
            </div>
          </div>
        </li>
        <li>
          <div class="placeholder">
            <div class="upside">
              
            </div>
          </div>
        </li>
        <li>
          <div class="placeholder">
            <div class="upside">
             
            </div>
          </div>
        </li>
        <li>
          <div class="placeholder">
            <div class="upside">
              
            </div>
          </div>
        </li>
        <li>
          <div class="placeholder">
            <div class="upside">
              <Link to="#" class="button"><img src="https://img.icons8.com/ios/40/000000/user.png"/></Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="menu__arrow menu__arrow--top">
      <ul>
        <li>
          <label for="degree--up-0"><div class="arrow"></div></label>
          <label for="degree--up-1"><div class="arrow"></div></label>
          <label for="degree--up-2"><div class="arrow"></div></label>
        </li>
      </ul>
    </div>
  </label>
</section>

                {/* <SideNav style={{}}
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
                </SideNav> */}
            </>
        );
    }
}

export default withRouter(Menu);