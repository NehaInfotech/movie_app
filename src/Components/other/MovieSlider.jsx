// MovieSlider.js
import React from 'react';
import Slider from 'react-slick';
import MovieCard from './MovieCard';

const MovieSlider = ({ movies }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjust based on screen size
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 375,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 320,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {movies.map((movie) => (
        <MovieCard  key={movie.id} movie={movie} />
      ))}
    </Slider>
  );
};

export default MovieSlider;