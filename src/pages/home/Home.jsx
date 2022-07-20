import React from 'react';

import {Tooltip, Button, Zoom} from '@mui/material';

import { motion } from 'framer-motion';

import TypewriterComponent from 'typewriter-effect';

const Home = () => {
  return (
    <motion.div
      className='app__section sm:h-auto lg:h-screen items-center justify-center sm:pt-48 sm:pb-20  lg:pt-4'
      id='home__section'
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 3,
      }}
    >
      <div
        className='sm:text-4xl lg:text-2xl font-kanit font-light sm:pl-10 lg:pl-0'
      >
        <Tooltip
          placement='top-start'
          title="Fofo means 'Hello' in my native language."
          className='font-kanit cursor-pointer'
          TransitionComponent={Zoom}
          TransitionProps={{timeout: 300}}
        >
          <motion.p
            initial={{y: 20}}
            animate={{y: 0}}
            transition={{duration: 1}}
            className='first-letter:font-splash sm:first-letter:text-6xl lg:first-letter:text-4xl first-letter:font-semibold text-teal'
          >
            <TypewriterComponent 
              options={{
                strings: "Fofo, my name is",
                autoStart: true,
                cursor: "_", 
                delay : 50
              }}
            />
          </motion.p>
        </Tooltip>
        <motion.p
            initial={{y: 30}}
            animate={{
              y: 0,
            }}
            transition={{duration: 1}}
            className='font-righteous sm:text-8xl lg:text-5xl opacity-90 text-teal'
        >
          <TypewriterComponent 
            options={{
              strings: "Abdoul Wahabou Harouna TIAMBOU.",
              autoStart: true,
              cursor: "_",
              delay: 50,
            }}
          />
        </motion.p>
        <motion.p
            initial={{y: 40}}
            animate={{y: 0}}
            transition={{duration: 1}}
            className='font-kanit sm:text-6xl lg:text-4xl opacity-70 font-medium'
        >
          <TypewriterComponent 
            options={{
              strings: "I create things related to the Web.",
              autoStart: true,
              cursor: "_",
              delay: 50
            }}
          />
        </motion.p>
        <motion.p
            initial={{y: 50}}
            animate={{y: 0}}
            transition={{duration: 1}}
            className='sm:text-4xl lg:text-xl opacity-90 mt-7'
        >
          <TypewriterComponent 
            options={{
              strings: " I'm a software engineering student specialized in websites and mobile apps development.<br />\nCurrently, I'm also heading a small start-up named TiamTech.",
              autoStart: true,
              cursor: "_",
              delay: 20,
            }}
          />
        </motion.p>
        
      </div>
      <motion.div
        initial={{y: 60}}
        animate={{y: 0}}
        transition={{duration: 1}}
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
      </motion.div>
    </motion.div>
  )
}

export default Home