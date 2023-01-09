import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register/Register';
import Chat from './pages/Chat/Chat';
import Login from './pages/Login/Login';
import Avatar from './pages/Avatar/Avatar';

const Chat = lazy(() => import('./pages/Chat/Chat'));
const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/avatar" element={<Avatar/>} />
        <Route path="/" element={<Chat/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;