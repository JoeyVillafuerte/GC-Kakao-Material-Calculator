import React from 'react';
import Navbar from './navbar stuff/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/About';
import Calculator from './pages/calculator';
import ErrorPage from './pages/ErrorPage';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/calculator' element={<Calculator/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </Router>
  );
}

export default App;