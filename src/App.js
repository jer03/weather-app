import './App.css';
import Weather from './components/getweather.jsx'

function App() {
  
  return (
    <div className="App">
      <img className="images" src="/cloud.png" alt="clouds" />
      <Weather />
    </div>
  );
}

export default App;
