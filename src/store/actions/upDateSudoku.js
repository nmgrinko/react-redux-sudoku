import { UPDATE_SUDOKU } from './actionCreators'

const upDateSudoku = (a) => ({
         type: UPDATE_SUDOKU, 
         updateSudoku: a
});

export  default upDateSudoku