import React, {useState} from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Accordion, AccordionDetails, AccordionSummary, IconButton} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { MdDeveloperMode } from 'react-icons/md';
import { SkillCard } from '../../components';

import { mobileSkills } from '../../data/skills/mobile-skills';

const MobileDevSkills = ({expanded, handleChange}) => {
    const {isDarkTheme, t} = useContext(ThemeContext);
  return (
    <Accordion 
        expanded={expanded === 'mobile-dev-panel'} 
        onChange={handleChange('mobile-dev-panel')}
        className={expanded === 'mobile-dev-panel'? 'sm:w-5/6 lg:w-4/6 bg-white dark:bg-darkElevation text-dark dark:text-light' : 'sm:w-5/6 lg:w-3/6 bg-white dark:bg-darkElevation text-dark dark:text-light'}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color={isDarkTheme? 'secondary' : 'primary'} />}
          aria-controls="mobile-dev--panel-content"
          id="mobile-dev-panel-header"
          className='flex items-center'
        >
          <div
            className='flex items-center font-righteous text-dark dark:text-light'
          >
            <IconButton
              color='secondary'
            >
              <MdDeveloperMode />
            </IconButton>
            {t('skills_section.mobile_apps_development')}
          </div>
        </AccordionSummary>
        <AccordionDetails
            className='grid sm:grid-cols-2  gap-5'
        >
            {
                mobileSkills.map((skill) => {
                    return (
                        <SkillCard title={skill.title} percentage={skill.percentage} icon={skill.icon} color={skill.color} />
                    );
                })
            }
        </AccordionDetails>
      </Accordion>
  )
}

export default MobileDevSkills