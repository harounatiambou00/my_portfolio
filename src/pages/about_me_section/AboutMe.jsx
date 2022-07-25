import React from 'react';

import Img from '../../assets/images/Me.png'

import './styles.css';

import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

import {motion} from 'framer-motion';

const AboutMe = () => {

  return (
    <motion.div 
      className='app__section sm:h-screen lg:h-screen items-center justify-center sm:pt-48 lg:pt-4 bg-light dark:bg-dark'
      id='about__me__section'
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 1,
      }}
    >
      <motion.h1
        initial={{y: 20}}
        animate={{y: 0}}
        transition={{duration: 1}}
        className='sm:text-6xl lg:text-4xl opacity-80 font-righteous'
      >
        &Agrave; propos de moi
      </motion.h1>
      <div
        className='flex sm:flex-col lg:flex-row justify-between items-center w-5/6 lg:h-4/6'
      >
        <div
          className='text-dark dark:text-light px-10 sm:py-20 lg:py-0'
        >
          <p
            className='first-letter:font-splash sm:first-letter:text-5xl lg:first-letter:text-4xl sm:text-2xl lg:text-base font-normal first-letter:text-teal'
          >
            Salut, je m'appelle &nbsp;&nbsp;
            <span
              className='font-righteous sm:text-2xl lg:text-lg text-teal tracking-wide'
            >
              Abdoul Wahabou Harouna Tiambou
            </span>
            .
          </p>
          <p
            className='font-normal sm:text-2xl lg:text-base'
          >
            Un jeune étudiant <span className='text-teal font-kanit sm:text-2xl lg:text-lg font-medium'>Nigerien</span> résidant en Tunisie et surtout passioné d'informatique.
            Je suis actuellement en troisième année de licence en génie logiciel à l' Université De Monastir en Tunisie.<br />
            Je suis également le PDG de <span className='sm:text-2xl lg:text-lg font-righteous tracking-wide text-teal hover:underline cursor-pointer'>TIAMTECH LLC</span>, une petite start-up basée au Niger qui fournit des services tels que le développement de SITES WEB, le développement d'API Restful, le développement d'applications mobiles, le conseil informatique, etc...<br />
            Je suis aussi le chargé des affaires académiques et sociales de la section de Monastir de l'ANEST(Association des &Eacute;tudiants et Stagiaires Nigériens en Tunisie).
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
              <a
                href='https://drive.google.com/file/d/1WcX8IPjef1AzJ1h4ABO7Trc3fZHTXMUb/view?usp=sharing'
                target="_blank"
                rel='noreferrer'
              >
                Télecharger mon CV
              </a>
            </Button>
          </div>
        </div>
          <img 
            alt='me'
            id='profile__image'
            src={Img}
            className='bg-dark dark:bg-light lg:h-96 lg:w-96 flex justify-center items-center'
          />
      </div>
    </motion.div>
  )
}

export default AboutMe