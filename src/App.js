import './App.css';
// import Login from './Components/Login';
// import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import Loader from "./Assets/Loader.svg"
import ImageFilter from './Components/ImageFilter';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <img src={Loader} alt="pig loader"/> */}
      <ImageFilter/>
      {/* <Home /> */}
      {/* <Signup/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
