import React, {useState} from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import {Button, Toolbar} from '@mui/material';
import {services} from './dummyservices';
import {advantages} from './advantages';


import PlanCard from './plan_card/PlanCard'

const Services = () => {
  const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);
  const [serviceType, setServiceType] = useState(0);

  
  return (
    <>
      <div 
        className='app__section sm:h-auto lg:h-screen items-center justify-center sm:pt-48 lg:pt-28'
        id='services__section'
        style={isDarkTheme ? {backgroundColor: '#041C32'} : {backgroundColor: "#EEEEEE"}}
      >
        <h1
          className='sm:text-6xl lg:text-4xl opacity-80'
        >
          Our Services
        </h1>
        <h4
          className='text-2xl opacity-60'
        >
          Find the best plan for your ...
        </h4>
        <div
          className={isDarkTheme? 'bg-light flex rounded-md mt-4' : 'bg-dark flex rounded-md mt-4'}
        >
          <Button
            color = {isDarkTheme? 'primary':'light'}
            variant={serviceType == 0? 'contained':'text'}
            onClick={() => setServiceType(0)}
            className='mr-4 font-light'
            sx={{fontFamily: "'Kanit', sans-serif"}}
          >
            Fullstack Development
          </Button>
          <Button
            color = {isDarkTheme? 'primary':'light'}
            variant={serviceType == 1? 'contained':'text'}
            onClick={() => setServiceType(1)}
            className='mr-4 font-light'
            sx={{fontFamily: "'Kanit', sans-serif"}}
          >
            FrontEnd Development
          </Button>
          <Button
            color = {isDarkTheme? 'primary':'light'}
            variant={serviceType == 2? 'contained':'text'}
            onClick={() => setServiceType(2)}
            className='mr-4 font-light'
            sx={{fontFamily: "'Kanit', sans-serif"}}
          >
            WEB APIs development
          </Button>
          <Button
            color = {isDarkTheme? 'primary':'light'}
            variant={serviceType == 3? 'contained':'text'}
            onClick={() => setServiceType(3)}
            className='font-light'
            sx={{fontFamily: "'Kanit', sans-serif"}}
          >
            WEB DESIGN
          </Button>
        </div>

        <div
          className='sm:w-full lg:w-11/12 lg:px-32 mt-5 grid sm:grid-cols-1 lg:grid-cols-3 gap-5 place-content-center'
        >
          {services[serviceType].plans.map((plan) => {
            return (
              <PlanCard type={services[serviceType].title} level={plan.title} pricePerHour={plan.priceperHour} advantagesIndexes={plan.advantagesIndexes} serviceType={serviceType}/>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default Services