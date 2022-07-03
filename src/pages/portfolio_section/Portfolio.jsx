import React, {useState} from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const Portfolio = () => {
  const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);
  
  return (
    <div 
      className='app__section'
      id='portfolio__section'
    >
      Portfolio
    </div>
  )
}

export default Portfolio