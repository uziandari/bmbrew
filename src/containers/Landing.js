import React, { Component } from 'react';

import '../styles/Landing.css';

export default class Landing extends Component {

  ageChange(age) {
    this.props.onAgeChange(age);
  }

  render() {
    console.log(this.props.age)

    let ageGate = null;
    if (this.props.age < 21 && this.props.age) {
      ageGate = <h3 className="not-old-enough">Don't think you're old enough there buckaroo...</h3>
    } else if (isNaN(parseInt(this.props.age)) && this.props.age) {
      ageGate = <h3 className="no-number">I don't even see how you can be {this.props.age} years old...</h3>
    }

    return (
      <div className="landing-wrapper">
        <div className="logo"></div>
        <div className="age-question">
          <h2>How old are you?</h2>
          <input className="age-input" type="text" onChange={event => this.ageChange(event.target.value)}  placeholder="Age..." />
        </div>
        <div className="age-gate">{ageGate}</div>
      </div>
    );
  }
}