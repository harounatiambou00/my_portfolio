import React from 'react';

import { BiMenuAltLeft } from 'react-icons/bi';
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
    >
      <Tooltip
          arrow
          placement='bottom'
          title={isDarkTheme? 'Turn on the light' : 'Turn off the light'}
          TransitionComponent={Zoom}
          TransitionProps={{ timeout: 600 }}
      >
          <div
            className={isDarkTheme? 'w-16 h-6 bg-black rounded-full flex justify-between items-center cursor-pointer' : 'w-16 h-6 bg-white rounded-full flex justify-between items-center cursor-pointer'}
            onClick={() => setIsDarkTheme(!isDarkTheme)}
          >
            <IconButton
              size='small'
              color={isDarkTheme? 'black' : 'warning'}
              className={isDarkTheme? 'bg-light' : 'bg-teal'}
            >
              {
                isDarkTheme? <BsFillMoonFill /> : <BsSun />
              }
            </IconButton>
            <IconButton
              size='small'
              color={isDarkTheme? 'warning' : 'black'}
            >
              {
                isDarkTheme? <BsSun /> : <BsFillMoonFill />
              }
            </IconButton>
          </div>
      </Tooltip>
    </motion.div>
  )
}

export default DarkAndLightButton