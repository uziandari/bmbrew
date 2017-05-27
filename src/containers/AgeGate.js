import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';

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
    return this.state.enteredAge > 20;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async (event) => {
    console.log('submitted')
    event.preventDefault();
    this.props.updateAge(this.state.enteredAge);
  }

  render() {
    return (
      <div className="Login">
        <img className="age-logo" src={bmLogo} alt="brick-mortar-logo" />
        <form onSubmit={this.handleSubmit}>
          <div>
            <TextField type="number"
                      id="enteredAge"
                      floatingLabelText="I am"
                      value={this.state.enteredAge}
                      onChange={this.handleChange}
                      floatingLabelStyle={formStyle.inputAge}
                      inputStyle={formStyle.inputAge} />
          </div>
          <RaisedButton
            type="submit"
            primary={true}
            disabled={ ! this.validateForm() }
            label="Years Old"
            style = {(this.state.enteredAge > 20) ? formStyle.ageButton : null} />
        </form>
      </div>
    );
  }
};

const formStyle = {
  ageButton: {
    color: '#fff'
  },
  inputAge: {
    color: '#fff',
    fontSize: "24px"
  }
};