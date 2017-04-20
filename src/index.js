import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';


import App from './containers/App';
import Landing from './containers/Landing';
import RequireAuth from './containers/RequireAuth';
import Welcome from './components/Welcome';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />
        <Route path="/welcome" component={RequireAuth(Welcome)} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);