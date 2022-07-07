import React, {useContext, useState} from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import {IconButton, Tooltip, Zoom, Snackbar, Alert} from '@mui/material';

import {FiGithub, FiLinkedin, FiFacebook, FiMail, FiTwitter} from 'react-icons/fi';

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
    <div
        className='fixed left-4 bottom-1/3'
    >
        <div 
            className='sm:hidden lg:flex items-center justify-center flex-col'
        >
            <IconButton
                color={isDarkTheme? 'secondary' : 'githubLogoColor'}
            >
                <a
                    href='https://github.com/harounatiambou00'
                >
                    <FiGithub />
                </a>
            </IconButton>
            <IconButton
                color={isDarkTheme? 'secondary' : 'linkedin'}
            >
                <a href='https://www.linkedin.com/in/abdoul-wahabou-harouna-tiambou-475099210/'>
                    <FiLinkedin />
                </a>
            </IconButton>
            <IconButton
                color={isDarkTheme? 'secondary' : 'facebook'}
            >
                <a href='https://m.facebook.com/abdoulwahab.harouna.98' target='_blank'>
                    <FiFacebook />
                </a>    
            </IconButton>
            <IconButton
                color={isDarkTheme? 'secondary' : 'twitter'}
            >
                <a href='https://twitter.com/AbdoulTiambou' target='_blank'>
                    <FiTwitter />
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
                    color={isDarkTheme? 'secondary' : 'primary'}
                >
                    <FiMail />
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
    </div>
  )
}

export default SocialMediasIcons