import React from 'react';

import { BiMenuAltLeft } from 'react-icons/bi';
import { BsSun, BsFillMoonFill } from 'react-icons/bs';

import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';

import {Tooltip, IconButton} from '@mui/material';
import Zoom from '@mui/material/Zoom';


const DarkAndLightButton = () => {
  const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);

  return (
    <Tooltip
        arrow
        placement='left'
        title={isDarkTheme? 'Turn on the light' : 'Turn off the light'}
        TransitionComponent={Zoom}
        TransitionProps={{ timeout: 600 }}
    >
        <IconButton
            color={isDarkTheme? 'warning' : 'primary'}
            onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
            {isDarkTheme? <BsSun /> : <BsFillMoonFill />}
        </IconButton>
    </Tooltip>
  )
}

export default DarkAndLightButton