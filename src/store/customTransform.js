import { createTransform } from 'redux-persist';
import { isJWTValid } from 'helpers/authentication';
import { initialState } from './reducers/authentication';

const chooseState = state => {
  const { token } = state;
  var newState = { ...initialState }
  var isValid = false;

  if(typeof token === 'string')
    isValid = isJWTValid(token)
  
  if(isValid)
    newState = { ...state }

  return newState;
}

const customTransform = createTransform(
  // transform state on its way to being serialized and persisted.
  (inboundState) => chooseState(inboundState),
  // transform state being rehydrated
  (outboundState) => chooseState(outboundState),
);

export default customTransform;
