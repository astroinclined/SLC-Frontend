import './App.css';
import '../react/css/header.css'
import ClippedDrawer from './components/ClippedDrawer'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      contained: {
        textTransform: 'none',
      },
      text: {
        textTransform: 'none',
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ClippedDrawer />
      </div>
    </ThemeProvider>
  );
}

export default App;
