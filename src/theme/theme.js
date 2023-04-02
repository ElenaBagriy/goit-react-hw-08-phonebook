import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#26a69a',
            light: '#51b7ae',
            dark: '#1a746b',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#a62633',
            light: '#b7515b',
            dark: '#741a23',
        },
        error: {
            main: '#b7515b',
        },
        
        text: {
            primary: '#000000',
            secondary: '#000000',
        },
    },
});