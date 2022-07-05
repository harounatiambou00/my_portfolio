import React, {useState} from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const Skills = () => {
  const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);

  return (
    <div 
      className='app__section'
      id='skills__section'
      style={isDarkTheme ? {backgroundColor: '#041C32'} : {backgroundColor: "#EEEEEE"}}
    >
      Skills
    </div>
  )
}

export default Skills