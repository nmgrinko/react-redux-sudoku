import { GET_DATA, GET_VALUE, SET_FIELD_SUDOKU, CLEAR_FIELD_SUDOKU, UPDATE_SUDOKU } from '../actions/actionCreators';

const reducer = (store, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...store, 
        valueList: action.valueList,
        checkField: action.checkField,
        errorItem:  action.errorItem
      };
      case GET_VALUE:
      return {
        ...store, 
        valueList: action.valueList
      };
      case SET_FIELD_SUDOKU:
      return {
        ...store, 
        setField: action.setField
      };
      case CLEAR_FIELD_SUDOKU:
      return {
        ...store, 
        clearField: action.clearField
      };
      case UPDATE_SUDOKU:
      return {
        ...store, 
        updateSudoku: action.updateSudoku
      };
    default: return store
  }
}

export default reducer
