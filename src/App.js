import './App.css';
import Weather from './components/getweather.jsx'

function App() {
  
  return (
    <div className="App">
      <h1> The Simple Weather App</h1>
      <img className="images" src="/cloud.png" alt="clouds" />
      <Weather />
    </div>
  );
}

export default App;
