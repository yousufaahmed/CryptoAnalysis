// import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/home';
import About from './pages/about';
import Results from './pages/results';

function App() {

  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;