import './App.css';
// import Loader from "./Assets/Loader.svg"
import Navbar from './Components/Navbar';
// import Home from './Components/Home';
import ImageFilter from './Components/ImageFilter';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <img src={Loader} alt="pig loader"/> */}
      <ImageFilter/>
      {/* <Home /> */}
    </div>
  );
}

export default App;
