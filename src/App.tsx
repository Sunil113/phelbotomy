import React from 'react';
import './App.css';
import { BrowserRouter , Routes , Route , Link } from 'react-router-dom';
import LoginWeb from './pages/LoginWeb';
// import LoginWeb from './pages/LoginWeb';
import ForgetPassword from './pages/ForgetPassword';
import OTPverfiy from './pages/OTPverfiy';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path='/' element={<LoginWeb/>}/>
        <Route path='/forgot-password' element={<ForgetPassword/>}/>
        <Route path='/verify-otp' element={<OTPverfiy/>}/>
        <Route path='/home' element={<Dashboard/>}/>      
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
