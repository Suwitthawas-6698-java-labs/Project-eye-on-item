import './App.css';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Pages/Home';
import Howto from './component/Pages/Howto';
import Prevent from './component/Pages/Prevent';
import PreventElectronicMoblie from './component/Pages/PreventElectronicMoblie';
import PreventElectronicLaptop from './component/Pages/PreventElectronicLaptop';
import PreventElectronicWatch from './component/Pages/PreventElectronicWatch';
import PreventPerson from './component/Pages/PreventPerson';
import PreventEtc from './component/Pages/PreventEtc';
import PreventPet from './component/Pages/PreventPet';
import MuTeLoo from './component/Pages/MuTeLoo';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='nav'>
          <Navbar />
        </div>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Howto' element={<Howto />} />
            <Route path='/Prevent' element={<Prevent />} />
            <Route path='/Prevent/Electronic/Moblie' element={<PreventElectronicMoblie />} />
            <Route path='/Prevent/Electronic/Laptop' element={<PreventElectronicLaptop />} />
            <Route path='/Prevent/Electronic/SmartWatch' element={<PreventElectronicWatch />} />
            <Route path='/Prevent/Personal' element={<PreventPerson />} />
            <Route path='/Prevent/Etc' element={<PreventEtc />} />
            <Route path='/Prevent/Pet' element={<PreventPet />} />
            <Route path='/Mu-Te-Loo' element={<MuTeLoo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;