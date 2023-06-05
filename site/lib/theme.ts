import { createTheme } from '@mui/material/styles'

// export const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   fallback: ['Helvetica', 'Arial', 'sans-serif'],
// });

// Create a theme instance.
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#714bb9',
    },
    secondary: {
      main: '#635b70',
    },
    error: {
      main: '#ba1a1a',
    },
  },
  typography: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  },
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#714bb9',
    },
    secondary: {
      main: '#635b70',
    },
    error: {
      main: '#ba1a1a',
    },
  },
})
