import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Welcome extends Component {

  render() {
    return (
      <div>
        <h1>
        Welcome
        </h1>
        <Link to="/ourbeers">Beers</Link>
        <Link to="/upcoming">Events</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    );
  }
}