import React from 'react';

import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';

import {languages} from '../../../data/languages';

import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import {IoLanguage} from 'react-icons/io5';

import {motion} from 'framer-motion';

import i18next from 'i18next';

const LanguageSelector = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (code = null) => {
    window.location.reload() 
    if(code !== null)
      i18next.changeLanguage(code);
    setAnchorEl(null);
  };

  const {isDarkTheme} = useContext(ThemeContext);

  return (
    <motion.div
      initial={{y: -100}}
      animate={{y: 0}}
      transition={{duration: 2}}
      className='bg-gray-200 dark:bg-darkElevation rounded-lg ml-2 drop-shadow-md'
    >
      <IconButton
        id="language-selector-icon-button"
        aria-controls={open ? 'languages-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className={isDarkTheme? 'text-light sm:text-4xl lg:text-lg' : 'sm:text-4xl lg:text-lg'}
      >
        <IoLanguage />
      </IconButton>
      <Menu
        id="languages-menu"
        aria-labelledby="language-selector-icon-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {
          languages.map((language) => {
            return (
              <MenuItem
                onClick={() => handleClose(language.code)}
                key={language.country_code}
              >
                <span className={`flag-icon flag-icon-${language.country_code} mr-2`}></span>
                <h1>{language.name}</h1>
              </MenuItem>
            );
          })
        }
      </Menu>
    </motion.div>
  )
}

export default LanguageSelector