import { Box } from '@mui/material';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import DataProvider from './context/DataProvider.js'

function App() {
  return (
    <DataProvider>
      <Header/>
      <Box style={{marginTop:'55px'}}>
        <Home/>
      </Box>
    </DataProvider>
  );
}

export default App;
