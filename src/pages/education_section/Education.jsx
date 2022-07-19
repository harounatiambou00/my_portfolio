import React, {useState} from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import PropTypes from 'prop-types';

import {Tabs, Tab, Box, IconButton} from '@mui/material';

import UM from '../../assets/images/university_of_monastir.png';
import MD from '../../assets/images/manou_diatta.png';

import {BsCheckAll} from 'react-icons/bs';

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
  const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div 
      className='app__section sm:h-auto lg:h-screen items-center justify-center sm:pt-48 lg:pt-0'
      id='education__section'
      style={isDarkTheme ? {backgroundColor: '#121212'} : {backgroundColor: "#EEEEEE"}}
    >
      <h1
        className='sm:text-6xl lg:text-4xl opacity-80 mb-4 sm:mt-0 lg:mt-10'
      >
        Education
      </h1>
      <Box
        sx={{display: 'flex'}}
        className='sm:w-5/6 lg:w-5/6 font-kanit bg-white dark:bg-darkElevation'
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
                University of Monastir, Tunisia
              </h1>
            </div>
            <div
              className='mt-4'
            >
              <p>
                I'm currently an undergraduated student(3th year) at the university of Monastir, class of 2020-2023.<br />
                I'm pursuing a bachelor in Software Engineering from which <br/>I'll be graduated by the end of August 2023 (if everything goes well).
              </p>
              <h4 className='sm:text-xl lg:text-lg opacity-80 mt-4'>Awards</h4>
              <div
                className='flex items-center'
              >
                <IconButton
                  color='secondary'
                >
                  <BsCheckAll />
                </IconButton>
                <h4>
                  Valedictorian of the first year with a grade of 15.66 over 20.
                </h4>
              </div>
              <div
                className='flex items-center'
              >
                <IconButton
                  color='secondary'
                >
                  <BsCheckAll />
                </IconButton>
                <h4>
                  Valedictorian of the second year with a grade of 15.29 over 20.
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
                CSP Manou Diatta, NIGER
              </h1>
            </div>
          </div>
          <div
              className='mt-4'
            >
              <p>
                During this period of time, I was a a high school student at Manou Diatta a High School in NIGER my beloved country.<br />
                I specialized in experimental sciences. 
              </p>
              <h4 className='sm:text-xl lg:text-lg opacity-80 mt-4'>Awards</h4>
              <div
                className='flex items-center'
              >
                <IconButton
                  color='secondary'
                >
                  <BsCheckAll />
                </IconButton>
                <h4>
                  Valedictorian of the last year with a grade of 14.2 over 20.
                </h4>
              </div>
            </div>
        </TabPanel>
      </Box>
    </div>
  )
}

export default Education