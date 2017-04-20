import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

import Landing from './Landing';

//styles
import '../styles/App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}
  