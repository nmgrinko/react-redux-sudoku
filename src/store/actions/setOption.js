import { SET_OPTION } from './actionCreators'

const setOption = (a) => ({
            type: SET_OPTION, 
            conditions: a
        });

export default setOption