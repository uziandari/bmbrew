import React, { Component } from 'react';

import Navigation from './Navigation';

import bmLogo from '../images/bmlogo.png';
import bmbrewOutside from '../images/bmbrewOutside.jpg';


export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Navigation />
        <div className="home-header" style={homeStyles.header}>
          <img src={bmbrewOutside} alt="bmbrew outside" />
        </div>
        <div className="welcome-text" style={homeStyles.welcomeText}>
          <p>Welcome to Brick &amp; Mortar Brewery --Suffolk's first local brewery. Est 2017.</p>
        </div>
      </div>
    );
  }
}

const homeStyles = {
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