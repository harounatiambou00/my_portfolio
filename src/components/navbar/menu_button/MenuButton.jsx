import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';

import { IconButton } from '@mui/material';

import {BiMenuAltLeft} from 'react-icons/bi';

const MenuButton = () => {
    const {isDarkTheme} = useContext(ThemeContext);

  return (
    <IconButton
        size='large'
        color={isDarkTheme ? 'secondary':'primary'}
    >
        <BiMenuAltLeft />
    </IconButton>
  )
}

export default MenuButton