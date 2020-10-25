import * as types from 'store/actionTypes/authentication';
import { unauthInstance, buildAuthInstance } from 'services/api';

const actionSuccess = (type, payload) => ({
  type: type,
  payload
});

const actionFailure = (type, payload) => ({
  type: type,
  payload
});

export const authenticate = userData => {
  return (dispatch) => {
    unauthInstance.post('/login', { user: userData })
      .then((response) => {
        const token = response.headers.authorization.split('Bearer ')[1]
        const newData = { user: response.data, token }
        dispatch(actionSuccess(types.AUTHENTICATION_SUCCEEDED , newData));
      })
      .catch((error) => {
        dispatch(actionFailure(types.AUTHENTICATION_FAILED , error));
      });
  };
}

export const logout = () => {
  return (dispatch, getState) => {
    const { authentication: { token } } = getState();
    const authInstance = buildAuthInstance(token);
    authInstance.delete('/logout')
      .then(() => {
        dispatch(actionSuccess(types.JWT_REVOKED_SUCCEEDED));
      })
      .catch((error) => {
        dispatch(actionFailure(types.JWT_REVOKED_FAILED , error));
      });
  };
}