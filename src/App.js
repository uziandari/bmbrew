import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


import Routes from './Routes';

import './styles/app.css';

injectTapEventPlugin();


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: null
    }
  }
  

  updateAge = (age) => {
    console.log(age);
    this.setState({
      age: age
    });
  }

  handleNavLink = (event) => {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute('href'));
  }

  render() {
    const childProps = {
      age: this.state.age,
      updateAge: this.updateAge
    };

    return (
      <MuiThemeProvider>
        <div className="App-container">
          <Routes childProps={childProps} />
        </div>
      </MuiThemeProvider>
      );
    }
  }

  export default withRouter(App);
