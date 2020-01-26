import { getData_A, getValue_A, setFieldSudoku_A, clearFieldSudoku_A } from '../actions/actionCreators';

const reducer = (store, action) => {
  switch (action.type) {
    case getData_A:
      return {
        ...store, 
        valueList: action.valueList,
        checkField: action.checkField,
        errorItem:  action.errorItem
      };
      case getValue_A:
      return {
        ...store, 
        valueList: action.valueList
      };
      case setFieldSudoku_A:
      return {
        ...store, 
        setField: action.setField
      };
      case clearFieldSudoku_A:
      return {
        ...store, 
        clearField: action.clearField
      };
    default: return store
  }
}

export default reducer
