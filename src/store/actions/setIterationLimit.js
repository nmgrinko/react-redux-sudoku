import { SET_ITERATION_LIMIT } from './actionCreators'

const setIterationLimit = (a) => ({
         type: SET_ITERATION_LIMIT, 
         iterationLimit: a
});

export  default setIterationLimit