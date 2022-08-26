import React, {useContext} from 'react';
import {ThemeContext} from '../../../contexts/ThemeContext';

import './services_button.css';

import { motion } from 'framer-motion';

const ServicesButton = () => {
  const {isDarkTheme, t} = useContext(ThemeContext);

  return (
    <motion.div 
      className={'services__button__wrapper'}
      initial={{y: -100}}
      animate={{y: 0}}
      transition={{duration: 1.5}}
    >
      <a href='#services__section'
        className={isDarkTheme? 'border-2 border-light hover:text-dark after:bg-light' : 'border-2 border-dark text-dark hover:text-light after:bg-dark'}
      >
        <span>{t('navbar.services_link')}</span>
      </a>
    </motion.div>
  )
}

export default ServicesButton