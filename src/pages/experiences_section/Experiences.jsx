import React, {useState} from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const Experiences = () => {
  const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);

  return (
    <div 
      className='app__section'
      id='experiences__section'
      style={isDarkTheme ? {backgroundColor: '#041C32'} : {backgroundColor: "#EEEEEE"}}
    >
      Experiences
    </div>
  )
}

export default Experiences