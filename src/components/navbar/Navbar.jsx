import React from 'react';
import {AppBar, Toolbar, Grid, IconButton, Tooltip} from '@mui/material';
import { styled } from '@mui/material/styles';

import ElevationScroll from './ElevationScroll';

import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import DarkAndLightButton from './dark_light_modes_button/DarkAndLightButton';

const Navbar = (props) => {
  const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);

  return (
    <ElevationScroll {...props}>
      <AppBar sx={isDarkTheme? {backgroundColor: "primary"} : {backgroundColor: "white"}}>
        <Toolbar>
          <Grid container spacing={2}>
            <Grid
              item
              xs={2}
            >
              <DarkAndLightButton />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}

export default Navbar