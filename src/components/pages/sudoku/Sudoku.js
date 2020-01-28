import React, { useState } from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import html2canvas from 'html2canvas';
import './Sudoku.css';
import FieldSudoku from './field-sudoku/FieldSudoku';
import createAnswer from '../../../utils/createAnswer';
import diagonalCondition from '../../../utils/addConditions';
import getValue from '../../../store/actions/getValue';
import setFieldSudoku from '../../../store/actions/setFieldSudoku';
import clearFieldSudoku from '../../../store/actions/clearFieldSudoku';
import setOption from '../../../store/actions/setOption';

const Sudoku = (props) => {
  const {valueList,
         idList,
         conditions,
         iterationLimit,
         checkField,
         clearField,
         setField,
         getValue,
         setFieldSudoku,
         clearFieldSudoku,
         updateSudoku,
         setOption
        } = props;
  const nameBtnSudoku = valueList.includes(0) ? 'Get Result' : 'СLEAR';
  const classicOptions = conditions.length > 27 ? "btn btn-outline-secondary btn-style" : "btn btn-outline-success btn-style";
  const diagonOptions = conditions.length > 27 ? "btn btn-outline-success btn-style" : "btn btn-outline-secondary btn-style";
  const initialStateBtnReadme = props.setField.length === 0 ? 'README' : 'SHOW';
  const [stateBtnReadme, setStateBtnReadme] = useState(initialStateBtnReadme);
  const initialStateSpiner = {class: 'loadingRol text-success', text: 'O'}
  const newStateSpiner = {class: 'loadingRol text-success spinner-border', text: ''}
  const [stateSpiner, setStateSpiner] = useState(initialStateSpiner);
  const fieldWork = () => {
    if (!valueList.every(elem => elem === 0)) {
      if (checkField){
        const newValueList = createAnswer(idList, valueList, conditions, iterationLimit);
        getValue(newValueList);
      } 
    }            
  } 
  const sat_Field = () => {
    html2canvas(document.querySelector("#fieldSudoku")).then(canvas => {
      const listCanvas = setField;
      listCanvas.push(canvas);
      setFieldSudoku(listCanvas);
      setStateBtnReadme('SHOW');
    }); 
  }
  const resetValues = () => {
    const newValueList = valueList;
    newValueList.fill(0);
    getValue(newValueList);
    clearFieldSudoku(!clearField);
  }
  const onClick = () => {
    if(valueList.includes(0)){
      fieldWork();
    } else {
      resetValues();
    }
    setStateSpiner(initialStateSpiner)
  }
  const options = () => {
    let newConditions = conditions;
    if (conditions.length === 27) {
      newConditions = newConditions.concat(diagonalCondition);
    } else {
      newConditions = newConditions.slice(0, 27);
    }
    setOption(newConditions);
  }
  const loading = () => {
    setStateSpiner(newStateSpiner)
  }
  const name =  <span className="loading">
                  <div className={stateSpiner.class} role="status"
                    id='start'>
                  </div>
                  <h1 id='stop'>{stateSpiner.text}</h1>
                </span>
  return (
    <div className="pages">
      <div className="sudoku-heder">
        <h1 className='title'>SUD</h1>{name}<h1 className='title'>KU</h1>
      </div>
      <FieldSudoku/>
      <div>
        <div>
          <button type="button" 
                  className={classicOptions}
                  onClick={options}
          >
            сlassic
          </button>       
          <button className="btn btn-outline-success btn-style"
                    id='get'
                    onMouseDown={loading}
                    onClick={onClick}
                    update={'' + updateSudoku}
          > 
          {nameBtnSudoku}
          </button>
          <button type="button" 
                  className={diagonOptions}
                  onClick={options}
          >
            diagonals
          </button>
        </div>
        <div>
          <NavLink to='/readme'>
            <button type="button" 
                    className="btn btn-outline-secondary btn-style"        
            >
            {stateBtnReadme}
            </button>
          </NavLink>
          <button type="button" 
                  className="btn btn-outline-secondary btn-style"
                  onClick={sat_Field}
          >
            SAVE
          </button>
          <NavLink to='/contact'>
            <button type="button" 
                    className="btn btn-outline-secondary btn-style"  
            >
              CONTACT
            </button>
           </NavLink>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    valueList: state.valueList,
    idList: state.idList,
    conditions: state.conditions,
    checkField: state.checkField,
    clearField: state.clearField,
    setField: state.setField,
    updateSudoku: state.updateSudoku,
    iterationLimit: state.iterationLimit   
  }
}
const mapDispatchToProps = {
  getValue: getValue,
  setFieldSudoku: setFieldSudoku,
  clearFieldSudoku: clearFieldSudoku,
  setOption: setOption
}

export default connect(mapStateToProps, mapDispatchToProps)(Sudoku)


