import './App.css';
import CurrentWeather from './components/current_weather/CurrentWeather';
import Search from './components/search/Search';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
