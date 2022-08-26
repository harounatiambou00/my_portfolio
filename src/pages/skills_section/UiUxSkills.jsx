import React, {useState} from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Accordion, AccordionDetails, AccordionSummary, IconButton} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { MdDesignServices } from 'react-icons/md';

import { SkillCard } from '../../components';

import { uiUxSkills } from '../../data/skills/ui-ux-skills';

const UiUxSkills = ({expanded, handleChange}) => {
    const {isDarkTheme, t} = useContext(ThemeContext);
  return (
    <Accordion 
        expanded={expanded === 'design-panel'} 
        onChange={handleChange('design-panel')}
        className={expanded === 'design-panel'? 'sm:w-5/6 lg:w-4/6 bg-white dark:bg-darkElevation text-dark dark:text-light' : 'sm:w-5/6 lg:w-3/6 bg-white dark:bg-darkElevation text-dark dark:text-light'}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color={isDarkTheme? 'secondary' : 'primary'} />}
          aria-controls="design-panel-content"
          id="design-panel-header"
          className='flex items-center'
        >
          <div
            className='flex items-center font-righteous text-dark dark:text-light'
          >
            <IconButton
              color='secondary'
            >
              <MdDesignServices />
            </IconButton>
            {t('skills_section.design_web')}
          </div>
        </AccordionSummary>
        <AccordionDetails
            className='grid sm:grid-cols-2  gap-5'
        >
            {
                uiUxSkills.map((skill) => {
                    return (
                        <SkillCard title={skill.title} percentage={skill.percentage} icon={skill.icon} color={skill.color} />
                    );
                })
            }
        </AccordionDetails>
      </Accordion>
  )
}

export default UiUxSkills