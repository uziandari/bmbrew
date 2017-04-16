import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Landing.css';

export default class Landing extends Component {

  onAge(age) {
    this.props.confirmAge(age);
  }

  render() {
    return (
      <div className="landing-wrapper">
        <div className="logo"></div>
        <div className="age-question">
          <h2>How old are you?</h2>
          <Link to="/outlaw">&lt; 21</Link>
          <Link to="/welcome">21 or over</Link>
        </div>
      </div>
    );
  }
}