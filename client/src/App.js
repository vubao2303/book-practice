import logo from './logo.svg';
import './App.css';
import Nav from "./components/NavBar"
import SearchBar from "./components/SearchBar"
import Result from "./components/ResultCard"
import Books from "./pages/Books"
function App() {
  return (
    <div className="App">
      <Nav />
      <Books />
      <Result />

    </div>
  );
}

export default App;
