import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

import Landing from './Landing';

//styles
import '../styles/App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Landing age={this.props.age.access}
          onAgeChange={this.props.actions.authorizeUser} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    age: state.age
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);