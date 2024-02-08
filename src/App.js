import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Nav from './Components/Nav';
import Sidebar from './Components/Sidebar';
import Signup from './Components/Signup';
import Help from './Components/Help';
import './Assets/CSS/Home.css';
import './Assets/CSS/Signup.css';
import './Assets/CSS/login.css';
import './Assets/CSS/Help.css';
import './Assets/CSS/Nav.css';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/help" element={<Help />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
