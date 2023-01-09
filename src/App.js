import React, { Suspense, lazy} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Chat = lazy(() => import('./pages/Chat/Chat'));
const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));
const Avatar = lazy(() => import('./pages/Avatar/Avatar'));

function App(props) {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/avatar" element={<Avatar/>} />
        <Route path="/" element={<Chat/>} />
      </Routes>
      </Suspense>
    </BrowserRouter>

  );
}

export default App;