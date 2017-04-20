import { AGE_VERIFICATION, NOT_OLD_ENOUGH, CLEAR_AGE } from '../actions';

const initialState = {
  authenticated: false,
  age: null
};

export default function ageGate(state = initialState, action) {
  switch (action.type) {
    case AGE_VERIFICATION:
      return {
        ...state,
        authenticated: true
      };
    case NOT_OLD_ENOUGH:
      return {
        ...state,
        authenticated: false,
        age: action.payload
      };
    case CLEAR_AGE:
      return {
        ...state,
        age: null
      };
    default:
      return state;
  }
}