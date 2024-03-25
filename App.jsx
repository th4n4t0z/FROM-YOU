import React from 'react';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import {  Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
        </Routes>

    </div>
  );
}

export default App;
