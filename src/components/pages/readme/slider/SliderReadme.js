import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderReadme.css';
import loadField from './images/imgField.svg';
import { connect } from 'react-redux';
import setIterationLimit from '../../../../store/actions/setIterationLimit';

const SliderReadme = (props) => {
  const {setField, 
         iterationLimit, 
         setIterationLimit
  } = props;
  

  let initialSlide = 0;
  if (setField.length > 0) {
    initialSlide = setField.length;
  }
  const rew = () => {
    if (setField.length > 0) {
      return setField.map((item, index) => {
         return   <img src={loadField} alt="loadField" id={index + 100} key={index + 100}/>
                  
                })          
    } else {return null}
  }
  useEffect(()=>{
      if (setField.length > 0) {
        setField.forEach((elem, index) => {
            document.getElementById(index + 100).replaceWith(elem);
        });   
      }
  })
  const getLimit = (event) => {
    const newLimit = +event.target.value;
    setIterationLimit(newLimit);
  }
  const setLimit = <input type='number' 
                          value={iterationLimit} 
                          onChange={getLimit}           
                          autoComplete='off'
                          min='1'
                          max='100'
                          title=''
                          className='limit'
                          />;
  const settings = {
    dots: false,
    focusOnSelect: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: initialSlide
  };
  return(
    <Slider {...settings}>
      {rew()}
      <div className='info-readme-div'>
        <h5>Information</h5>
        <p className="text-justify"> 
          &nbsp; Number puzzles appeared in newspapers in the 
          late 19th century, when French puzzle setters began 
          experimenting with removing numbers from magic squares.
          However, the modern Sudoku only began to gain 
          widespread popularity in 1986 when it was published 
          by the Japanese puzzle company Nikoli under the name 
          <b> Sudoku</b>, meaning "single number". It first appeared 
          in a U.S. newspaper, and then The Times (London), 
          in 2004, thanks to the efforts of <em>Wayne Gould</em>,  who 
          devised a computer program to rapidly produce unique puzzles.
          <br/>
          &nbsp; This program solves and saves what Wayne Gould has done.
        </p>
        <h5>The program has a limitation:</h5>
        <p style={{fontSize: '15px'}} className="text-justify">
          &nbsp;The limit of iterations is {setLimit} to save you time.
        </p>
      </div>
    </Slider>
  )
}

const mapStateToProps = state => {
  return {
  setField: state.setField,
  iterationLimit: state.iterationLimit
  }
}

const mapDispatchToProps = { setIterationLimit: setIterationLimit }

export default connect(mapStateToProps, mapDispatchToProps)(SliderReadme)