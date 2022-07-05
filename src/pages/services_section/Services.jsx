import React, {useState} from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const Services = () => {
  const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);

  return (
    <div 
      className='app__section'
      id='services__section'
      style={isDarkTheme ? {backgroundColor: '#041C32'} : {backgroundColor: "#EEEEEE"}}
    >
      Services
    </div>
  )
}

export default Services