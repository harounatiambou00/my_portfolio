import React, {useState} from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import {HiOutlineMail} from 'react-icons/hi';
import {BsTelephone} from 'react-icons/bs';
import {GiPositionMarker} from 'react-icons/gi';
import {FiGithub, FiTwitter, FiFacebook, FiLinkedin} from 'react-icons/fi'
import {IconButton, TextField, Button} from '@mui/material';

const ContactMe = () => {
  const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);

  return (
    <div 
      className='app__section'
      id='contact__me__section'
      style={isDarkTheme ? {backgroundColor: '#041C32'} : {backgroundColor: "#EEEEEE"}}
    >
      <h1
        className='text-4xl opacity-80 lg:mt-20 mb-4'
      >
        Contact Us
      </h1>
      <div
        className={isDarkTheme? 'flex sm:flex-col-reverse lg:flex-row sm:w-11/12 lg:w-10/12  bg-white drop-shadow-md rounded-md':'flex sm:flex-col-reverse lg:flex-row sm:w-11/12 lg:w-10/12 bg-white drop-shadow-md rounded-md'}
      >
        <div
          className='bg-teal lg:w-1/3 h-full drop-shadow-md sm:rounded-b-md lg:rounded-l-md p-5'
        >
          <h2
            className='sm:text-4xl lg:text-xl opacity-70 text-light font-righteous'
          >
            Other channels
          </h2>
          <div>
            <div
              className='font-extralight items-center mt-10 text-light sm:text-4xl lg:text-base'
            >
              <IconButton
                color='light'
                className='sm:text-4xl lg:text-2xl'
              >
                <HiOutlineMail />
              </IconButton>
              harounatiambou.pro@gmail.com 
            </div>
            <div
              className='font-extralight items-center mt-10 text-light sm:text-4xl lg:text-base'
            >
              <IconButton
                color='light'
                className='sm:text-4xl lg:text-2xl'
              >
                <BsTelephone />
              </IconButton>
              +(216) 52-178-506 
            </div>
            <div
              className='font-extralight items-center mt-10 text-light sm:text-4xl lg:text-base flex'
            >
              <IconButton
                color='light'
                className='sm:text-4xl lg:text-2xl'
              >
                <GiPositionMarker />
              </IconButton>
              <div>
                90 Ave Mohamed V, Monastir 1002, Tunisia 
              </div>
            </div>
            <div
              className='flex items-center justify-around mt-20 px-28 mb-10'
            >
              <IconButton
                color='linkedin'
                className='sm:text-5xl lg:text-2xl' 
              >
                <FiLinkedin />
              </IconButton>
              <IconButton
                color='github' 
                className='sm:text-5xl lg:text-2xl'
              >
                <FiGithub />
              </IconButton>
              <IconButton
                color='twitter' 
                className='sm:text-5xl lg:text-2xl'
              >
                <FiTwitter />
              </IconButton>
              <IconButton
                color='facebook' 
                className='sm:text-5xl lg:text-2xl'
              >
                <FiFacebook />
              </IconButton>
            </div>
          </div>
        </div>
        <div
          className='p-5 w-full'
        >
          <h2
            className='sm:text-4xl lg:text-xl opacity-70 text-dark font-righteous sm:rounded-t-md lg:rounded-r-md'
          >
            Send me a message
          </h2>
          <div
            className='w-full sm:px-20 lg:px-0 mt-5'
          >
            <div
              className='w-full grid sm:grid-cols-1 lg:grid-cols-2 sm:gap-10 lg:gap-5'
            >
            <TextField 
              fullWidth
              label='First Name'
              inputProps={{sx:{fontFamily: "'Kanit', sans-serif"}}}
              InputLabelProps={{sx:{fontFamily: "'Kanit', sans-serif"}}}
            />
            <TextField 
              fullWidth
              label='Last Name'
              inputProps={{sx:{fontFamily: "'Kanit', sans-serif"}}}
              InputLabelProps={{sx:{fontFamily: "'Kanit', sans-serif"}}}
            />
            <TextField 
              fullWidth
              label='Email'
              inputProps={{sx:{fontFamily: "'Kanit', sans-serif"}}}
              InputLabelProps={{sx:{fontFamily: "'Kanit', sans-serif"}}}
            />
            <TextField 
              fullWidth
              label='Phone Number'
              inputProps={{sx:{fontFamily: "'Kanit', sans-serif"}}}
              InputLabelProps={{sx:{fontFamily: "'Kanit', sans-serif"}}}
            />
            </div>
            <div
              className='w-full grid grid-cols-1 sm:gap-10 lg:gap-5 mt-5'
            >
              <TextField 
                fullWidth
                label='Subject'
                inputProps={{sx:{fontFamily: "'Kanit', sans-serif"}}}
                InputLabelProps={{sx:{fontFamily: "'Kanit', sans-serif"}}}
              />
              <TextField 
                fullWidth
                multiline
                rows={4}
                label='Subject'
                inputProps={{sx:{fontFamily: "'Kanit', sans-serif"}}}
                InputLabelProps={{sx:{fontFamily: "'Kanit', sans-serif"}}}
              />
            </div>
          </div>
          <div
            className='mt-2 flex sm:justify-center lg:justify-end'
          >
            <Button
              variant='contained'
              color='secondary'
              className='font-kanit tracking-wider sm:w-2/4 sm:mt-5 lg:mt-0 lg:w-auto'
            > 
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe