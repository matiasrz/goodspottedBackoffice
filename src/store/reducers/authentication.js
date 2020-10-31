import * as types from 'store/actionTypes/authentication';

const initialState = {
  loggedIn: false,
  user: {},
  token: undefined,
  error: undefined
};

const authenticationReducer = (state = initialState, action) => {
  const { type, payload } = action;
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

export default authenticationReducer;
export { initialState };