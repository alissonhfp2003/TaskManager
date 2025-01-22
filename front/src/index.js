import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Navbar from './components/NavBar/index';
import NewTask from './pages/NewTask/index';
import EditTask from './pages/EditTask'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <Router>
    <Navbar /> 
    <ToastContainer position="top-right" autoClose={3000}/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/NewTask" element={<NewTask />} />
      <Route path="/EditTask/:id" element={<EditTask />} />
    </Routes>
  </Router>
);