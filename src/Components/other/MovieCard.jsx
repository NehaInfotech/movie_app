import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';// import './MovieCard.css';

const MovieCard = ({ movie, darkMode,setDarkMode  }) => (
  <Container>
  <Box className="movie-card">
    <img src={movie.image} alt={movie.title} className="movie-image" />
    <Box className="overlay">
      <Box className="movie-title">{movie.title}</Box>
      <Box className="movie-info">
        {movie.year} • {movie.runtime} • {movie.language} • {movie.rating}
      </Box>
      <Box sx={{display:"flex"}}>

      <Button sx={{mr:1}} className="watch-now" >Watch Now</Button>
      <Button className="bookmark">+</Button>
      
    </Box>               
      </Box>
  </Box>
  </Container>
);

export default MovieCard;