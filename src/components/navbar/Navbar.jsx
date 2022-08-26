import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import {AppBar, Toolbar} from '@mui/material';

import ElevationScroll from './ElevationScroll';
import MenuButton from './menu_button/MenuButton';
import Brand from './brand/Brand';
import ServicesButton from './services_button/ServicesButton';
import Navlinks from './navlinks/Navlinks';
import LanguageSelector from './language-selector/LanguageSelector';

import DarkAndLightButton from './dark_light_modes_button/DarkAndLightButton';

const Navbar = (props) => {
  const {isDarkTheme} = useContext(ThemeContext);
  return (
    //The ElevationScroll component allows us to elevate the appbar when the user is scrolling
    <ElevationScroll {...props}>
      <AppBar
        className='sm:h-30 lg:h-20 bg-light dark:bg-dark'
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
              <LanguageSelector />
          </div>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}

export default Navbar