import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

import Routes from './Routes';
import RouteNavItem from './components/RouteNavItem';
import './styles/app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: null
    }
  }

  updateAge = (age) => {
    console.log(age);
    this.setState({
      age: age
    });
  }

  handleNavLink = (event) => {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute('href'));
  }

  render() {
    const childProps = {
      age: this.state.age,
      updateAge: this.updateAge
    };

    return (
      <div className="App container">
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
        <Routes childProps={childProps} />
      </div>
      );
    }
  }

  export default withRouter(App);
