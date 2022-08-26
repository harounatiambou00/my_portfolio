import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from '@mui/material/styles';
import { theme } from './utils/muiCustomTheme';
import App from './App';
import './index.css';
import 'flag-icon-css/css/flag-icons.min.css';

import i18n from "i18next";
import {initReactI18next } from "react-i18next";

import CircularProgress from '@mui/material/CircularProgress';


/**
 * This package is used to detect the language from different sources in one line of code.
 */
import LanguageDetector from 'i18next-browser-languagedetector';

//This is a utility that allows us to load the different languages files from any source we want. In this case from the assets folder.
import HttpApi from 'i18next-http-backend';

/**
 * i18Next initialization see https://react.i18next.com/getting-started basic example section for details. 
 */
i18n
 .use(initReactI18next) // passes i18n down to react-i18next
 .use(LanguageDetector)//passes LanguageDetector to react-i18next
 .use(HttpApi)
 .init({
   fallbackLng: "en",
   detection: {
      order: ['cookie', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie']
   },
   backend:{
    loadPath: '/assets/locales/{{lng}}/translation.json'
   },
 });

 const LoadingMarkup = () => {
    return(
      <div
        className='h-screen w-screen flex justify-center items-center bg-light dark:bg-dark'
      >
        <CircularProgress color='secondary'/>
      </div>
    );
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<LoadingMarkup />}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Suspense>
);