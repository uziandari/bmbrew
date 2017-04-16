import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './containers/App';
import Welcome from './containers/Welcome';
import Outlaw from './components/Outlaw';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/outlaw" component={Outlaw} />
        <Route path="/welcome" component={Welcome} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);