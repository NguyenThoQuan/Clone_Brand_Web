import './App.scss';
import logo from '../Images/logo-colored.png';
import Search from '../Components/Navigator/SearchBox/Search';
import Nav from '../Components/Navigator/Nav/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt='logo' />
        <Search />
        <Nav />
      </header>
    </div>
  );
}

export default App;
