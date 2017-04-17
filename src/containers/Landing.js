import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as Actions from '../actions';


import '../styles/Landing.css';

const validate = values => {
  const errors = {};

  if (!values.age) {
    errors.incorrectInput = `Hey! You can't be ${values.age} years old.`
  }

  return errors;
}

class Landing extends Component {

  handleFormSubmit = (values) => {
    this.props.verifyAge(values.age);
  };

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <fieldset className={`formgroup ${touched && error ? 'has-error' : ''}`}>
      <div>
        <input {...input} placeholder={label} className="age-form" type={type} />
        {touched && error && <div className="help-block">{error}</div>}
      </div>
    </fieldset>
  );

  renderAuthenticationError() {
    if (this.props.authenticationError) {
      return <div className="alert alert-danger">{ this.props.authenticationError }</div>;
    }
    return <div></div>;
  }

  render() {
    return (
      <div className="landing-wrapper">
        <div className="logo"></div>
        <div className="age-question">
          <h2>How old are you?</h2>
          {this.renderAuthenticationError()}
          <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
            <Field name="age" component={this.renderField} className="form-control" type="text" label="Age..."/>

            <button action="submit" className="btn-login btn-login-large">Let Me In!</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticationError: state.auth.error
  }
}

export default connect(mapStateToProps, Actions)(reduxForm({
  form: 'ageValidation',
  validate
})(Landing));