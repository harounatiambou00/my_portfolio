import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import ProjectsSwiper from './projects-swiper/ProjectsSwiper';


const Portfolio = () => {
  const {isDarkTheme} = useContext(ThemeContext);
  
  return (
    <div 
      className='app__section sm:h-auto lg:h-screen items-center justify-center sm:pt-48 lg:pt-20'
      id='portfolio__section'
      style={isDarkTheme ? {backgroundColor: '#041C32'} : {backgroundColor: "#EEEEEE"}}
    >
      <h1
        className='sm:text-6xl lg:text-4xl opacity-80'
      >
        Portfolio
      </h1>
      <h1
        className='sm:text-2xl lg:text-xl opacity-60'
      >
        Here are some projects I've been working recently.
      </h1>
      <div
        className='sm:h-small_device_portfolio_swipper lg:h-5/6 sm:w-3/6 lg:w-8/12 sm:mt-20 lg:mt-10'
      >
        <ProjectsSwiper />
      </div>
    </div>
  )
}

export default Portfolio