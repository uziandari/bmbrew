import React, { Component } from 'react';

//import redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import '../styles/Landing.css';

class Landing extends Component {

  componentWillUnmount() {
    this.props.actions.clearAge();
  }

  ageChange(age) {
    this.props.actions.authorizeUser(age);
  }

  render() {
    return (
      <div className="landing-wrapper">
        <div className="logo"></div>
        <div className="age-question">
          <h2>How old are you?</h2>
          <input className="age-input" type="text" onChange={event => this.ageChange(event.target.value)}  placeholder="Age..." />
        </div>
        {this.props.age < 21 && this.props.age &&
          <h2 className="age-gate">Not quite old enough there buckaroo...</h2>
        }
        {
          (isNaN(parseInt(this.props.age)) && this.props.age) &&
          <h2 className="no-number">I don't even see how you can be <strong>{this.props.age}</strong> years old...</h2>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    age: state.auth.age
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Landing);