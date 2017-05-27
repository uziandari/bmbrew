import React, { Component } from 'react';

import Navigation from './Navigation';
//import Calendar from 'antd';

export default class Evemts extends Component {
  render() {
    return (
      <div className="events-container">
        <Navigation />
        <div className="lander">
          <h1>Events</h1>
            
        </div>
      </div>
    );
  }
}
