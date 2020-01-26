import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderReadme.css';
import loadField from './images/imgField.svg';
import { connect } from 'react-redux';


const SliderReadme = ({setField}) => {
  let initialSlide = 0;
  if (setField.length > 0) {
    initialSlide = setField.length;
  }
  const rew = () => {
    if (setField.length > 0) {
      return setField.map((item, index) => {
         return <div id={index + 100} key={index + 100}>
                  <div id={index + 200} key={index + 200}>
                    <img src={loadField} alt="loadField"/>
                  </div>
                </div>})          
    } else {return null}
  }
  useEffect(()=>{
      if (setField.length > 0) {
        setField.forEach((elem, index) => {
            document.getElementById(index + 200).replaceWith(elem);
        });   
      }
  })
  const settings = {
    dots: false,
    focusOnSelect: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: initialSlide
  };
  return(
    <div>
       <Slider {...settings}>
            {rew()}
            <div className='info-readme-div'>
              <h5>Information</h5>
              <p style={{fontSize: '15px'}} className="text-justify"> 
                &nbsp; French newspapers featured variations of 
                the <b>Sudoku</b> puzzles in the 19th century, 
                and the puzzle has appeared since 1979 in
                puzzle books under the name Number Place. 
                However, the modern <b>Sudoku</b> only began to gain 
                widespread popularity in 1986 when it was published 
                by the Japanese puzzle company Nikoli under the name 
                Sudoku, meaning "single number". It first appeared 
                in a U.S. newspaper, and then The Times (London), 
                in 2004, thanks to the efforts of <em>Wayne Gould,  who 
                devised a computer program to rapidly produce unique puzzles.</em>
                <br/>
                &nbsp; This program solves and saves what Wayne Gould has done.
              </p> 
            </div>
      </Slider>
      { React.createElement('div', null)}
</div>
  )
}

const mapStateToProps = state => ({setField: state.setField})

export default connect(mapStateToProps, null)(SliderReadme)