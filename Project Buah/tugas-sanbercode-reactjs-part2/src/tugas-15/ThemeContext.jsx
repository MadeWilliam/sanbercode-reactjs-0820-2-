import { createContext } from 'react';

export const themes = {
    light: {
        background: 'whitesmoke',
        color: 'black',
    },
    dark: {
        background: 'black',
        color: 'white'
    },
};

export const ThemeContext = createContext();