import './App.css';
import Header from './components/header/Header';
import DataProvider from './context/DataProvider.js'

function App() {
  return (
    <DataProvider>
      <Header/>
    </DataProvider>
  );
}

export default App;
