import fieldСheck from './fieldСheck'

const createAnswer = (idList, valueList, conditions) => { 
   
   const ITERATION_LIMIT = 400000;

   let valueListResult = valueList.concat();
   let idListUnoccupied = [];
   for (let i = 0; i < valueListResult.length; i++) {
      if (valueListResult[i] === 0) {
         idListUnoccupied.push(idList[i])
      }
   }
   let stopIteration = 0;
   for(let i = 0; i < idListUnoccupied.length; i++) {
      if(stopIteration > ITERATION_LIMIT) {
         return valueListResult
      }
      const id = idListUnoccupied[i];
      const indexId = idList.indexOf(id);
      const value = valueListResult[indexId];
      for(let j = value; j <= 9; j++) {
         stopIteration = ++stopIteration;
         if(j !== 9) {
            valueListResult[indexId] = j + 1;
            const resultFieldСheck = fieldСheck(idList, valueListResult, conditions);
            if(resultFieldСheck[0]) { break };
         } else {
            valueListResult[indexId] = 0;
            i = i - 2;
         }    
      }
   }
   console.log('All Iterations: ', stopIteration);
   return valueListResult
}

export default createAnswer