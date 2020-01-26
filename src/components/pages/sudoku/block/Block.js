import React from 'react';
import './Block.css'
import BlockItem from '../block-item/BlockItem'

const Block = (props) => {
  const arrayTagBlockItem = [];
    for(let i = 1; i < 10; i++){
    const id = '' + props.id + i; // const id = '' + i + props.id; меняет метод перебора
    arrayTagBlockItem.push(
      <BlockItem key={id}  id={id}/>
    )
  }
  const blockItem = arrayTagBlockItem.map((item) => item)
  return(
    <div className='block-div' id={props.id}>
      {blockItem}
    </div>
  ) 
}

export default Block



