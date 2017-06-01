import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';


import Navigation from './Navigation';
import UpcomingEvents from '../components/UpcomingEvents';

import bmLogo from '../images/bmlogo.png';
import bmbrewOutside from '../images/bmbrewOutside.jpg';

const homeStyles = {
  container: {
    width: "100%",
  },
  header: {
    display: "flex",
    WebKitDisplay: "flex",
    alignItems: "center",
    padding: "50px",
    overflow: "hidden",
    width: "100%",
    marginTop: "4%"
  },
  headerWrap: {
    display: "flex",
    WebKitDisplay: "flex"
  },
  headerContent: {
    flex: "2.5 0 0",
    color: "#fff",
    fontSize: "24px",
    justifySelf: "center",
    alignSelf: "center",
  },
  headerImage: {
    flex: "1 0 0",
    display: "inline-block",
    margin: "0 10px"
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
      <div className="home-container" style={homeStyles.container}>
        <Navigation />
        <div className="home-header" style={homeStyles.header}>
          <div className="header-wrap" style={homeStyles.headerWrap}>
            <div className="header-content" style={homeStyles.headerContent}>
              <h1>Welcome to Brick &amp; Mortar Brewery --Suffolk's first local brewery. Est 2017.</h1>
                <p>Browse about, or see our </p>
                <RaisedButton
                  label="upcoming events"
                  onTouchTap={this.handleEventToggle}
                />
            </div>
            <div className="header-image" style={homeStyles.headerImage}>
              <img src={bmbrewOutside} alt="b m brew outside view" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}