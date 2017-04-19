import { combineReducers } from 'redux';
import AgeReducer from './age';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  age: AgeReducer,
  routing: routerReducer
});

export default rootReducer;