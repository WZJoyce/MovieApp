import './App.css';
import { Search } from './page/search';
import { MovieContextProvider } from './components/context/movie-contextprovider';

function App() {

  return (
    < MovieContextProvider>
      <div className="App">
        <Search></Search>
      </div>
    </MovieContextProvider >
  );
}

export default App;
