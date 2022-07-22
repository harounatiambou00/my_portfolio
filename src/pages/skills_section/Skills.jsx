import React, {useState} from 'react';

import FrontEndSkills from './FrontEndSkills';
import BackEndSkills from './BackEndSkills';
import MobileDevSkills from './MobileDevSkills';
import UiUxSkills from './UiUxSkills';
import ToolsSkills from './ToolsSkills';

import {IconButton} from '@mui/material';

import {FaBrain, FaTasks} from 'react-icons/fa';
import {TbCoffee} from 'react-icons/tb';

const Skills = () => {
  //The expanded state is a string which contains the id of the expanded panel.By default we want the frontend panel to be openned
  const [expanded, setExpanded] = useState('frontend-panel');

  //If the panel passed is openned we close it and there is no openned panel, if not we expand it.
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div 
      className='app__section sm:h-auto items-center justify-center sm:pt-10 lg:pt-0'
      id='skills__section'
    >
      <h1
        className='sm:text-6xl lg:text-4xl opacity-80 mb-4 sm:mt-20'
      >
        Skills
      </h1>

      <h3
          className='sm:text-4xl lg:text-2xl opacity-60 mb-2'
        >
          My Strengths
      </h3>
      <div
        className='sm:w-full lg:w-4/6 px-4 sm:mb-10 lg:mb-4 flex justify-around'
      >
        <div
          className='flex flex-col items-center justify-center'
        >
          <IconButton
            color='secondary'
          >
            <FaTasks />
          </IconButton>
          <h3
            className='text-xl'
          >
            <span className='text-teal text-2xl mr-2 font-righteous'>
              1.
            </span>
            Productivity
          </h3>
        </div>
        <div
          className='flex flex-col items-center justify-center'
        >
          <IconButton
            color='secondary'
          >
            <FaBrain />
          </IconButton>
          <h3
            className='text-xl'
          >
            <span className='text-teal text-2xl mr-2 font-righteous'>
              2.
            </span>
            Problem solving
          </h3>
        </div>
        <div
          className='flex flex-col items-center justify-center'
        >
          <IconButton
            color='secondary'
          >
            <TbCoffee />
          </IconButton>
          <h3
            className='text-xl'
          >
            <span className='text-teal text-2xl mr-2 font-righteous'>
              3.
            </span>
            Hard Work
          </h3>
        </div>
      </div>

      <h3
        className='sm:text-4xl lg:text-2xl opacity-60'
      >
        Technologies I've been working with recently
      </h3>
      <FrontEndSkills expanded={expanded} handleChange={handleChange}/>
      <BackEndSkills expanded={expanded} handleChange={handleChange} />
      <MobileDevSkills expanded={expanded} handleChange={handleChange} />
      <UiUxSkills expanded={expanded} handleChange={handleChange}/>
      <ToolsSkills expanded={expanded} handleChange={handleChange} />
    </div>
  )
}

export default Skills