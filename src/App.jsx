import React, { useState, useEffect } from 'react';
import './App.css';
import {CssBaseline} from '@mui/material';
import { ThemeContext } from './contexts/ThemeContext';

//Pages importation
import {Home, AboutMe, ContactMe, Education, Services, Skills, Portfolio} from './pages';

//Components importation
import { Navbar, SocialMediasIcons, MobileDeviceDrawer, LinkParticles, Footer } from './components';

import {Toolbar} from '@mui/material';

import { useTranslation } from 'react-i18next';

const App = () => {
  /**
   * The isDarkTheme state will help us to toggle between light and dark themes.
   * By default we want to initialize it to true if the value stored in the localStorage.theme, false if not, and also keep its value in the local storage local storage.
   * So that when the user will come again the theme will be as he wanted it the first time.
  */
  const [isDarkTheme, setIsDarkTheme] = useState(
    () => localStorage.theme === 'dark'
  );

  useEffect(() => {
    //we want the html element of the DOM.
    const html = window.document.documentElement;

    /*we want the value of the previous state which is the opposite of the current state.
      And we remove it from the classList of the html element so that tailwind css will notice that the mode changed 
    */
    const prevTheme = isDarkTheme ? 'light' : 'dark';
    html.classList.remove(prevTheme);

    /*we want the value of the next state which is the value of the current state.
      And we add it to the classList of the html element so that tailwind css will notice that the mode changed 
    */
    const nextTheme = isDarkTheme ? 'dark' : 'light';
    html.classList.add(nextTheme);

    localStorage.setItem("theme", nextTheme);
  }, [isDarkTheme]);//repeat if the value of the isDarkTheme state changes.

  //this state will help us to open and close the drawer on mobile devices.
  const [mobileDrawerIsOpen, setmobileDrawerIsOpen] = useState(false);
  
  /**
   * This method will help us to open/close the drawer on mobile devise 
   */
  const toggleMobileDeviceDrawer = (value) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setmobileDrawerIsOpen(value)
  }

  //translation hook from i18Next
  const {t} = useTranslation();

  return (
    <ThemeContext.Provider value={{isDarkTheme, setIsDarkTheme, mobileDrawerIsOpen, toggleMobileDeviceDrawer, t}}>
      <div
        id='app'
        className='bg-light dark:bg-dark'
      >

        <CssBaseline />
        <Navbar />
        {/*This toolbar is used to ignoren the space unde the appbar*/}
        <Toolbar />
        <main
          className='text-dark dark:text-light bg-light dark:bg-dark'
        >
          <LinkParticles />
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
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}


export default App