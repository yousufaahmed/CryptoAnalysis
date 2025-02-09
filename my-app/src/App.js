import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
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
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/hello')
      .then(response => {
        setGreeting(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching greeting:', error);
      });
  }, []);

  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <Header />
        <h1 className="App-title text-center my-3">{greeting}</h1>
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