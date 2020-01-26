import React from 'react';
import './FieldSudoku.css';
import Block from '../block/Block';


const FieldSudoku = () => {
  const arrayTagBlock = [];
  for(let i = 1; i < 10; i++){
    arrayTagBlock.push(
      <Block key={i}  id={i}/>
    );
  }
  const block = arrayTagBlock.map((item) => item);
  return(
    <div className='field-sudoku-div' id='fieldSudoku'>
      {block}
    </div>
  )
}

export default FieldSudoku

