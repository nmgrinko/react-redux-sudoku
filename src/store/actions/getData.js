import { getData_A } from './actionCreators'

const getData = (a, b, c) => ({
         type: getData_A, 
         valueList: a,
         checkField: b,
         errorItem: c   
});

export  default getData
