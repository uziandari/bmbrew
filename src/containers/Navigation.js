import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

import Routes from '../Routes';
import RouteNavItem from '../components/RouteNavItem';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  handleNavLink = (event) => {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute('href'));
  }

  render() {
    return (
      <div className="nav container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Brick &amp; Mortar</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <RouteNavItem onClick={this.handleNavLink} href="/beers">Beers</RouteNavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/*<Routes childProps={childProps} />*/}
      </div>
      );
    }
  }

  export default withRouter(Navigation);
