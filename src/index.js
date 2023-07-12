import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';

import { BrowserRouter,Route, Routes } from 'react-router-dom';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
