import { SET_FIELD_SUDOKU } from './actionCreators'

const setFieldSudoku = (a) => ({
            type: SET_FIELD_SUDOKU, 
            setField: a
        });

export default setFieldSudoku