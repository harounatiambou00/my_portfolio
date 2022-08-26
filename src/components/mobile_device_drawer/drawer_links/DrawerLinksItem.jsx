import React, {useContext} from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';

import {IconButton} from '@mui/material';


import { useTranslation } from 'react-i18next';

const DrawerLinksItem = ({title, signet, icon}) => {
    const {toggleMobileDeviceDrawer} = useContext(ThemeContext); 
    const {t} = useTranslation();
  return (
    <div
        onClick={toggleMobileDeviceDrawer(false)}
        className='pl-10 pr-24 my-6 drop-shadow-md'
    >
        <a
            href={'#' + signet}
            className={title === 'services_link' ?  'w-full flex justify-center items-center bg-dark text-light p-4 rounded-xl mt-20' : 'w-full flex items-center bg-white dark:bg-light p-4 rounded-full'}
        >
            <IconButton
                className='text-4xl mr-4'
                color={title === 'services_link' ? 'warning' : 'secondary'}
            >
                {icon}
            </IconButton>
            <p
                className='text-4xl opacity-80'
            >
                {t("navbar." + title)}
            </p>
        </a>
    </div>
  )
}

export default DrawerLinksItem