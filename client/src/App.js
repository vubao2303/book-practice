import logo from './logo.svg';
import './App.css';
import Nav from "./components/NavBar"
import SearchBar from "./components/SearchBar"
import Result from "./components/ResultCard"
function App() {
  return (
    <div className="App">
      <Nav />
      <SearchBar />
      {/* <Result /> */}

    </div>
  );
}

export default App;
