import { setFieldSudoku_A } from './actionCreators'

const setFieldSudoku = (a) => ({
            type: setFieldSudoku_A, 
            setField: a
        });

export default setFieldSudoku