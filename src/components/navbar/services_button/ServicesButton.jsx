import React, {useContext} from 'react';
import {ThemeContext} from '../../../contexts/ThemeContext';

import './services_button.css';

const ServicesButton = () => {
  const {isDarkTheme} = useContext(ThemeContext);
  var wrapperClassName = isDarkTheme? 
                  '' : 
                  '';
 var linkClassName = isDarkTheme? 
                  '' : 
                  '';
  return (
    <div 
      className={'services__button__wrapper' + wrapperClassName}
    >
      <a href='#services__section'
        className={isDarkTheme? 'border-2 border-light hover:text-dark after:bg-light' : 'border-2 border-dark text-dark hover:text-light after:bg-dark'}
      >
        <span>Services</span>
      </a>
    </div>
  )
}

export default ServicesButton