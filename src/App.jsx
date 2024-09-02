// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StudentDetailPage from './pages/StudentDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/student/:id" element={<StudentDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
