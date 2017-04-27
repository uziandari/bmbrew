import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ component: C, props: cProps, ...rest }) => (
  <Route {...rest} render={props => (
    cProps.age > 20
      ? <C {...props} {...cProps} />
      : <Redirect to={`/landing?redirect=${props.location.pathname}${props.location.search}`} />
  )}/>
);