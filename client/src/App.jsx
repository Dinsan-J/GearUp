import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Foot from './Foot';
import Login from './Login';
import Navigation from './Navigation';
import Aboutus from './Aboutus';
import './Login.css';
import './App.css';
import Contactus from './Contactus';
import Feedback from './Feedback';
import Forpass from './Forpass';
import Sellform from './Sellform';
import BuyVehicle from './BuyVehicle';

function App() {
  return (
    <>
      <Navigation />
      <Foot />
      <div className='App'>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Aboutus' element={<Aboutus />} />
          <Route path='/Feedback' element={<Feedback />} />
          <Route path='/Contactus' element={<Contactus />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Forpass' element={<Forpass />} />
          <Route path='/Sellform' element={<Sellform />} />
          <Route path='/BuyVehicle' element={<BuyVehicle />} />
          <Route path='/' element={<Navigate to='/Home' />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
