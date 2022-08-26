import React, {useState} from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import {Button} from '@mui/material';
import {services} from './dummyservices';


import PlanCard from './plan_card/PlanCard';

import { useTranslation } from 'react-i18next';

const Services = () => {
  const {isDarkTheme} = useContext(ThemeContext);
  const [serviceType, setServiceType] = useState(0);

  const {t} = useTranslation();
  
  return (
    <>
      <div 
        className='app__section sm:h-auto lg:h-screen items-center justify-center sm:pt-48 lg:pt-28'
        id='services__section'
      >
        <h1
          className='sm:text-6xl lg:text-4xl opacity-80 font-righteous'
        >
          {t('services_section.title')}
        </h1>
        <h4
          className='text-2xl opacity-60'
        >
          {t('services_section.subtitle')}
        </h4>
        <div
          className='flex rounded-md mt-4 bg-dark dark:bg-darkElevation'
        >
          <Button
            color = {isDarkTheme? 'secondary':'light'}
            variant={serviceType === 0? 'contained':'text'}
            onClick={() => setServiceType(0)}
            className='mr-4 font-medium'
            sx={{fontFamily: "'Kanit', sans-serif"}}
          >
            {t('services_section.fullstack_website')}
          </Button>
          <Button
            color = {isDarkTheme? 'secondary':'light'}
            variant={serviceType === 1? 'contained':'text'}
            onClick={() => setServiceType(1)}
            className='mr-4 font-medium'
            sx={{fontFamily: "'Kanit', sans-serif"}}
          >
            {t('services_section.frontend_website')}
          </Button>
          <Button
            color = {isDarkTheme? 'secondary':'light'}
            variant={serviceType === 2? 'contained':'text'}
            onClick={() => setServiceType(2)}
            className='mr-4 font-medium'
            sx={{fontFamily: "'Kanit', sans-serif"}}
          >
            {t('services_section.restful_api')}
          </Button>
          <Button
            color = {isDarkTheme? 'secondary':'light'}
            variant={serviceType === 3? 'contained':'text'}
            onClick={() => setServiceType(3)}
            className='font-medium'
            sx={{fontFamily: "'Kanit', sans-serif"}}
          >
            {t('services_section.design_web')}
          </Button>
        </div>

        <div
          className='sm:w-full lg:w-11/12 lg:px-32 mt-5 grid sm:grid-cols-1 lg:grid-cols-3 gap-5 place-content-center'
        >
          {services[serviceType].plans.map((plan) => {
            return (
              <PlanCard type={services[serviceType].title} level={plan.title} pricePerHour={plan.priceperHour} advantagesIndexes={plan.advantagesIndexes} serviceType={serviceType}/>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Services