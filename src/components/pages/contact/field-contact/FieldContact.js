import React from 'react';
import './FieldContact.css';
import viber from '../images/viber.svg';
import telegram from '../images/telegram.svg';
import github from '../images/github.svg';
import myLogo from '../images/myLogo.svg';


const FieldContact = () => {
  return(
    <div className='field-contact-div'>
      <img src={myLogo} className="myLogo" alt="logo" />
      <h3 className="myName">Nikolay Grinko</h3>
      <div className="btn-contact">
      <a href="viber://add?number=375297191896">
        <img src={viber} className="btn-viber" alt="viber"/>
      </a>
      <a href="https://t.me/Nick_Grinko">
        <img src={telegram} className="btn-telegram" alt="telegram" />
      </a>
      <a href="https://github.com/nmgrinko">
        <img src={github} className="btn-github" alt="github" />
      </a>
      </div>
    </div>
  )
}

export default FieldContact


