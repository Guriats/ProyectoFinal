import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Home from "./pages/Home/Home.jsx";
import Color from "./pages/Color/Color.jsx";
import Diseño from "./pages/Diseño/Diseño.jsx";
import Foto from "./pages/Foto/Foto.jsx";
import Web from "./pages/Web/Web.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/foto" element={<Foto />} />
          <Route path="/diseño" element={<Diseño />} />
          <Route path="/color" element={<Color />} />
          <Route path="/web" element={<Web />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
