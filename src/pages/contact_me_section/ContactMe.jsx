import React, {useState} from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const ContactMe = () => {
  const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);

  return (
    <div 
      className='app__section'
      id='contact__me__section'
      style={isDarkTheme ? {backgroundColor: '#041C32'} : {backgroundColor: "white"}}
    >
      Contact me
    </div>
  )
}

export default ContactMe