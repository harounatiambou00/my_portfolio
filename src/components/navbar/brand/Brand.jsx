import React, {useContext} from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';

import Logo from '../../../assets/images/logo.png';

import './brand.css';


const Brand = () => {
  const {isDarkTheme} = useContext(ThemeContext);
  return (
    <a
      href='#home__section'
      className='sm:mt-5 sm:mb-5 w-full flex flex-row justify-center items-center'
    >
      <img 
        src={Logo}
        className='sm:h-20 lg:h-10'
      />
      <h1
        className={isDarkTheme? 'sm:hidden lg:block ml-2 text-teal font-extrabold' : 'sm:hidden lg:block ml-2 text-teal font-extrabold'}
      >
        IAMTECH
      </h1>
    </a>
  )
}

export default Brand