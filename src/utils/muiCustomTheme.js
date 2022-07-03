import {createTheme} from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        type: "light",
        primary: {
            main: "#041C32"
        },
        secondary: {
            main: "#10a395"
        },
        warning: {
            main: '#FFF323'
        }
    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
    },
});