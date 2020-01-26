import { getValue_A } from './actionCreators'

const getValue = (a) => ({
         type: getValue_A, 
         valueList: a
});

export  default getValue
