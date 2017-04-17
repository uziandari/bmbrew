import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';
import AuthReducer from './auth';

const rootReducer = combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  routing
});

export default rootReducer;