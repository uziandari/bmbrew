import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';


import App from './containers/App';
import RequireAuth from './containers/RequireAuth';
import Welcome from './containers/Welcome';

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={App} />
        <Route path="/welcome" component={RequireAuth(Welcome)} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);