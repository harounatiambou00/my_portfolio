import React, {useState} from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import Img from '../../assets/images/Me.png'

import './styles.css';

import ShortcutIcon from '@mui/icons-material/Shortcut';
import { Button, IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const AboutMe = () => {
  const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);

  return (
    <div 
      className='app__section sm:h-auto lg:h-screen items-center justify-center sm:pt-48 lg:pt-4'
      id='about__me__section'
      style={isDarkTheme ? {backgroundColor: '#041C32'} : {backgroundColor: "#EEEEEE"}}
    >
      <h1
        className='sm:text-6xl lg:text-4xl opacity-80'
      >
        About Me
      </h1>
      <div
        className='flex sm:flex-col lg:flex-row justify-between items-center w-5/6 lg:h-4/6'
      >
        <div
          className={isDarkTheme? 'text-light px-10 sm:py-20 lg:py-0' : 'text-dark px-10 sm:py-20 lg:py-0'}
        >
          <p
            className='first-letter:font-righteous sm:first-letter:text-5xl lg:first-letter:text-4xl sm:text-2xl lg:text-base font-normal first-letter:text-teal'
          >
            Hi, my name is &nbsp;&nbsp;
            <span
              className='font-righteous sm:text-2xl lg:text-lg text-teal tracking-wide'
            >
              Harouna TIAMBOU Abdoul Wahabou
            </span>
            .
          </p>
          <p
            className='font-normal sm:text-2xl lg:text-base'
          >
            A young student from <span className='text-teal font-kanit sm:text-2xl lg:text-lg font-medium'>NIGER</span> living in Monastir(Tunisia), who is passionate about IT.<br />
            I'm currently an undergraduated student(3th year) at the university of Monastir, class of 2020-2023.<br />
            I'm pursuing a bachelor in Software Engineering from which I'll be graduated by the end of August 2023 (if everything goes well).<br />
            I'm also the CEO of <span className='sm:text-2xl lg:text-lg font-righteous tracking-wide text-teal hover:underline cursor-pointer'>TIAMTECH LLC</span>, a small starup which provide services such as WEBSITES development, Restful APIs development, Mobile Apps development, IT Consulting, and so on . . .<br />
          </p>
          <div
            className='flex justify-center'
          >
            <Button
              variant='outlined'
              color='secondary'
              className='sm:w-3/4 sm:h-16 lg:h-auto sm:text-xl lg:text-base lg:w-2/4 font-righteous mt-5'
              startIcon={<DownloadIcon />}
            >
              Download My Resume
            </Button>
          </div>
        </div>
          <img 
            id='profile__image'
            src={Img}
            className={isDarkTheme? 'bg-light lg:h-96 lg:w-96 flex justify-center items-center':'bg-dark lg:h-96 lg:w-96 flex justify-center items-center'}
          />
      </div>
    </div>
  )
}

export default AboutMe