import React, { Component } from 'react';

import Navigation from './Navigation';

//import '../styles/home.css';  --change to beers

export default class OurBeers extends Component {
  render() {
    return (
      <div className="Home">
        <Navigation />
        <div className="lander">
          <h1>Beers</h1>
          <p>beers page</p>
        </div>
      </div>
    );
  }
}
