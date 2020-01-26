import { GET_DATA } from './actionCreators'

const getData = (a, b, c) => ({
         type: GET_DATA, 
         valueList: a,
         checkField: b,
         errorItem: c   
});

export  default getData
