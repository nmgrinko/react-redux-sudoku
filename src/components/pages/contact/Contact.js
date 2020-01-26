import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import './Contact.css';
import FieldContact from './field-contact/FieldContact';


const Contact = (props) => {
  const nameBtnReadme = props.setField.length === 0 ? 'README' : 'SHOW';
  return (
    <div className="pages page-contact">
      <div className="contact-heder">
        <h1>
          CONTACT
        </h1>
      </div>
      <FieldContact />
      <div className="contact-btn"> 
        <NavLink to='/readme'>
          <button type="button" 
                  className="btn btn-outline-secondary btn-style">
            {nameBtnReadme}
          </button>
        </NavLink>
        <NavLink to='/'>
          <button className="btn btn-outline-success btn-style">
            SUDOKU
          </button>
        </NavLink>
          <button type="button" 
                  className="btn btn-outline-secondary btn-style">
            CONTACT
          </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    setField: state.setField   
  }
}

export default connect(mapStateToProps, null)(Contact);
