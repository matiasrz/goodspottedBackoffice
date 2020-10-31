import * as types from 'store/actionTypes/prospect';

const initialState = {
  loading: false,
  list: [],
  count: 0,
  error: null
};

const prospectReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.PROSPECT_LIST:
      // console.log("PROSPECT_LIST: ", payload)
      return { ...state, ...payload }
    default:
      return state
  }
}

export default prospectReducer;