import React from 'react';
import { Route } from 'react-router-dom';

export default (props) => (
  <Route path={props.href} exact children={({ match }) => (
    <div {...props} style={ match ? activeStyles.navItem : null }>{ props.children }</div>
  )}/>
);

const activeStyles = {
  navItem: {
    backgroundColor: '#8eaebd'
  }
};