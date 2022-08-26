import React, {useContext} from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import './plan_card.css';

import {Button} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { advantages } from '../advantages';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const PlanCard = ({type, level, pricePerHour, advantagesIndexes, serviceType}) => {
  const {isDarkTheme} = useContext(ThemeContext);
  const {t} = useTranslation();
  return (
    <div
      className={isDarkTheme ? 'bg-darkElevation rounded-md sm:mx-40 lg:mx-0 sm:mt-10 lg:mt-0': 'border-2 border-dark rounded-md sm:mx-40 lg:mx-0 sm:mt-10 lg:mt-0'}
    >
      <div
        className='p-5'
      >
        <h2>{t("services_section." + type)}</h2>
        {
          level === 'basic' && (
            <span
              className='text-red-400 font-light'
            >
              {t("services_section." + level)}
            </span>
          )
        }
        {
          level === 'standard' && (
            <span
              className='text-orange-400 font-light'
            >
              {t("services_section." + level)}
            </span>
          )
        }
        {
          level === 'premium' && (
            <span
              className='text-green-600 font-light'
            >
              {t("services_section." + level)}
            </span>
          )
        }
          {
            i18next.language === 'fr' ? 
              <h2
                className='font-light mt-2'
              >
                {pricePerHour['FCFA']} FCFA<sub className='opacity-70'> / h</sub>
              </h2>: 
              <h2
                className='font-base mt-2'
              >
                $ {pricePerHour['USD']}<sub className='opacity-70'> / h</sub>
              </h2>
          }
        <Button
          href="#contact__me__section"
          fullWidth
          color={isDarkTheme? 'light':'primary'}
          sx={{fontFamily: "'Kanit', sans-serif"}}
          variant='contained'
          className={isDarkTheme? 'mt-2 text-dark':'mt-2 text-light'}
        >
          {t("services_section.get_it")}
        </Button>
      </div>
      <div
        className='p-5 pt-0 pb-1'
      >
        <h6
          className='font-light'
        >
          {t("services_section.what_is_included")}
        </h6>
        {
          advantagesIndexes.map((advantageIndex) => {
            return(
              <div>
                <DoneIcon color='success'/>
                <span
                  className='font-light text-sm ml-4'
                >
                  {t("services_section.advantages." + advantages[serviceType][advantageIndex])}
                </span>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default PlanCard