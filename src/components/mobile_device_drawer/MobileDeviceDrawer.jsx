import React, {useContext} from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import {Drawer, IconButton, Tooltip, Zoom,} from '@mui/material';

import {AiOutlineClose} from 'react-icons/ai';
import Logo from '../../assets/images/logo.png';

import DrawerLinks from './drawer_links/DrawerLinks';

import {FiGithub, FiLinkedin, FiFacebook, FiMail, FiTwitter} from 'react-icons/fi';

const MobileDeviceDrawer = () => {
    const {isDarkTheme, mobileDrawerIsOpen, toggleMobileDeviceDrawer } = useContext(ThemeContext);

    const handleClickCopyEmail = () => {
        navigator.clipboard.writeText("harounatiambou.pro@gmail.com");
    }

  return (
    <Drawer
        anchor='left'
        open={mobileDrawerIsOpen}
        onClose={toggleMobileDeviceDrawer(false)}
    >
        <div
            className='h-screen font-kanit bg-light dark:bg-darkElevation w-drawer flex flex-col justify-between'
        >
            <div>
                <div
                    className={isDarkTheme? 'p-5 flex justify-between' : 'p-5 flex justify-between text-light'}
                >
                    <img 
                        src={Logo}
                        className='sm:h-20 lg:h-10'
                        alt='logo'
                    />
                    <IconButton
                        onClick={toggleMobileDeviceDrawer(false)}
                        color={isDarkTheme? 'light' : 'primary'}
                    >
                        <AiOutlineClose />
                    </IconButton>
                </div>
                <DrawerLinks />
            </div>
            <div
                className='flex items-center justify-around mb-24 px-10'
            >
                <IconButton
                    color={isDarkTheme? 'secondary' : 'githubLogoColor'}
                    className='text-4xl'
                >
                    <a
                        href='https://github.com/harounatiambou00'
                    >
                        <FiGithub />
                    </a>
                </IconButton>
                <IconButton
                    className='text-4xl'
                    color={isDarkTheme? 'secondary' : 'linkedin'}
                >
                    <a href='https://www.linkedin.com/in/abdoul-wahabou-harouna-tiambou-475099210/'>
                        <FiLinkedin />
                    </a>
                </IconButton>
                <IconButton
                    className='text-4xl'
                    color={isDarkTheme? 'secondary' : 'facebook'}
                >
                    <a href='https://m.facebook.com/abdoulwahab.harouna.98' target='_blank' rel="noreferrer">
                        <FiFacebook />
                    </a>    
                </IconButton>
                <IconButton
                    className='text-4xl'
                    color={isDarkTheme? 'secondary' : 'twitter'}
                >
                    <a href='https://twitter.com/AbdoulTiambou' target='_blank'  rel="noreferrer">
                        <FiTwitter />
                    </a>
                </IconButton>
                <Tooltip 
                    className='text-4xl'
                    arrow
                    title="Copy my email address"
                    placement='right'
                    TransitionComponent={Zoom}
                    TransitionProps={{ timeout: 600 }}
                    onClick={() => handleClickCopyEmail()}
                >
                    <IconButton
                        className='text-4xl'
                        onClick={() => handleClickCopyEmail()}
                        color={isDarkTheme? 'secondary' : 'primary'}
                    >
                        <FiMail />
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    </Drawer>
  )
}

export default MobileDeviceDrawer