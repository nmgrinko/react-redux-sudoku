const fieldСheck = (idList, valueList, conditions) => {
  let sameValues = [];
  for (let i = 0; i < idList.length; i++) {
    const id = idList[i];
    const value = valueList[i];
    if (value !== 0) {
      for (let j = 0; j < conditions.length; j++) {
        const condition = conditions[j];
        const indexItemCondition = condition.indexOf(id);
        if (indexItemCondition !== -1) {
          for (let l = 0; l < condition.length; l++) {
            const idItemCondition = condition[l];
            if (id !== idItemCondition) {
              const indexIdItemCondition = idList.indexOf(idItemCondition);
              const valueItemCondition = valueList[indexIdItemCondition];
              if (value === valueItemCondition) {
                sameValues.push(id);
              } 
            }
          }
        }
      }
    }
  }
  if(sameValues.length === 0) { 
    return [true, sameValues]
  } else { 
      return [false, sameValues] 
    }
}

export default fieldСheck

