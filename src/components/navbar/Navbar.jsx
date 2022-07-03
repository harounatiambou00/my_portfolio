import React from 'react';
import {AppBar, Toolbar, Grid, IconButton, Tooltip} from '@mui/material';
import { styled } from '@mui/material/styles';

import ElevationScroll from './ElevationScroll';


import DarkAndLightButton from './dark_light_modes_button/DarkAndLightButton';

const Navbar = (props) => {

  return (
    <ElevationScroll {...props}>
      <AppBar>
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