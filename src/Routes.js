import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import NotFound from './containers/NotFound';
import AgeGate from './containers/AgeGate';
import Beers from './containers/Beers';

import AppliedRoute from './components/AppliedRoute';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';


export default ({ childProps }) => (
  <Switch>
    <AuthenticatedRoute path="/" exact component={Home} props={childProps} />
    <AuthenticatedRoute path="/beers" exact component={Beers} props={childProps} />
    <UnauthenticatedRoute path="/landing" exact component={AgeGate} props={childProps} />

    {/*404 catch*/}
    <Route component={NotFound} />
  </Switch>
);