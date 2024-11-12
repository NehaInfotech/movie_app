import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Components/Pages/HomePage';
import Movies from './Components/Pages/Movies';
import Favourits from './Components/Pages/Favourits'
import Top_rated from './Components/Pages/Top_rated'
import Profile from './Components/More_pages/Profile';
import Settings from './Components/More_pages/Settings';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Pages/Movies" element={<Movies/>} />
          <Route path="/Pages/Top_rated" element={<Top_rated/>} />
          <Route path="/Pages/Favourits" element={<Favourits/>} />
          <Route path="/More_pages/Profile" element={<Profile/>} />
          <Route path="/More_pages/Settings" element={<Settings/>} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
 