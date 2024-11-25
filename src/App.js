import React, { useState, useEffect } from 'react'; // Add useEffect here
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Components/Pages/HomePage';
import Movies from './Components/Pages/Movies';
import Favourits from './Components/Pages/Favourits';
import Top_rated from './Components/Pages/Top_rated';
import Profile from './Components/More_pages/Profile';
import Settings from './Components/More_pages/Settings';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  // Initialize favorites state and load from localStorage
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const [darkMode, setDarkMode] = useState(false);

  // Sync favorites with localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie) => {
    if (!favorites.some((fav) => fav.title === movie.title)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFavorite = (movie) => {
    setFavorites(favorites.filter((fav) => fav.title !== movie.title));
  };

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: '#f0f2f5',
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Pages/Movies" element={<Movies />} />
          <Route
            path="/Pages/Top_rated"
            element={<Top_rated favorites={favorites} addFavorite={addFavorite} />}
          />
          <Route
            path="/Pages/Favourits"
            element={<Favourits favorites={favorites} removeFavorite={removeFavorite} />}
          />
          <Route path="/More_pages/Profile" element={<Profile />} />
          <Route path="/More_pages/Settings" element={<Settings />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
