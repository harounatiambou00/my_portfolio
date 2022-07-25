import React from 'react';
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
  const {isDarkTheme} = useContext(ThemeContext);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div 
      className='app__section sm:h-auto lg:h-screen items-center justify-center sm:pt-48 lg:pt-0'
      id='education__section'
    >
      <h1
        className='sm:text-6xl lg:text-4xl opacity-80 mb-4 sm:mt-0 lg:mt-10 font-righteous'
      >
        &Eacute;ducation
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
                University de Monastir, Tunisie
              </h1>
            </div>
            <div
              className='mt-4'
            >
              <p>
              Je suis actuellement étudiant en licence à l'université de Monastir, promotion 2020-2023.<br />
              Je serai diplômé d'ici fin août 2023 (si tout se passe bien).
              </p>
              <h4 className='sm:text-xl lg:text-lg opacity-80 mt-4'>Prix</h4>
              <div
                className='flex items-center'
              >
                <IconButton
                  color='secondary'
                >
                  <BsCheckAll />
                </IconButton>
                <h4>
                  Major de la promotion en première année.
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
                  Major de la promotion en deuième année.
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
                Durant cette période, j'étais élève au Lycée Manou Diatta au NIGER mon cher pays.<br />
                O&Uagrave; j'ai décroché mon bac D (Sciences expérimentales) avec la mention bien             
              </p>
              <h4 className='sm:text-xl lg:text-lg opacity-80 mt-4'>Prix</h4>
              <div
                className='flex items-center'
              >
                <IconButton
                  color='secondary'
                >
                  <BsCheckAll />
                </IconButton>
                <h4>
                  Major de la promotion en dernière année.
                </h4>
              </div>
            </div>
        </TabPanel>
      </Box>
    </div>
  )
}

export default Education