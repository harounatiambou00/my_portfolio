import React from 'react';
import {AppBar, Toolbar, IconButton, Tooltip} from '@mui/material';

import {BiMenuAltLeft} from 'react-icons/bi';

import ElevationScroll from './ElevationScroll';

import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import DarkAndLightButton from './dark_light_modes_button/DarkAndLightButton';
import { ServicesButton } from '..';

const Navbar = (props) => {
  const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);

  return (
    <ElevationScroll {...props}>
      <AppBar sx={isDarkTheme? {backgroundColor: "primary"} : {backgroundColor: "white"}}>
        <Toolbar>
          <div
            className='bg-teal-50'
          >
            <div
              className='underline'
            >
              Tiamtech
            </div>
            <div
              
            >
              <DarkAndLightButton />
            </div>
            <div
              
            >
              <ServicesButton />
              <DarkAndLightButton />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}

export default Navbar