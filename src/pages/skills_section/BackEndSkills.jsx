import React, {useState} from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Accordion, AccordionDetails, AccordionSummary, IconButton} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { FaServer } from 'react-icons/fa';
import { SkillCard } from '../../components';

import {backendSkills} from '../../data/skills/backend-skills';

const BackEndSkills = ({expanded, handleChange}) => {
    const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);
  return (
    <Accordion 
        expanded={expanded === 'backend-panel'} 
        onChange={handleChange('backend-panel')}
        className={expanded === 'backend-panel'? 'sm:w-5/6 lg:w-4/6' : 'sm:w-5/6 lg:w-3/6'}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="backend-panel-content"
          id="backend-panel-header"
          className='flex items-center'
        >
          <div
            className='flex items-center font-righteous text-dark'
          >
            <IconButton
              color='secondary'
            >
              <FaServer />
            </IconButton>
            WEB BACKEND
          </div>
        </AccordionSummary>
        <AccordionDetails
          className='grid sm:grid-cols-2  gap-x-5'
        >
          {
                backendSkills.map((skill) => {
                    return (
                        <SkillCard title={skill.title} percentage={skill.percentage} icon={skill.icon} color={skill.color} />
                    );
                })
          }
        </AccordionDetails>
      </Accordion>
  )
}

export default BackEndSkills