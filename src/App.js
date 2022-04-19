import './App.css';
import ImageDisplay from './Components/ImageDisplay';
import Loader from "./Assets/Loader.svg"
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <img src={Loader} alt="pig loader"/>
      {/* <ImageDisplay/> */}
    </div>
  );
}

export default App;
