import React, {useState} from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Accordion, AccordionDetails, AccordionSummary, IconButton} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { FaTools } from 'react-icons/fa';
import { SkillCard } from '../../components';

import { tools } from '../../data/skills/tools';

const ToolsSkills = ({expanded, handleChange}) => {
    const {isDarkTheme, t} = useContext(ThemeContext);
  return (
    <Accordion 
        expanded={expanded === 'tools-panel'} 
        onChange={handleChange('tools-panel')}
        className={expanded === 'tools-panel'? 'sm:w-5/6 lg:w-4/6 bg-white dark:bg-darkElevation text-dark dark:text-light' : 'sm:w-5/6 lg:w-3/6 bg-white dark:bg-darkElevation text-dark dark:text-light'}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color={isDarkTheme? 'secondary' : 'primary'} />}
          aria-controls="tools-panel-content"
          id="tools-panel-header"
          className='flex items-center'
        >
          <div
            className='flex items-center font-righteous text-dark dark:text-light'
          >
            <IconButton
              color='secondary'
            >
              <FaTools />
            </IconButton>
            {t('skills_section.develoment_tools')}
          </div>
        </AccordionSummary>
        <AccordionDetails
            className='grid sm:grid-cols-2 lg:grid-cols-3  gap-5'
        >
            {
                tools.map((skill) => {
                    return (
                        <SkillCard title={skill.title} percentage={skill.percentage} icon={skill.icon} color={skill.color} />
                    );
                })
            }
        </AccordionDetails>
    </Accordion>
  )
}

export default ToolsSkills