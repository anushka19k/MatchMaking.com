import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import Joining from './Components/Joining';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Joining/>
    </div>
  );
}

export default App;
