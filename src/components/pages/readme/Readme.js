import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import './Readme.css';
import FieldReadme from './field-readme/FieldReadme';


const Readme = (props) => {
  const nameBtnReadme = props.setField.length === 0 ? 'README' : 'SHOW';
  return (
    <div className="pages page-readme">
      <div className="readme-heder">
        <h1>
          {nameBtnReadme}
        </h1>
      </div>
      <FieldReadme/>
      <div>
          <button type="button" 
                  className="btn btn-outline-secondary btn-style">
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

export default connect(mapStateToProps, null)(Readme);





