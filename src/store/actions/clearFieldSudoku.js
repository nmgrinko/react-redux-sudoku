import { CLEAR_FIELD_SUDOKU } from './actionCreators'

const clearFieldSudoku = (a) => ({
         type: CLEAR_FIELD_SUDOKU, 
         clearField: a  
});

export  default clearFieldSudoku