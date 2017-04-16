import { combineReducers } from 'redux';
import AgeReducer from './age';

const rootReducer = combineReducers({
  age: AgeReducer
});

export default rootReducer;