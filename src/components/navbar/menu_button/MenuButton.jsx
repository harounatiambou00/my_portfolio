import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';

import { IconButton } from '@mui/material';

import {BiMenuAltLeft} from 'react-icons/bi';

import { motion } from 'framer-motion';

const MenuButton = () => {
    const {isDarkTheme, toggleMobileDeviceDrawer} = useContext(ThemeContext);

  return (
    <motion.div
      initial={{y: -100}}
      animate={{y: 0}}
      transition={{duration: 1.75}}
    >
      <IconButton
          className='text-6xl'
          size='large'
          color={isDarkTheme ? 'light':'primary'}
          onClick={toggleMobileDeviceDrawer(true)}
      >
          <BiMenuAltLeft />
      </IconButton>
    </motion.div>
  )
}

export default MenuButton