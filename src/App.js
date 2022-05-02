import {Routes , Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ImageFilter from './Components/ImageFilter';
import Navbar from './Components/Navbar';
import {Authentication} from "./Components/Session/index"

function App() {
  return (
      <div className="App">
    <Routes>
      <Route exact path={'/'} element={<><Navbar/>
        <Home/></>} />
      <Route exact path={'/image'} element={<><Navbar/>
        <ImageFilter/></>}/>
      <Route exact path={'/video'} element={<><Navbar/>
        <ImageFilter/></>} />
      <Route exact path={'/signup'} element={<Signup/>}/>
      <Route exact path={'/login'} element={<Login/>}/>
    </Routes>
    {/* <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={ <Signup/> } />
      </Routes> */}
    </div>
  );
}

export default Authentication(App);
