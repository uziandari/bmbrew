import { browserHistory } from 'react-router';

export const AGE_VERIFICATION = 'AGE_VERIFICATION';
export const NOT_OLD_ENOUGH = 'NOT_OLD_ENOUGH';
export const CLEAR_AGE = 'CLEAR_AGE';


export function authorizeUser(age) {
  return function(dispatch) {
    if (parseInt(age) > 20 && parseInt(age) < 131) {
      dispatch(verifyAge())
      browserHistory.push('/welcome');
    } else {
      dispatch(notOld(age));
      }
    }
}

export function clearAge() {
  return {
    type: CLEAR_AGE
  }
}
  
export function verifyAge() {
  return {
    type: AGE_VERIFICATION
  }
}

export function notOld(age) {
  return {
    type: NOT_OLD_ENOUGH,
    payload: age
  }
}

