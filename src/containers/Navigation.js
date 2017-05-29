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
      <div className="nav container" style={navStyle.navContainer}>
        <AppBar title="Brick &amp; Mortar" style={navStyle.navBar} onLeftIconButtonTouchTap={this.handleToggle}>
          <Drawer
            docked={false}
            width={200}
            containerStyle={navStyle.navDrawer}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}>
            <Menu>
              <RouteNavItem onTouchTap={this.handleNavLink} href="/"><MenuItem style={navStyle.drawerItem}>Home</MenuItem></RouteNavItem>
              <RouteNavItem onTouchTap={this.handleNavLink} href="/beers"><MenuItem style={navStyle.drawerItem}>Beers</MenuItem></RouteNavItem>
              <RouteNavItem onTouchTap={this.handleNavLink} href="/events"><MenuItem style={navStyle.drawerItem}>Events</MenuItem></RouteNavItem>
            </Menu>
          </Drawer>
        </AppBar>
      </div>
      );
    }
  }

  export default withRouter(Navigation);


const navStyle = {
  navContainer: {
    width: "100vw",
    padding: "0"
  },
  navBar: {
    width: "100%",
    backgroundColor: "#30415d"
  },
  navDrawer: {
    backgroundColor: "#30415d"
  },
  drawerItem: {
    color: "#fff",
    fontSize: "18px"
  }
};
  