import React from 'react';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Routes>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
