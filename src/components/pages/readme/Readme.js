import React from 'react';
import {NavLink} from 'react-router-dom';

import './Readme.css';
import FieldReadme from './field-readme/FieldReadme';

const Readme = () => {
  return (
    <div className="pages page-readme">
      <div className="readme-heder">
        <h1>
          README
        </h1>
      </div>
      <FieldReadme/>
      <div>
          <button type="button" 
                  className="btn btn-outline-secondary btn-style">
            README
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

export default Readme;