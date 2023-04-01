
import './App.css';
import Navbar from './common/Navbar';
import {Routes,Route} from 'react-router-dom'
import Profile from './Profile';
import Home from './Home';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
     
        <Route path='/' element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
