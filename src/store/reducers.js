import { combineReducers } from 'redux';

const initialState = {
  total: 0
}

const displayTotal = (state = initialState, action) => {
  switch (action.type) {
   case 'DISPLAY_TOTAL':
    return {
      ...state,
      total: action.payload
    }
   default:
    return state
  }
 }

export default combineReducers({
  displayTotal
 });
