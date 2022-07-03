import React, {useState} from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const AboutMe = () => {
  const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);

  return (
    <div 
      className='app__section'
      id='about__me__section'
      style={isDarkTheme ? {backgroundColor: '#041C32'} : {backgroundColor: "white"}}
    >
      AboutMe
    </div>
  )
}

export default AboutMe