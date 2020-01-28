import fieldСheck from './fieldСheck'

const createAnswer = (idList, valueList, conditions, iterationLimit) => { 

   let valueListResult = valueList.concat();
   let idListUnoccupied = [];
   for (let i = 0; i < valueListResult.length; i++) {
      if (valueListResult[i] === 0) {
         idListUnoccupied.push(idList[i])
      }
   }
   let stopIteration = 0;
   for(let i = 0; i < idListUnoccupied.length; i++) {
      if(stopIteration > iterationLimit) {
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
            if(i === 0) { 
               const valueListError = valueListResult.map((item) => item === 0 ? 'X': item);
               for(let l = 0; l < 9; l++) {
                  const errorText = 'NOTRESULT';
                  const id = l + 36;
                  valueListError[id] = errorText.charAt(l);
               }
               return valueListError 
            };
            i = i - 2;
         }    
      }
   }
   console.log('All Iterations: ', stopIteration);
   return valueListResult
}

export default createAnswer