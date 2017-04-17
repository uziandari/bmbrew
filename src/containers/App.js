import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import { withRouter } from 'react-router-dom';

import Landing from './Landing';

//styles
import '../styles/App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Landing />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.authenticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));