import { AGE_VERIFICATION } from '../actions';

const initialState = {
  age: false
};

export default function ageGate(state = initialState, action) {
  switch (action.type) {
    case AGE_VERIFICATION:
      return {
        ...state, age: action.payload
      };
    default:
      return state;
  }
}