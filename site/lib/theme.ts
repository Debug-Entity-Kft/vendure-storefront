import { createTheme } from '@mui/material/styles'

// export const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   fallback: ['Helvetica', 'Arial', 'sans-serif'],
// });

// Create a theme instance.
const theme = createTheme({
  palette: {
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

export default theme
