import React, { useState } from 'react';
import './app.css';
import {CssBaseline} from '@mui/material';
import { ThemeContext } from './contexts/ThemeContext';
import { useContext } from 'react';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <ThemeContext.Provider value={{isDarkTheme, setIsDarkTheme}}>
      <div
        id='app'
        style={isDarkTheme ? {backgroundColor: '#041C32'} : {backgroundColor: "white"}}
      >
        <CssBaseline />
        App
        <Test />
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