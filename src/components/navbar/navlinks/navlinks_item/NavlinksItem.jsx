import React, {useContext} from 'react';
import { ThemeContext } from '../../../../contexts/ThemeContext';


import './navlinksitem.css';


const NavlinksItem = ({name, signet}) => {
    const {isDarkTheme, t} = useContext(ThemeContext);
    let darkThemeClassNameForLink = 'font-extralight after:bg-light text-light';
    let lightThemeClassNameForLink = 'font-extralight after:bg-dark text-dark';

  return (
    <div className='navbar__links__item mx-4'>
        <a href={"#" + signet} className={isDarkTheme? darkThemeClassNameForLink:lightThemeClassNameForLink}>{t("navbar."+name)}</a>
    </div>
  )
}

export default NavlinksItem