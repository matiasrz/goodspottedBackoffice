import * as types from 'store/actionTypes/authentication';

const initialState = {
  loggedIn: false,
  user: {},
  token: undefined,
  error: undefined
};

const authenticationReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const _now = getNowUnixTime()
  switch (type) {
    case types.AUTHENTICATION_SUCCEEDED:
      const { user, token } = payload;
      return { ...state, user: user, loggedIn: true, token }
    case types.JWT_REVOKED_SUCCEEDED:
      return initialState;
    default:
      return state;
  }
}

const getJWTExpiration = (token) => {
  const payload = token.split('.')[1];
  const payloadJSON = JSON.parse(atob(payload));
  // var date = new Date(0)
  // date.setUTCSeconds(payloadJSON.exp)
  return payloadJSON.exp;
}

const getNowUnixTime = () => {
  var now = new Date(0)
  return Math.random(now.getTime() / 1000)
}

export default authenticationReducer;
export { initialState };