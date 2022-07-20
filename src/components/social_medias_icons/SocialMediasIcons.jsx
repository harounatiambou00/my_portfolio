import React, {useContext, useState} from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import {IconButton, Tooltip, Zoom, Snackbar, Alert} from '@mui/material';

import {FiGithub, FiLinkedin, FiFacebook, FiMail, FiTwitter} from 'react-icons/fi';

import {BsGithub, BsLinkedin, BsFacebook, BsTwitter} from 'react-icons/bs';
import {IoIosMail} from 'react-icons/io'

import {motion} from 'framer-motion';

const SocialMediasIcons = () => {
    const {isDarkTheme} = useContext(ThemeContext);

    const handleClickCopyEmail = () => {
        navigator.clipboard.writeText("harounatiambou.pro@gmail.com");
        setopenSnackbar(true);
    }

    const [openSnackbar, setopenSnackbar] = useState(false);
    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setopenSnackbar(false);
    };

  return (
    <motion.div
        className='fixed left-4 bottom-1/3'
        initial={{x: -100}}
        animate={{x: 0}}
        transition={{duration: 2}}
    >
        <div 
            className='sm:hidden lg:flex items-center justify-center flex-col'
        >
            <IconButton
                color={isDarkTheme? 'light' : 'githubLogoColor'}
            >
                <a
                    href='https://github.com/harounatiambou00'
                >
                    <BsGithub />
                </a>
            </IconButton>
            <IconButton
                color='linkedin'
            >
                <a href='https://www.linkedin.com/in/abdoul-wahabou-harouna-tiambou-475099210/'>
                    <BsLinkedin />
                </a>
            </IconButton>
            <IconButton
                color='facebook'
            >
                <a href='https://m.facebook.com/abdoulwahab.harouna.98' target='_blank' rel="noreferrer">
                    <BsFacebook />
                </a>    
            </IconButton>
            <IconButton
                color='twitter'
            >
                <a href='https://twitter.com/AbdoulTiambou' target='_blank' rel="noreferrer">
                    <BsTwitter />
                </a>
            </IconButton>
            <Tooltip 
                arrow
                title="Copy my email address"
                placement='right'
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 600 }}
                onClick={() => handleClickCopyEmail()}
            >
                <IconButton
                    onClick={() => handleClickCopyEmail()}
                    color={isDarkTheme? 'warning' : 'secondary'}
                    className='rouded-lg bg-gray-200 dark:bg-darkElevation'
                >
                    <IoIosMail />
                </IconButton>
            </Tooltip>
        </div>
        <Snackbar 
                open={openSnackbar} 
                autoHideDuration={6000} 
                onClose={handleCloseSnackbar}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            >
                <Alert 
                onClose={handleCloseSnackbar} 
                severity="success" 
                sx={{ width: '100%' }}
                className='font-kanit'
                >
                    The email address has been successfully copied to your clipboard.
                </Alert>
        </Snackbar>
    </motion.div>
  )
}

export default SocialMediasIcons