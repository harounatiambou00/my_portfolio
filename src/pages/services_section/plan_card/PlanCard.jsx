import React, {useContext} from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import './plan_card.css';

import {Button} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { advantages } from '../advantages';


const PlanCard = ({type, level, pricePerHour, advantagesIndexes, serviceType}) => {
  const {isDarkTheme} = useContext(ThemeContext);
  return (
    <div
      className={isDarkTheme ? 'bg-darkElevation rounded-md sm:mx-40 lg:mx-0 sm:mt-10 lg:mt-0': 'border-2 border-dark rounded-md sm:mx-40 lg:mx-0 sm:mt-10 lg:mt-0'}
    >
      <div
        className='p-5'
      >
        <h2>{type}</h2>
        {
          level === 'Basic' && (
            <span
              className='text-red-400 font-light'
            >
              {level}
            </span>
          )
        }
        {
          level === 'Standard' && (
            <span
              className='text-orange-400 font-light'
            >
              {level}
            </span>
          )
        }
        {
          level === 'Premium' && (
            <span
              className='text-green-600 font-light'
            >
              {level}
            </span>
          )
        }
        <h2
          className='font-light mt-2'
        >
          {pricePerHour['FCFA']} FCFA<sub className='opacity-70'> / hour</sub></h2>
        <Button
          href="#contact__me__section"
          fullWidth
          color={isDarkTheme? 'light':'primary'}
          sx={{fontFamily: "'Kanit', sans-serif"}}
          variant='contained'
          className={isDarkTheme? 'mt-2 text-dark':'mt-2 text-light'}
        >
          GET IT
        </Button>
      </div>
      <div
        className='p-5 pt-0 pb-1'
      >
        <h6
          className='font-light'
        >
          WHAT'S INCLUDED
        </h6>
        {
          advantagesIndexes.map((advantageIndex) => {
            return(
              <div>
                <DoneIcon color='success'/>
                <span
                  className='font-light text-sm ml-4'
                >
                  {advantages[serviceType][advantageIndex]}
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