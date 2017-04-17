//user sign in/out
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_USER = 'AUTH_USER';


export function verifyAge(age) {
  console.log(age)
  return dispatch => {
    if (age > 20) {
      dispatch(authUser())
    } else {
      //console.log("not happening")
    }
  }
}

export function authUser() {
  return {
    type: AUTH_USER,
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
//end user auth