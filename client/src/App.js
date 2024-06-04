import React from 'react';
import './App.css';
import {  Routes, Route } from 'react-router-dom';

// Import your components
import Navbar from './components/Navbar';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Login from './components/Login';
import Cards from './components/Cards';
import Home from './components/Home';
import AllRegister from './components/AllRegister';
import CodeEditor from './core Components/CodeEditor';
import SpecialSettings from './core Components/Specialsettings';

function App() {
  return (
    
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cards" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Cards />} />
          <Route path="/register/:category" element={<AllRegister />} />
          <Route path="/code-editor" element={<CodeEditor />} />
          <Route path="/settings" element={<SpecialSettings />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    
  );
}

export default App;
