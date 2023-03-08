import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navigation from './Navigation';
import Loginbox from './Loginbox';
import Infor from './Infor';
import Cards from './Cards';
import Signup from './Signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Signup' element={<Signup/>}/>

  </Routes>
  </BrowserRouter>

  </React.StrictMode>
);
