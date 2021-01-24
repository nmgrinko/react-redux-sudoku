import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import './Readme.css';
import FieldReadme from './field-readme/FieldReadme';
import setFieldSudoku from '../../../store/actions/setFieldSudoku';

const Readme = (props) => {
  const nameHeader = props.setField.length === 0 ? 'README' : 'SHOW';
  const nameBtnReadme = props.setField.length === 0 ? 'README' : 'CLEAR';
  const clearSlide = () => {props.setFieldSudoku([])}
  return (
    <div className="page-readme">
      <div className="readme-heder">
        <h1>
          {nameHeader}
        </h1>
      </div>
      <FieldReadme/>
      <div>
          <button type="button" 
                  className="btn btn-outline-secondary btn-style"
                  onClick={clearSlide}>
            {nameBtnReadme}
          </button>
        <NavLink to='/'>
          <button className="btn btn-outline-success btn-style">
            SUDOKU
          </button>
        </NavLink>
        <NavLink to='/contact'>
          <button type="button" 
                  className="btn btn-outline-secondary btn-style">
            CONTACT
          </button>
        </NavLink>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    setField: state.setField   
  }
}

const mapDispatchToProps = { setFieldSudoku: setFieldSudoku }

export default connect(mapStateToProps, mapDispatchToProps)(Readme);





