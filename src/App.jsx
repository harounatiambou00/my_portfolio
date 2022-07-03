import React, { useState } from 'react';
import './app.css';
import {CssBaseline} from '@mui/material';
import { ThemeContext } from './contexts/ThemeContext';
import { useContext } from 'react';

//Pages importation
import {Home, AboutMe, ContactMe, Experiences, Services, Skills, Portfolio} from './pages';

//Components importation
import { Navbar } from './components';

import {Toolbar} from '@mui/material';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <ThemeContext.Provider value={{isDarkTheme, setIsDarkTheme}}>
      <div
        id='app'
        style={isDarkTheme ? {backgroundColor: '#041C32'} : {backgroundColor: "white"}}
      >
        <CssBaseline />
        <Navbar />
        <Toolbar />
        <main>
          <Home />
          <AboutMe />
          <Skills />
          <Experiences />
          <Portfolio />
          <Services />
          <ContactMe />
        </main>
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