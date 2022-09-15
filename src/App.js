import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register/Register';
import Chat from './pages/Chat/Chat';
import Login from './pages/Login/Login';

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Chat/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;