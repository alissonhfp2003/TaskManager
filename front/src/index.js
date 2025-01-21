import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Navbar from './components/NavBar/index';
import NewTask from './pages/NewTask/index';
import EditTask from './pages/EditTask'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Navbar /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/NewTask" element={<NewTask />} />
      <Route path="/EditTask/:id" element={<EditTask />} />
    </Routes>
  </Router>
);