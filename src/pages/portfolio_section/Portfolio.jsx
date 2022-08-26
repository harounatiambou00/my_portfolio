import React from 'react';
import ProjectsSwiper from './projects-swiper/ProjectsSwiper';

import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const {t} = useTranslation();

  return (
    <div 
      className='app__section sm:h-auto lg:h-screen items-center justify-center sm:pt-48 lg:pt-20'
      id='portfolio__section'
    >
      <h1
        className='sm:text-6xl lg:text-4xl opacity-80 font-righteous'
      >
        {t("portfolio_section.title")}
      </h1>
      <h1
        className='sm:text-2xl lg:text-xl opacity-60 font-righteous'
      >
        {t("portfolio_section.subtitle")}
      </h1>
      <div
        className='sm:h-small_device_portfolio_swipper lg:h-5/6 sm:w-3/6 lg:w-10/12 sm:mt-20 lg:mt-10'
      >
        <ProjectsSwiper />
      </div>
    </div>
  )
}

export default Portfolio