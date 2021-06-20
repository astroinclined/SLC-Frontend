import './App.css';
import '../react/css/header.css'
import ClippedDrawer from './components/ClippedDrawer'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import ErrorBoundary from './ErrorBoundary';

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
      <ErrorBoundary>
        <div className="App">
          <ClippedDrawer />
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
