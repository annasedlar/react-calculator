// import { combineReducers } from 'redux';
import update from 'immutability-helper';

const initialState = {
  firstNumberArray: [],
  secondNumberArray: [],
  operator: "",
  total: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLICK_NUMBER':
      if (state.operator === ""){
        return update(state, {
          firstNumberArray: {
            $push: [action.payload]
          }
        })
      } else {
        return update(state, {
          secondNumberArray: {
            $push: [action.payload]
          }
        })
      }
    case 'CLICK_OPERATOR':
      return update(state, {
        operator: {
          $set: action.payload
        }
    })
    case 'EQUALS':
      return update(state, {
        operator: {
          $set: ""
        },
        firstNumberArray: {
          $set: []
        },
        secondNumberArray: {
          $set: []
        }
    })
    case 'DISPLAY_TOTAL':
      return {
        ...state,
        total: action.payload
      }
    default:
     return state
   }
}

export default reducer;
