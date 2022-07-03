import React, {useState} from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const Portfolio = () => {
  const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);
  
  return (
    <div 
      className='app__section'
      id='portfolio__section'
      style={isDarkTheme ? {backgroundColor: '#041C32'} : {backgroundColor: "white"}}
    >
      Portfolio
    </div>
  )
}

export default Portfolio