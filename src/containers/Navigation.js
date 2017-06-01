import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import RouteNavItem from '../components/RouteNavItem';


const navStyle = {
  navContainer: {
    width: "100vw",
    padding: "0"
  },
  navBar: {
    width: "100%",
    backgroundColor: "#0079d3"
  },
  navDrawer: {
    backgroundColor: "#0079d3"
  },
  drawerItem: {
    color: "#fff",
    fontSize: "18px"
  }
};
  

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

