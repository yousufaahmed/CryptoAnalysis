// src/App.js

import React, { useState, useEffect } from 'react';
// import { BrowserRouter as  Router, Route, Routes } from "react-router-dom";
import './css/tailwind.css';
// import './css/App.css';

import Home from './pages/home';
import Header from './components/Header';
import Footer from './components/Footer';
// import Home2 from './pages/home2';

function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/hello')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setGreeting(data.message);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <h1 className="App-title">{greeting}</h1>
      <Home></Home>
      {/* <Home2></Home2> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
