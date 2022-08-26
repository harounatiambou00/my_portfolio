import React, {useState} from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Accordion, AccordionDetails, AccordionSummary, IconButton} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {FaCode} from 'react-icons/fa';

import { SkillCard } from '../../components';

import {frontendSkills} from '../../data/skills/frontend-skills';

const FrontEndSkills = ({expanded, handleChange}) => {
    const {isDarkTheme, t} = useContext(ThemeContext);
  return (
    <Accordion 
        expanded={expanded === 'frontend-panel'} 
        onChange={handleChange('frontend-panel')} 
        className={expanded === 'frontend-panel'? 'sm:w-5/6 lg:w-4/6 bg-white dark:bg-darkElevation text-dark dark:text-light' : 'sm:w-5/6 lg:w-3/6 bg-white dark:bg-darkElevation text-dark dark:text-light'}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color={isDarkTheme? 'secondary' : 'primary'} />}
          aria-controls="frontend-panel-content"
          id="frontend-panel-header"
          className='flex items-center w-'
        >
          <div
            className='flex items-center font-righteous text-dark dark:text-light'
          >
            <IconButton
              color='secondary'
            >
              <FaCode />
            </IconButton>
            {t('skills_section.web_frontend')}
          </div>
        </AccordionSummary>
        <AccordionDetails
            className='grid sm:grid-cols-2 lg:grid-cols-3  gap-5'
        >
            {
                frontendSkills.map((skill) => {
                    return (
                        <SkillCard title={skill.title} percentage={skill.percentage} icon={skill.icon} color={skill.color} />
                    );
                })
            }
        </AccordionDetails>
      </Accordion>
  )
}

export default FrontEndSkills