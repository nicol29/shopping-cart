import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Store from './components/Store/Store';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Store />
    </div>
  );
}

export default App;
