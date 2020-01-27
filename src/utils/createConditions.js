
const createConditions = (idList) => {
  const blockLine = () => {
    let size = 9;
    let blockLine = [];
    for (let i = 0; i < Math.ceil(idList.length/size); i++) {
      blockLine[i] = idList.slice((i*size), (i*size)+size);
    }
    return blockLine
  }
  const block = blockLine();
  
  const verticalLine = () => { 
    let size = 3; 
    let dividedIdList = [];
    for (let i = 0; i < Math.ceil(idList.length/size); i++){
      dividedIdList[i] = idList.slice((i*size), (i*size) + size);
    }
    
    let verticalLine = [];
    for (let j = 0; j < 9; j++){
      if(j >= 0 && j <= 2){
          verticalLine[j] = [...dividedIdList[j], ...dividedIdList[j+3], ...dividedIdList[j+6]];
      }
      if(j >= 3 && j <= 5){
          verticalLine[j] = [...dividedIdList[j+6], ...dividedIdList[j+9], ...dividedIdList[j+12]];
      }
      if(j >= 6 && j <= 8){
          verticalLine[j] = [...dividedIdList[j+12], ...dividedIdList[j+15], ...dividedIdList[j+18]];
      }
    }
    return verticalLine
  }
  const vertical = verticalLine()

  const horizontalLine = () => {
  const horizontalLine = [];
    for (let i = 0; i < vertical.length; i++){
      const destructionVerticalLine = [];
      for (let j = 0; j < vertical.length; j++){
        destructionVerticalLine.push(vertical[j][i]);
      }
      horizontalLine[i] = destructionVerticalLine;
    }
    return horizontalLine
  }
  const horizontal = horizontalLine();
 
  let dataLine = [];
  dataLine = dataLine.concat(block);
  dataLine = dataLine.concat(vertical);
  dataLine = dataLine.concat(horizontal);
  return  dataLine;
}

export default createConditions