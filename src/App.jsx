import React, { useState } from 'react';
import './App.css';
import {CssBaseline} from '@mui/material';
import { ThemeContext } from './contexts/ThemeContext';
import { useContext } from 'react';

//Pages importation
import {Home, AboutMe, ContactMe, Education, Services, Skills, Portfolio} from './pages';

//Components importation
import { Navbar, SocialMediasIcons, MobileDeviceDrawer } from './components';

import {Toolbar} from '@mui/material';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [mobileDrawerIsOpen, setmobileDrawerIsOpen] = useState(false);
  
  const toggleMobileDeviceDrawer = (value) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setmobileDrawerIsOpen(value)
  }

  return (
    <ThemeContext.Provider value={{isDarkTheme, setIsDarkTheme, mobileDrawerIsOpen, toggleMobileDeviceDrawer}}>
      <div
        id='app'
        style={isDarkTheme ? {backgroundColor: '#041C32'} : {backgroundColor: "#EEEEEE"}}
      >
        <CssBaseline />
        <Navbar />
        <Toolbar />
        <main
          className={isDarkTheme? 'text-light' : 'text-dark'}
        >
          <Home />
          <AboutMe />
          <Skills />
          <Education />
          <Portfolio />
          <Services />
          <ContactMe />
        </main>
        <SocialMediasIcons />
        <MobileDeviceDrawer />
      </div>
    </ThemeContext.Provider>
  )
}


const Test = () => {
  const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);
  return (
    <button onClick={() => setIsDarkTheme(!isDarkTheme)}>Change theme</button>
  )
}


export default App