import React from 'react';
import {NavLink} from 'react-router-dom';
import './Contact.css';

import FieldContact from './field-contact/FieldContact';


const Contact = () => {
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
            README
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

export default Contact;


