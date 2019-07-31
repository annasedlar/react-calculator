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
    case 'CLEAR_CLICKED':
        return update(state, {
          operator: {
            $set: ""
          },
          firstNumberArray: {
            $set: []
          },
          secondNumberArray: {
            $set: []
          },
          total: {
            $set: 0
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
      if (action.payload === "=") {
        let firstNumber = Number(state.firstNumberArray.join(""));
        let secondNumber = Number(state.secondNumberArray.join(""));
        if(state.operator === "+"){
          return update(state, {
            total: {
              $set: firstNumber + secondNumber
            }
          })
        } else if (state.operator === "-") {
          return update(state, {
            total: {
              $set: firstNumber - secondNumber
            }
          })
        } else if (state.operator === "%") {
          return update(state, {
            total: {
              $set: firstNumber / secondNumber
            }
          })
        } else if (state.operator === "x") {
          return update(state, {
            total: {
              $set: firstNumber * secondNumber
            }
          })
        } else {
          return {
            state
          }
        }
      }
      return {
        ...state,
        total: action.payload
      }
    default:
     return state
   }
}

export default reducer;
