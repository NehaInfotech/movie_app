import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import styled, { keyframes } from 'styled-components';
import { Box, Typography, Button } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Keyframes for animations
const fadeZoomIn = keyframes`
  0% { opacity: 0; transform: scale(1); }
  100% { opacity: 1; transform: scale(1.05); }
`;

const slideInFromLeft = keyframes`
  0% { opacity: 0; transform: translateX(-30px); }
  100% { opacity: 1; transform: translateX(0); }
`;

const overlayFade = keyframes`
  0% { background: rgba(0, 0, 0, 0.4); }
  100% { background: rgba(0, 0, 0, 0.6); }
`;

// Styled components
const SliderContainer = styled.div`
  width: 100%;
  margin: auto;
  overflow: hidden;
`;

const MainSlide = styled.div`
  position: relative;
  animation: ${fadeZoomIn} 1s ease-out;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const ThumbnailImage = styled.img`
  width: 180px;
  height: 100px;
  cursor: pointer;
  object-fit: cover;
  border-radius: 10px;
  margin: 0 px;
  border: 3px solid transparent;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: scale(1.15);
    border-color: #ffd700;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  padding: 2rem;
  animation: ${overlayFade} 1s ease-out;
`;

const Title = styled(Typography)`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;
  animation: ${slideInFromLeft} 0.7s ease-out;
`;

const Description = styled(Typography)`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  width: 50%;
  animation: ${slideInFromLeft} 0.7s ease-out 0.2s;
`;
const latest = styled(Typography)`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  color:"red";
  width: 50%;
  animation: ${slideInFromLeft} 0.7s ease-out 0.2s;
`;
const SubscribeButton = styled(Button)`
  background-color: rgba(255, 255, 255, 0.8);
  color: #000;
  font-weight: bold;
  width: 30%;
  transition: transform 0.2s ease;
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: scale(1.05);
  }
`;

const Type = styled(Typography)`
  font-size: 1.2rem;
  font-style: italic;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
`;

// Movie data
const movies = [
  {
    image: "https://m.media-amazon.com/images/I/81nuRoYxZHL.jpg",
    title:"sukuna ",
    type:"anime",
    Description:"lorem ipsum dloler smit lorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smit"
  },  {
    image: "https://i.redd.it/nhcopqm3hjz71.png",
    title:"sukuna ",
    type:"anime",
    Description:"lorem ipsum dloler smit lorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smit"
  },  {
    image: "https://i.redd.it/nhcopqm3hjz71.png",
    title:"sukuna ",
    type:"anime",
    Description:"lorem ipsum dloler smit lorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smit"
  },  {
    image: "https://i.redd.it/nhcopqm3hjz71.png",
    title:"sukuna ",
    type:"anime",
    Description:"lorem ipsum dloler smit lorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smit"
  },  {
    image: "https://i.redd.it/nhcopqm3hjz71.png",
    title:"sukuna ",
    type:"anime",
    Description:"lorem ipsum dloler smit lorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smit"
  },  {
    image: "https://i.redd.it/nhcopqm3hjz71.png",
    title:"sukuna ",
    type:"anime",
    Description:"lorem ipsum dloler smit lorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smit"
  },  {
    image: "https://i.redd.it/nhcopqm3hjz71.png",
    title:"sukuna ",
    type:"anime",
    Description:"lorem ipsum dloler smit lorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smit"
  },  {
    image: "https://i.redd.it/nhcopqm3hjz71.png",
    title:"sukuna ",
    type:"anime",
    Description:"lorem ipsum dloler smit lorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smit"
  },  {
    image: "https://i.redd.it/nhcopqm3hjz71.png",
    title:"sukuna ",
    type:"anime",
    Description:"lorem ipsum dloler smit lorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smit"
  },
{
  image: "https://www.hindustantimes.com/ht-img/img/2024/02/06/1600x900/188fa-17071635800177-1920_1707213394245_1707213401458.webp",
  title:"itadori",
  type:"anime",
  Description:"lorem ipsum dloler smit lorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smit"
}
];

function HomePage() {
  const mainSlider = useRef(null);
  const thumbnailSlider = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settingsMain = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: thumbnailSlider.current,
    initialSlide: currentSlide,
  };

  const settingsThumbnail = {
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: mainSlider.current,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '5px',
  };

  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
    mainSlider.current.slickGoTo(index);
  };

  return (
    <Box sx={{ mt: '13px', ml: '60px', position: 'relative' }}>
      <SliderContainer>
        <Slider {...settingsMain} ref={mainSlider}>
          {movies.map((movie, index) => (
            <MainSlide key={index}>
              <Image src={movie.image} alt={movie.title} />
              <Overlay>
                <Title variant="h2">{movie.title}</Title>
                <Description variant="body1">{movie.description}</Description>
                <Type variant="subtitle1">Genre: {movie.type}</Type>
                <SubscribeButton variant="contained">Subscribe to Watch</SubscribeButton>
              </Overlay>
            </MainSlide>
          ))}
        </Slider>

        <Box sx={{ mt: 2 }}>
            <Slider {...settingsThumbnail} ref={thumbnailSlider}>
            {movies.map((movie, index) => (
              <div key={index} onClick={() => handleThumbnailClick(index)}>
                <ThumbnailImage src={movie.image} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </Box>
      </SliderContainer>
    </Box>
  );
}

export default HomePage;
