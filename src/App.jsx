import './App.css'
import HomePage from './pages/HomePage'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Header from './components/Header';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#F0F8FF', // aliceblue in hex
    },
    secondary: {
      main: '#dc8058', 
    },
    background: {
      default: '#F0F8FF', // aliceblue in hex
    },
  },
  typography: {
    fontFamily: 'Nunito, Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header/>
      <HomePage/>
    </ThemeProvider>
  )
}

export default App
