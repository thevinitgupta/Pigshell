import './App.css';
// import ImageDisplay from './Components/ImageDisplay';
// import Loader from "./Assets/Loader.svg"
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <img src={Loader} alt="pig loader"/> */}
      {/* <ImageDisplay/> */}
      <Home />
    </div>
  );
}

export default App;
