import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormLogin from './Components/FormLogin';
import History from './pages/History';
import FormRegister from './Components/FormRegister';
import HitosMedicina from './pages/HitosMedicina';
import Ubicacion from './pages/Ubicacion';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App/>} />
        <Route path="/FormLogin" element={<FormLogin/>} />
        <Route path='/FormRegister' element={<FormRegister/>} />
        <Route path='/History' element={<History/>} />
        <Route path='/HitosMedicina' element={<HitosMedicina/>} />
        <Route path='Ubicacion' element={<Ubicacion/>} />
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
