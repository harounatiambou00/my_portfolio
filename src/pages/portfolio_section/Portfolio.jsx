import React, {useState} from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const Portfolio = () => {
  const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);
  
  return (
    <div 
      className='app__section sm:h-auto lg:h-screen items-center justify-center sm:pt-48 lg:pt-4'
      id='portfolio__section'
      style={isDarkTheme ? {backgroundColor: '#041C32'} : {backgroundColor: "#EEEEEE"}}
    >
      Portfolio
    </div>
  )
}

export default Portfolio