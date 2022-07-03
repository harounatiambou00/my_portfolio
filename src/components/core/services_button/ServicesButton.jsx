import React from 'react';
import './styles.css';
 

import {Button} from '@mui/material';

import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';

const ServicesButton = () => {
  const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);

  return (
    <Button
      variant='outlined'
      color={isDarkTheme? 'secondary' : 'primary'}
      sx={{fontFamily: "'Kanit', sans-serif", letterSpacing: 1}}
    >
      <a href="#services__section">Services</a>
    </Button>
  )
}

export default ServicesButton