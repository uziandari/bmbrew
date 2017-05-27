import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import LoaderButton from '../components/LoaderButton';

import '../styles/login.css';
import bmLogo from '../images/bmlogo.png';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enteredAge: '',
    };
  }

  validateForm() {
    return this.state.enteredAge.length > 1;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.updateAge(this.state.enteredAge);
  }

  render() {
    return (
      <div className="Login">
        <img className="age-logo" src={bmLogo} />
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="enteredAge" bsSize="large">
            <ControlLabel className="age-label">I am</ControlLabel>
            <FormControl
              autoFocus
              type="number"
              value={this.state.enteredAge}
              onChange={this.handleChange} />
          </FormGroup>
          <LoaderButton
            block
            bsSize="large"
            disabled={ ! this.validateForm() }
            type="submit"
            text="Years Old"
            loadingText="Okay Then..." />
        </form>
      </div>
    );
  }
};