import React, {useContext} from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import {Tooltip, Button, Zoom} from '@mui/material';

import { motion } from 'framer-motion';

import TypewriterComponent from 'typewriter-effect';

import svg_programming from '../../assets/illustrations/undraw_programming.svg';

const Home = () => {
  const {t} = useContext(ThemeContext);
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
        duration: 2,
      }}
    >
      <div
        className='sm:text-4xl lg:text-2xl font-kanit font-light flex sm:flex-col lg:flex-row items-center sm:px-4 lg:px-40'
      >
        <div>
          <Tooltip
            placement='top-start'
            title={t("home_section.fofo_tooltip_title")}
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
                  strings: t('home_section.fofo_my_name_is'),
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
                strings: "Abdoul-Wahabou",
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
                strings: t("home_section.title"),
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
              className='sm:text-4xl lg:text-lg opacity-90 mt-5'
          >
            <TypewriterComponent 
              options={{
                strings: t("home_section.description"),
                autoStart: true,
                cursor: "_",
                delay: 20,
              }}
            />
          </motion.p>
        </div>
        <div>
          <img 
            src={svg_programming} 
            alt="" 
            className="sm:my-16 lg:my-0 sm:h-auto lg:h-72"
          />
        </div>
      </div>
      <motion.div
        initial={{y: 60}}
        animate={{y: 0}}
        transition={{duration: 1}}
        className='mt-10 flex justify-around items-center w-full lg:px-48'
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
            {t("home_section.recent_works_button_text")}
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
            {t("home_section.get_in_touch_button_text")}
          </a>
        </Button>
      </motion.div>
    </motion.div>
  )
}

export default Home