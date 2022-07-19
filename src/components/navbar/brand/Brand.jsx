import React, {useContext} from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';

import Logo from '../../../assets/images/logo.png';

import './brand.css';

import { motion } from 'framer-motion';


const Brand = () => {
  const {isDarkTheme} = useContext(ThemeContext);
  return (
    <motion.a
      initial={{y: -100}}
      animate={{y: 0}}
      transition={{duration: 1}}
      href='#home__section'
      className='sm:mt-5 sm:mb-5 w-full flex flex-row justify-center items-center'
    >
      <img 
        src={Logo}
        className='sm:h-20 lg:h-10 dark:hidden'
        alt='logo'
      />
      <img 
        src={Logo}
        className='sm:h-20 lg:h-10 hidden dark:block'
        alt='logo'
      />
      <h1
        className='sm:hidden lg:block ml-2 text-teal dark:text-teal-700 font-extrabold'
      >
        IAMTECH
      </h1>
    </motion.a>
  )
}

export default Brand