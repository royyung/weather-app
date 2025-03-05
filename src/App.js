import logo from './logo.svg';
import './App.css';
import Homepage from './component/homepage';
import LocationContextProvider from './context/location';

function App() {
  return (
    <LocationContextProvider>
      <div className="App">
        <Homepage />
      </div>
    </LocationContextProvider>
  );
}

export default App;
