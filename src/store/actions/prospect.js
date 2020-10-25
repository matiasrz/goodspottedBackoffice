import * as types from 'store/actionTypes/prospect';
import { buildAuthInstance } from 'services/api';

const actionSuccess = (type, payload) => ({
  type: type,
  payload
});

const actionFailure = (type, payload) => ({
  type: type,
  payload
});

export const getProspects = () => {  
  return (dispatch, getState) => {
    const { authentication: { token } } = getState()
    const authInstance = buildAuthInstance(token)
    authInstance.get('/product_prospects')
      .then(function (response) {
        dispatch(actionSuccess(types.PROSPECT_LIST , response));
      })
      .catch(function (error) {
        dispatch(actionFailure(types.ACTION_FAILURE , error));
      });
  };
}