import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import {AppBar, Toolbar, Grid, IconButton, Tooltip} from '@mui/material';

import ElevationScroll from './ElevationScroll';
import MenuButton from './menu_button/MenuButton';
import Brand from './brand/Brand';
import ServicesButton from './services_button/ServicesButton';
import Navlinks from './navlinks/Navlinks';

import DarkAndLightButton from './dark_light_modes_button/DarkAndLightButton';

const Navbar = (props) => {
  const {isDarkTheme} = useContext(ThemeContext);
  return (
    <ElevationScroll {...props}>
      <AppBar
        sx={isDarkTheme? { backgroundColor: 'primary'} : {backgroundColor: '#EEEEEE'}}
        className='sm:h-30 lg:h-20'
      >
        <Toolbar>
          <div 
            className='flex items-center w-full'
          >
              <div
                className='lg:hidden'
              >
                <MenuButton />
              </div>
              <div
                className='sm:flex-1 lg:flex-none text-center '
              >
                <Brand />
              </div>
              <div
                className='sm:hidden lg:block flex-1 text-center'
              >
                <Navlinks />
              </div>
              <div
                className='sm:hidden lg:block mr-4'
              >
                <ServicesButton />
              </div>
              <DarkAndLightButton />
          </div>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}

export default Navbar