import * as types from 'store/actionTypes/prospect';

const initialState = {
  loading: false,
  list: [],
  error: null
};

const prospectReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PROSPECT_LIST:
      console.log("PROSPECT_LIST: ", action.data)
      return state
    default:
      return state
  }
}

export default prospectReducer;