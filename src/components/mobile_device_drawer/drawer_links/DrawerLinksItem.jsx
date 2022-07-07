import React, {useContext} from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';

import {IconButton} from '@mui/material';

const DrawerLinksItem = ({title, signet, icon}) => {
    const {toggleMobileDeviceDrawer} = useContext(ThemeContext); 
  return (
    <div
        onClick={toggleMobileDeviceDrawer(false)}
        className='pl-10 pr-24 my-6 drop-shadow-md'
    >
        <a
            href={'#' + signet}
            className={title === 'Services' ?  'w-full flex justify-center items-center bg-dark text-light p-4 rounded-xl mt-20' : 'w-full flex items-center bg-white p-4 rounded-full'}
        >
            <IconButton
                className='text-4xl mr-4'
                color={title === 'Services' ? 'warning' : 'secondary'}
            >
                {icon}
            </IconButton>
            <p
                className='text-4xl opacity-80'
            >
                {title}
            </p>
        </a>
    </div>
  )
}

export default DrawerLinksItem