import { GET_VALUE } from './actionCreators'

const getValue = (a) => ({
         type: GET_VALUE, 
         valueList: a
});

export  default getValue
