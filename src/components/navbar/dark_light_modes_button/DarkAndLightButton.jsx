import React from 'react';

import { BsSun, BsFillMoonFill } from 'react-icons/bs';

import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';

import {Tooltip, IconButton} from '@mui/material';
import Zoom from '@mui/material/Zoom';

import { motion } from 'framer-motion';


const DarkAndLightButton = () => {
  const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);

  return (
    <motion.div
      initial={{y: -100}}
      animate={{y: 0}}
      transition={{duration: 1.75}}
      className='bg-gray-200 dark:bg-darkElevation rounded-lg'
    >
      <Tooltip
          arrow
          placement='bottom'
          title={isDarkTheme? 'Turn on the light' : 'Turn off the light'}
          TransitionComponent={Zoom}
          TransitionProps={{ timeout: 600 }}
      >
        <IconButton
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          className={isDarkTheme? 'text-warning' : 'text-dark'}
          color='light'
        >
          {
            isDarkTheme? <BsSun /> : <BsFillMoonFill />
          }
        </IconButton>
      </Tooltip>
    </motion.div>
  )
}

export default DarkAndLightButton