import React, { Component } from 'react';

import Navigation from './Navigation';

import '../styles/home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Navigation />
        <div className="lander">
          <h1>Home</h1>
          <p>landing page</p>
        </div>
      </div>
    );
  }
}
