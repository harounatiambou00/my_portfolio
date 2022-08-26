import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { useTranslation } from 'react-i18next';

import PropTypes from 'prop-types';

import {Tabs, Tab, Box, IconButton} from '@mui/material';

import UM from '../../assets/images/university_of_monastir.png';
import MD from '../../assets/images/manou_diatta.png';

import {BsDot} from 'react-icons/bs';
import {FaGraduationCap} from 'react-icons/fa';

import {courses} from '../../data/education/courses'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      className='text-dark dark:text-light font-kanit'
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


const Education = () => {
  const {isDarkTheme} = useContext(ThemeContext);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {t} = useTranslation();

  return (
    <div 
      className='app__section sm:h-auto items-center justify-center sm:pt-48 lg:pt-16'
      id='education__section'
    >
      <h1
        className='sm:text-6xl lg:text-4xl opacity-80 mb-4 sm:mt-0 lg:mt-10 font-righteous'
      >
        {t("education_section.title")}
      </h1>
      <Box
        sx={{display: 'flex'}}
        className='sm:w-5/6 lg:w-5/6 font-kanit bg-light dark:bg-darkElevation'
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          textColor={isDarkTheme? 'secondary' : 'primary'}
          indicatorColor="secondary"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
          className='font-kanit font-semibold'
        >
          <Tab 
            className='font-kanit font-semibold' 
            label="2020-Present" 
            {...a11yProps(0)} 
          />
          <Tab 
            className='font-kanit font-semibold'
            label="2017-2020" 
            {...a11yProps(1)} 
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div
            className='font-kanit'
          >
            <div
              className='flex items-center'
            >
              <img 
                className='h-16 w-16 rounded-full'
                src={UM}
                alt='University Of Monastir'
              />
              <h1
                className='sm:text-3xl lg:text-xl opacity-80 ml-2'
              >
                {t("education_section.university_of_monastir.name")}
              </h1>
            </div>
            <div
              className='mt-4'
            >
              <h1
                className='text-xl opacity-90'
              >
                {t("education_section.university_of_monastir.subtitle")}
              </h1>
              <h1
                className='text-md opacity-70'
              >
                {t("education_section.university_of_monastir.date")}
              </h1>
              <h4 className='sm:text-xl lg:text-lg opacity-80 mt-4'>
                {t("education_section.university_of_monastir.courses_title")}
              </h4>
              <div
                className='grid grid-cols-2'
              >
                {courses['fsm'].map((course) => {
                  return (
                    <div
                      className='flex items-center'
                    >
                      <IconButton
                        size='small'
                        color='secondary'
                      >
                        <BsDot />
                      </IconButton>
                      <h4 className='text-sm'>
                        {t("education_section.university_of_monastir.courses." + course)}
                      </h4>
                    </div>
                  );
                })}
              </div>
              <h4 className='sm:text-xl lg:text-lg opacity-80 mt-4'>{t("education_section.price")}</h4>
              <div
                className='flex items-center'
              >
                <IconButton
                  color='secondary'
                >
                  <FaGraduationCap />
                </IconButton>
                <h4>
                {t("education_section.valedictorian")}
                </h4>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div
            className='font-kanit'
          >
            <div
              className='flex items-center'
            >
              <img 
                className='h-16 w-16 rounded-full'
                src={MD}
                alt='Manou Diatta'
              />
              <h1
                className='sm:text-3xl lg:text-xl opacity-80 ml-4'
              >
                {t("education_section.manou_diatta.name")}
              </h1>
            </div>
            <div
              className='mt-4'
            >
              <h1
                className='text-xl opacity-90'
              >
                {t("education_section.manou_diatta.subtitle")}
              </h1>
              <h1
                className='text-md opacity-70'
              >
                {t("education_section.manou_diatta.date")}
              </h1>
              <h4 className='sm:text-xl lg:text-lg opacity-80 mt-4'>{t("education_section.price")}</h4>
              <div
                className='flex items-center'
              >
                <IconButton
                  color='secondary'
                >
                  <FaGraduationCap />
                </IconButton>
                <h4>
                {t("education_section.valedictorian")}
                </h4>
              </div>
            </div>
          </div>
        </TabPanel>
      </Box>
    </div>
  )
}

export default Education