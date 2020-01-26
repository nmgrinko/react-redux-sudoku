import React, { useState } from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import html2canvas from 'html2canvas';
import './Sudoku.css';
import FieldSudoku from './field-sudoku/FieldSudoku';
import createAnswer from '../../../utils/createAnswer';
import getValue from '../../../store/actions/getValue';
import setFieldSudoku from '../../../store/actions/setFieldSudoku';
import clearFieldSudoku from '../../../store/actions/clearFieldSudoku';


const Sudoku = (props) => {
  const {valueList,
         idList,
         conditions,
         checkField,
         clearField,
         setField,
         getValue,
         setFieldSudoku,
         clearFieldSudoku,
         updateSudoku
        } = props;
  const nameBtnSudoku = valueList.includes(0) ? 'Get Result' : 'СLEAR';
  const initialState = props.setField.length === 0 ? 'README' : 'SHOW';
  const [state, setState] = useState(initialState);
  const fieldWork = () => {
    if (!valueList.every(elem => elem === 0)) {
      if (checkField){
        const newValueList = createAnswer(idList, valueList, conditions);
        getValue(newValueList);
      } 
    }            
  } 
  const sat_Field = () => {
    html2canvas(document.querySelector("#fieldSudoku")).then(canvas => {
      const listCanvas = setField.concat();
      listCanvas.push(canvas);
      setFieldSudoku(listCanvas);
      setState('SHOW');
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
    document.getElementById('start').classList.remove('spinner-border');
    document.getElementById('stop').innerText = 'O';
  }
  const loading = () => {
    document.getElementById('start').classList.add('spinner-border');
    document.getElementById('stop').innerText = '';
  }
  const name =  <span className="loading">
                  <div className="loadingRol text-success" role="status"
                    id='start'>
                  </div>
                  <h1 id='stop'>O</h1>
                </span>
  return (
    <div className="pages">
      <div className="sudoku-heder">
        <h1 className='title'>SUD</h1>{name}<h1 className='title'>KU</h1>
      </div>
      <FieldSudoku/>
      <div>
        <NavLink to='/readme'>
          <button type="button" 
                  className="btn btn-outline-secondary btn-style"        
          >
           {state}
          </button>
        </NavLink>
          <button className="btn btn-outline-success btn-style"
                    id='get'
                    onMouseDown={loading}
                    onClick={onClick}
                    update={'' + updateSudoku}
          > 
          {nameBtnSudoku}
          </button>
        <NavLink to='/contact'>
          <button type="button" 
                  className="btn btn-outline-secondary btn-style"  
          >
            CONTACT
          </button>
        </NavLink>
        </div>
          <button type="button" 
                  className="btn btn-outline-secondary btn-style"
                  onClick={sat_Field}
          >
            SAVE
          </button>
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
    updateSudoku: state.updateSudoku   
  }
}
const mapDispatchToProps = {
  getValue: getValue,
  setFieldSudoku: setFieldSudoku,
  clearFieldSudoku: clearFieldSudoku
}

export default connect(mapStateToProps, mapDispatchToProps)(Sudoku)


