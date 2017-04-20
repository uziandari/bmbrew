import { AGE_VERIFICATION, NOT_OLD_ENOUGH } from '../actions';

const initialState = {
  authenticated: false
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
    default:
      return state;
  }
}