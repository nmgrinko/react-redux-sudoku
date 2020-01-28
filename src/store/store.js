import { createStore } from "redux";
import reducer from './reducers/reducer'
import createConditions from '../utils/createConditions';

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const preloadedState = (() => {
    const idList = [];
    const valueList = [];
    for (let i = 11; i <= 99; i++) {
        if (i % 10 !== 0) {
            idList.push('' + i);
            valueList.push(0);
        }
    }
    const conditions = createConditions(idList);  
    return {iterationLimit: 100000,
            checkField: false,
            clearField: false,
            updateSudoku: false,
            idList: idList,
            valueList: valueList,
            conditions: conditions,
            setField: [],
            errorItem: []
           }
})()

const store = createStore(reducer, preloadedState, enhancer);

export default store


