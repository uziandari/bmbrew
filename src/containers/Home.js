import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';


import Navigation from './Navigation';
import UpcomingEvents from '../components/UpcomingEvents';

import bmLogo from '../images/bmlogo.png';
import bmbrewOutside from '../images/bmbrewOutside.jpg';

const homeStyles = {
  staticLogo: {
    position: "absolute",
    left: "-10%",
    bottom: "-10%",
    zIndex: "10",
    transform: "rotate(37deg)",
  },
  header: {
    padding: "72px 48px",
    overflow: "hidden",
    margin: "0 auto"
  },
  welcomeText: {
    fontSize: "24px",
    margin: "25px"
  }
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsOpen: false
    };
  }

  handleEventToggle = () => this.setState({eventsOpen: !this.state.eventsOpen});

  render() {
    return (
      <div className="Home" style={homeStyles.container}>
        <Navigation />
        <Drawer width={300} openSecondary={true} open={this.state.eventsOpen}>
          <UpcomingEvents />
        </Drawer>
        <img style={homeStyles.staticLogo} src={bmLogo} alt="brick-mortar-logo" />
        <div className="home-header" style={homeStyles.header}>
          <img src={bmbrewOutside} alt="bmbrew outside" />
        </div>
        <div className="welcome-text" style={homeStyles.welcomeText}>
          <p>Welcome to Brick &amp; Mortar Brewery --Suffolk's first local brewery. Est 2017.</p>
          <p>Browse about, or see our </p>
            <RaisedButton
              label="upcoming events"
              onTouchTap={this.handleEventToggle}
            />
        </div>
      </div>
    );
  }
}