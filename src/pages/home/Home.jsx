import React, {useContext} from 'react';
import ThemeContext from '../../contexts/ThemeContext';

import {Tooltip, Button} from '@mui/material';

const Home = () => {
  return (
    <div
      className='app__section sm:h-auto lg:h-screen items-center justify-center sm:pt-48 sm:pb-20  lg:pt-4'
      id='home__section'
    >
      <div
        className='sm:text-4xl lg:text-2xl font-kanit font-light sm:pl-10 lg:pl-0'
      >
        <Tooltip
          arrow
          placement='top'
          title="San'nu means 'Hello' in my native language."
          className='font-kanit cursor-pointer'
        >
          <p
            className='first-letter:font-splash sm:first-letter:text-6xl lg:first-letter:text-4xl first-letter:font-semibold text-teal'
          >
            San'nu, my name is
          </p>
        </Tooltip>
        <p
            className='font-righteous sm:text-8xl lg:text-5xl opacity-90 text-teal'
        >
          Abdoul Wahabou Harouna TIAMBOU.
        </p>
        <p
            className='font-kanit sm:text-6xl lg:text-4xl opacity-70 font-medium'
        >
          I build things for the web.
        </p>
        <p
            className='sm:text-4xl lg:text-xl opacity-90 mt-7'
        >
          I'm a software engineering student specialized in websites and mobile apps development.<br />
          Currently, I'm also heading a small start-up named <span className='sm:text-4xl lg:text-2xl text-teal font-righteous'>TiamTech</span>.
        </p>
        
      </div>
      <div
        className='mt-16 flex justify-around items-center w-full lg:px-48'
      >
        <Button
          className='font-righteous'
          variant='outlined'
          color='secondary'
        >
          <a
            href='#portfolio__section'
            className='sm:text-xl lg:text-base'
          >
            Check out my recent works
          </a>
        </Button>
        <Button
          className='font-righteous'
          variant='outlined'
          color='secondary'
        >
          <a
            href='#contact__me__section'
            className='sm:text-xl lg:text-base'
          >
            Get in touch
          </a>
        </Button>
      </div>
    </div>
  )
}

export default Home