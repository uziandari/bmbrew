import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import RouteNavItem from '../components/RouteNavItem';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleNavLink = (event) => {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute('href'));
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});


  render() {
    return (
      <div className="nav container">
        <AppBar title="Brick &amp; Mortar" style={navStyles.navBar} onLeftIconButtonTouchTap={this.handleToggle}>
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}>
            <Menu>
              <RouteNavItem onTouchTap={this.handleNavLink} href="/"><MenuItem>Home</MenuItem></RouteNavItem>
              <RouteNavItem onTouchTap={this.handleNavLink} href="/beers"><MenuItem>Beers</MenuItem></RouteNavItem>
              <RouteNavItem onTouchTap={this.handleNavLink} href="/events"><MenuItem>Events</MenuItem></RouteNavItem>
            </Menu>
          </Drawer>
        </AppBar>
      </div>
      );
    }
  }

  export default withRouter(Navigation);


const navStyles = {
  navBar: {
    width: "100vw",
    backgroundColor: "#0097a7"
  }
};
  