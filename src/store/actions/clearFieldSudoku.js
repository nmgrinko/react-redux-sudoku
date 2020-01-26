import { clearFieldSudoku_A } from './actionCreators'

const clearFieldSudoku = (a) => ({
         type: clearFieldSudoku_A, 
         clearField: a  
});

export  default clearFieldSudoku