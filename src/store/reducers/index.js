import { combineReducers } from 'redux';
import prospectReducer from './prospect';
import authenticationReducer from './authentication';

export default combineReducers({
    prospect: prospectReducer,
    authentication: authenticationReducer
});