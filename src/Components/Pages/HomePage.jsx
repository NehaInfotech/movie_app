import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import styled, { keyframes } from 'styled-components';
import { Box, Typography, Button, Container } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

import MovieSlider from '../other/MovieSlider';


const fadeZoomIn = keyframes`
  0% { opacity: 0; transform: scale(1.2); }
  100% { opacity: 1; transform: scale(1); }
`;

const slideInFromLeft = keyframes`
  0% { opacity: 0; transform: translateX(30px); }
  100% { opacity: 1; transform: translateX(0); }
`;

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

  @media (max-width: 1200px) { /* lg */
    height: 100vh;
    width:100%;

  }
  @media (max-width: 992px) { /* md */
    height: 100vh;
    width:100%;
 object-fit: cover;
  }
  @media (max-width: 768px) { /* sm */
    height: 70vh;
    width:100%;
     object-fit: cover;

  }
  @media (max-width: 576px) { /* xs */
    height: 40vh;
    width:100%;
     object-fit: cover;
  }
`;

const ThumbnailImage = styled.img`
  width: 120px;
  height: 80px;
  cursor: pointer;
  object-fit: cover;
  border-radius: 10px;
  margin: 10px;
  border: 3px solid transparent;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.10);
    border-color: rgba(135, 206, 235, 0.9);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) { /* sm */
    width: 90px;
    height: 60px;
  }
  @media (max-width: 576px) { /* xs */
    width: 70px;
    height: 50px;
  }
`;

const Overlay = styled.div`
    position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   color: #fff;
   padding: 2rem;
   transition: background 0.5s ease;

   // Radial shadow from bottom-left corner
  background: radial-gradient(
    circle at bottom left,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0) 70%
  );

  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }

  &:hover {
      transition: background 0.4s ease-in-out;

    background: radial-gradient(
      circle at bottom left,
      rgba(0, 0, 0, 0.9 ),
      rgba(0, 0, 0, 0) 70%
    );
    transition:  0.5s ease;
   }
 `;



const Text = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
  padding: 2rem;
`;

const Description = styled(Typography)`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  width: 50%;
  animation: ${slideInFromLeft} 0.7s ease-out 0.2s;

`;

const Type = styled(Typography)`
  font-size: 1.2rem;
  font-style: italic;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
  animation: ${slideInFromLeft} 0.7s ease-out 0.2s;
`;

const SubscribeButton = styled(Button)`
  background-color: rgba(0, 0, 139, 0.5)!important;
 color:#fff !important;
  font-weight: bold;
  width: 30%;
  transition: transform 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 139, 0.9)!important;
    transform: scale(1.05);
  }

  @media (max-width: 576px) { /* xs */
    width: 70px;
    font-size: 7px !important;
  }
`;

const AddFav = styled(Button)`
  background-color: rgba(0, 0, 139, 0.5)!important;
  
 color:#fff !important;

  font-weight: bold;
  width: 10%;
  transition: transform 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 139, 0.9)!important;
    transform: scale(1.05);
  }

  @media (max-width: 576px) { /* xs */
    width: 10px;
    font-size: 0.2rem;
  }
`;

// Movie data
const movies = [
  {
    image: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/4796/1721652924796-i",
    titleImage: "https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/6150/1721652936150-t",
    type: "Comedy | Drama | light-hearted | RomCom",
    Description: "lorem ipsum dloler smit lorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smit"
  },
  {
    image: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/1982/1726730141982-i",
    titleImage: "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/285/1726730130285-t",
    type: "Familly | Romance | Drama | Couple",
    Description: "lorem ipsum dloler smit lorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smit"
  }, {
    image: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/6464/1730699866464-i",
    titleImage: "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/6095/1730699876095-t",
    type: "Mistrey | Triller | Investigativ | Conspiracy",
    Description: "lorem ipsum dloler smit lorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smit"
  }, {
    image: "https://i.ytimg.com/vi/930EDWBzDU8/maxresdefault.jpg",
    titleImage: "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/6412/1730256196412-t",
    type: "Drama | Court Drama | Taking on the System | Hard-hitting",
    Description: "lorem ipsum dloler smit lorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smit"
  },
  {
    image: "https://v3img.voot.com/resizeMedium,w_914,h_514/v3Storage/assets/vertical-tv-1731340364061.jpg",
    titleImage: "https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/408/1710076870408-t",
    type: "Reallity | Hindi | TV show",
    Description: "lorem ipsum dloler smit lorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smit"
  },
  {
    image: "https://v3img.voot.com/resizeMedium,w_914,h_514/v3Storage/assets/vertical-carousel-tv-1730379338304.jpg",
    titleImage: "https://v3img.voot.com/v3Storage/assets/dhawankaregelogo-1716144742356.png",
    type: "Down the memory lane |  hindi | tv show",
    Description: "lorem ipsum dloler smit lorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smit"
  },
  {
    image: "https://www.bizasialive.com/wp-content/uploads/2023/01/indian-idol-judges001.png",
    titleImage: "https://upload.wikimedia.org/wikipedia/mai/8/84/Indian_Idol_2012_logo.png",
    type: "anime",
    Description: "lorem ipsum dloler smit lorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smit"
  }, {
    image: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/9460/1379460-i-2b70cca05890",
    titleImage: "https://i.pinimg.com/originals/41/6a/93/416a937f5b761b20a4c899cbe62f3773.png",
    type: "anime",
    Description: "lorem ipsum dloler smit lorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smit"
  }, {
    image: "https://static.bandainamcoent.eu/high/jujutsu-kaisen/jujutsu-kaisen-cursed-clash/00-page-setup/jjk-news-announcement.jpg",
    titleImage: "https://upload.wikimedia.org/wikipedia/commons/4/49/Jujutsu_Kaisen_logo.png",
    type: "anime",
    Description: "lorem ipsum dloler smit lorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smitlorem ipsum dloler smit"
  },
];
// ===============card slider========================
const SliderContainer1 = styled.div`
  margin: 20px;
  width: 100%;
  max-width: 1200px;
`;



const ProgressBar = styled.div`
  width: 80%;
  height: 5px;
  background-color: #eee;
  border-radius: 10px;
  overflow: hidden;
  margin: 5px auto;
`;

const ProgressFill = styled.div`
  width: ${(props) => props.progress || 0}%;
  height: 100%;
  background-color: #ff0000;
  border-radius: 10px;
`;

const Card = styled.div`
  width: 180px;
  margin: 10px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CardImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
`;

const moviesTopRated = [
  { id: 1, title: 'Venom the last dance', year: '2021', runtime: "110 minutes (1 hour and 50 minutes)", language: "English", rating: "⭐⭐⭐⭐⭐", image: 'https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@.V1.jpg ' },

  { id: 2, title: 'Elemental', year: '2023', runtime: " 1h 49 minutes", language: " English", rating: "⭐⭐⭐⭐⭐", image: 'https://hips.hearstapps.com/hmg-prod/images/elm-specialty-leanin-1s-v5-740f1-669fbfc18af4f.jpg?crop=1xw:1xh;center,top&resize=980:*' },
  { id: 3, title: 'Encanto', year: '2021', runtime: "102 minutes", language: " English (with Spanish cultural elements and references)", rating: "⭐⭐⭐⭐⭐", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxm_nVBEHYeQrX6pGDQpdNK3_wGIQRI6S6Ze5Y4WzdKPoYWguZC3FwaR18C_Q-JOBjupY&usqp=CAU' },
  { id: 4, title: 'Soul', year: '2020', runtime: " 100 minutes (1 hour 40 minutes)", language: "English | Hindi", rating: "⭐⭐⭐⭐⭐", image: 'https://hips.hearstapps.com/hmg-prod/images/kids-movies-2020-soul-1576601531.jpg?crop=1.00xw:0.922xh;0,0.0575xh&resize=980:*' },
  {
    id: 5,
    title: 'Gladiator',
    year: '2021',
    runtime: '2h 35m', // Example runtime
    language: 'English', // Example language
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00413291-ghwtffpshg-portrait.jpg'
  },
  {
    id: 6,
    title: 'Dark Nemesis',
    year: '2021',
    runtime: '1h 45m',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://qqcdnpictest.mxplay.com/pic/9f7c2715ba5fec6ac07451182c37ead1/en/2x3/312x468/test_pic1641803643684.webp'
  },
  {
    id: 7,
    title: 'Transformers One',
    year: '2021',
    runtime: '1h 40m',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00399519-vqwblafcrv-portrait.jpg'
  },
  {
    id: 8,
    title: 'Journey to the Center of the Earth',
    year: '2021',
    runtime: '1h 33m',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREsAnbWfuoKM1q-yU1MnrJUmLRXha8fuRYTA&s'
  },
  {
    id: 9,
    title: 'Spider-Man: Far From Home',
    year: '2021',
    runtime: '2h 9m',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
  },
  {
    id: 11,
    title: 'Bhoot Police',
    year: '2021',
    runtime: '2h 12m',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://e1.pxfuel.com/desktop-wallpaper/322/698/desktop-wallpaper-upcoming-hindi-film-movie-posters-bollywood-2022-movie.jpg'
  },
  {
    id: 12,
    title: 'Jawan',
    year: '2021',
    runtime: '2h 42m',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://preview.redd.it/the-best-bollywood-posters-2023-v0-5cvq722z5bcc1.jpg?width=640&crop=smart&auto=webp&s=1acaaa588c31c257d36e9afe291df5e2cc16d69d'
  },
  {
    id: 13,
    title: 'Kalki',
    year: '2021',
    runtime: '2h 30m',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://stat5.bollywoodhungama.in/wp-content/uploads/2021/07/Kalki-2898-AD-2.jpg'
  },
  {
    id: 14,
    title: 'Dat Rung Phuong Nam',
    year: '2021',
    runtime: '1h 45m',
    language: 'Vietnamese | English | Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/13/4e/e4/134ee4f4c2c6e08e43cf377f2ce21345.jpg'
  },
  {
    id: 15,
    title: 'Peaky Blinders',
    year: '2021',
    runtime: '1h',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/32/2c/3c/322c3c87452646e62f1aa710c165bbfb.jpg',
  },
];

const moviesLatest = [
  {
    id: 1,
    title: 'Deadpool Wolverine',
    year: '2016',
    runtime: '108 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/45/91/f9/4591f976c9b197c9bdeac343b906bc77.jpg'
  },
  {
    id: 2,
    title: 'Destined with You',
    year: '2023',
    runtime: '60 minutes (episode length)',
    language: 'Korean',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/de/f9/f0/def9f0894eb77c25ccf38dfaaa998b25.jpg'
  },
  {
    id: 3,
    title: 'Aladdin',
    year: '2019',
    runtime: '128 minutes',
    language: 'English',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/0b/3c/16/0b3c16298afba9887b1a8f26ec7d4dcd.jpg'
  },
  {
    id: 4,
    title: 'Munjya',
    year: '2022',
    runtime: '120 minutes',
    language: 'Marathi',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/8c/6e/53/8c6e530be67a0cdd51feabb178e5c8f2.jpg'
  },
  {
    id: 5,
    title: 'Stree 2',
    year: '2024',
    runtime: 'N/A',
    language: 'Hindi',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/2a/e8/55/2ae85529bb4e379fc45d5bd7556c211f.jpg'
  },
  {
    id: 6,
    title: 'Shehzada',
    year: '2023',
    runtime: '141 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/ed/f2/1b/edf21b0b9a974f233907c4ceabe8501c.jpg'
  },
  {
    id: 7,
    title: 'Singham Again',
    year: '2024',
    runtime: 'N/A',
    language: 'Hindi',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/58/0d/79/580d79c0d93cce2d6ed4f8b42f882da5.jpg'
  },
  {
    id: 8,
    title: 'Devara',
    year: '2024',
    runtime: 'N/A',
    language: 'Telugu',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/6d/51/67/6d5167f1160a966d679a165a2b3d2100.jpg'
  },
  {
    id: 9,
    title: 'Wednesday',
    year: '2022',
    runtime: 'N/A',
    language: 'English',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/d1/57/0e/d1570e7cb7c5e4adc54faba5ed11441c.jpg'
  },
  {
    id: 10,
    title: 'IT (Chapter Two)',
    year: '2019',
    runtime: '169 minutes',
    language: 'English',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/cf/1d/86/cf1d8620cafa4e674c047e7e46be4b35.jpg'
  },
  {
    id: 11,
    title: 'Joker',
    year: '2019',
    runtime: '122 minutes',
    language: 'English',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/42/bb/ba/42bbbaefd687903bc80b02c014e64a5b.jpg'
  },
  {
    id: 12,
    title: 'The Dark Knight',
    year: '2008',
    runtime: '152 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/31/fc/36/31fc36106622caed3725ab2b6fa7b981.jpg'
  },
  {
    id: 13,
    title: 'King The Land',
    year: '2023',
    runtime: '60 minutes (episode length)',
    language: 'Korean',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/aa/b0/e5/aab0e51b6260891d82c6a82aa2a3b346.jpg'
  },
  {
    id: 14,
    title: 'A Thursday (2022)',
    year: '2022',
    runtime: '118 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/ca/c4/b9/cac4b97c15a2cfb49d0bf756b920dfb3.jpg'
  },
  {
    id: 14,
    title: 'Shiddat',
    year: '2021',
    runtime: '134 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/3e/04/35/3e0435187175474830bd2321da4af93c.jpg'
  },
  {
    id: 15,
    title: 'Gangubai Kathiyawadi',
    year: '2022',
    runtime: '153 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/84/82/72/8482724d5fc8338565406eae9ee0ba50.jpg'
  }
];
const popular = [
  {
    id: 1,
    title: 'The Great Indian Kapil Show',
    year: '2016',
    runtime: '60 minutes (episode length)',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/92/a6/97/92a6974c9d03ace67a0c5fa2c90e5ce6.jpg'
  },
  {
    id: 2,
    title: 'Sisterhood',
    year: '2023',
    runtime: '40 minutes (episode length)',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/8c/ae/c8/8caec872ff5f1851b9dbe7c237cb623b.jpg'
  },
  {
    id: 3,
    title: 'Tarak Mehta Ka Ulta Chashma',
    year: '2008',
    runtime: '20 minutes (episode length)',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BMjBjNGYwYjktYjIwZS00OWI1LWEyMmYtNzc1ZTAwNjIxNzNmXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg'
  },
  {
    id: 4,
    title: 'Radhe Krishna',
    year: '2021',
    runtime: '20 minutes (episode length)',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/474x/81/2b/ab/812bab0a43a912baf853ba64905053a5.jpg'
  },
  {
    id: 5,
    title: 'Naa Umra Ki Seema Ho',
    year: '2022',
    runtime: '60 minutes (episode length)',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BY2I4ZTY1ZWEtNjgyOC00NDZhLWI1Y2EtYmE2MWJiNmMzMzU4XkEyXkFqcGc@.V1.jpg'
  },
  {
    id: 6,
    title: 'Anupama',
    year: '2020',
    runtime: '60 minutes (episode length)',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BMjlhNWMxNWUtZmRmOC00MGZlLWJhYjctNWI3MjZhZDZiN2RiXkEyXkFqcGc@.V1.jpg'
  },
  {
    id: 7,
    title: 'Vanshaj',
    year: '2022',
    runtime: '30 minutes (episode length)',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://images.slivcdn.com/videoasset_images/vanshaj_portrait_thumb.jpg?w=360&q=low'
  },
  {
    id: 8,
    title: 'CiD',
    year: '1998',
    runtime: '60 minutes (episode length)',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BYWQyNzkxMDItZmNiNS00NTRkLTk0NTYtMWEzOTg4YjYwNTE0XkEyXkFqcGc@.V1_FMjpg_UX1000.jpg'
  },
  {
    id: 9,
    title: 'Yeh Pyaar Nahi Toh Kya Hai',
    year: '2022',
    runtime: '60 minutes (episode length)',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BMzI3NTk0OGYtNmZjYi00OTBiLTljNWYtZWE5YzQ3ZjI2ZDYxXkEyXkFqcGc@.V1.jpg'
  },
  {
    id: 10,
    title: 'Kuch Rang Pyaar Ke Aise Bhi',
    year: '2016',
    runtime: '30 minutes (episode length)',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://images.slivcdn.com/portrait_thumb/KuchRangPyaarKeAiseBhiNEW_Portrait_Thumb.jpg?w=360&q=low'
  },
  {
    id: 11,
    title: 'Manjari',
    year: '2023',
    runtime: '30 minutes (episode length)',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://images.slivcdn.com/videoasset_images/manjari_15dec_portrait_thumb.jpg?w=360&q=low'
  },
  {
    id: 12,
    title: 'Yeh Rishta Kya Keh Lata Hai',
    year: '2009',
    runtime: '30 minutes (episode length)',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7qzFXlLBp3DLCcHFob_6z_nXq8Hp0SCttR4IisNGQ1OMl5mG_-sYRCjYIBLupNa4LBNA&usqp=CAU'
  },
  {
    id: 13,
    title: 'Pushpa Impossible',
    year: '2022',
    runtime: '30 minutes (episode length)',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://images.slivcdn.com/portrait_thumb/Pushpa1_Portrait_Thumb.jpg?w=360&q=low'
  },
  {
    id: 14,
    title: 'Shreemad Ramayan',
    year: '2021',
    runtime: '60 minutes (episode length)',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BOTRjOTdjNWMtNDBkMy00MzNkLWI1ZDYtNDkwYTU1MDYwYWY4XkEyXkFqcGc@.V1_FMjpg_UX1000.jpg'
  },
  {
    id: 15,
    title: 'Mahabharat',
    year: '2013',
    runtime: '60 minutes (episode length)',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BYzM1MmNhMGQtNDliNy00ZDIwLTg1MDQtN2NjZjUyNTg2MGMxXkEyXkFqcGc@.V1.jpg'
  }
];
const anime = [
  {
    id: 1,
    title: 'Jujutsu Kaisen',
    year: '2020',
    runtime: '24 mins per episode',
    language: 'Japanese',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BNmI1MmYxNWQtY2E5NC00ZTlmLWIzZGEtNzM1YmE3NDA5NzhjXkEyXkFqcGc@.V1.jpg'
  },
  {
    id: 2,
    title: 'Naruto',
    year: '2002-2007',
    runtime: '23 mins per episode',
    language: 'Japanese',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@.V1_FMjpg_UX1000.jpg'
  },
  {
    id: 3,
    title: 'Attack on Titan',
    year: '2013-2023',
    runtime: '24 mins per episode',
    language: 'Japanese',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/I/817nGTgaEBL.jpg'
  },
  {
    id: 4,
    title: 'One Piece',
    year: '1999-present',
    runtime: '22 mins per episode',
    language: 'Japanese',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg'
  },
  {
    id: 5,
    title: 'Dragon Ball Z',
    year: '1989-1996',
    runtime: '24 mins per episode',
    language: 'Japanese',
    rating: '⭐⭐⭐⭐',
    image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/35e4ac6339f5fdcc164160a5755790cd.jpg'
  },
  {
    id: 6,
    title: 'My Hero Academia',
    year: '2016-present',
    runtime: '24 mins per episode',
    language: 'Japanese',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.redd.it/pky1ul99fh5c1.jpg'
  },
  {
    id: 7,
    title: 'Demon Slayer (Kimetsu no Yaiba)',
    year: '2019-present',
    runtime: '24 mins per episode',
    language: 'Japanese',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BMWU1OGEwNmQtNGM3MS00YTYyLThmYmMtN2FjYzQzNzNmNTE0XkEyXkFqcGc@.V1.jpg'
  },
  {
    id: 8,
    title: 'Death Note',
    year: '2006-2007',
    runtime: '23 mins per episode',
    language: 'Japanese',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@.V1.jpg'
  },
  {
    id: 9,
    title: 'Fullmetal Alchemist: Brotherhood',
    year: '2009-2010',
    runtime: '24 mins per episode',
    language: 'Japanese',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BMzNiODA5NjYtYWExZS00OTc4LTg3N2ItYWYwYTUyYmM5MWViXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg'
  },
  {
    id: 10,
    title: 'Tokyo Ghoul',
    year: '2014-2018',
    runtime: '24 mins per episode',
    language: 'Japanese',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/I/71aIUtWoqHL.AC_UF1000,1000_QL80.jpg'
  },
  {
    id: 11,
    title: 'Bleach',
    year: '2004-2012',
    runtime: '24 mins per episode',
    language: 'Japanese',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BMjgyM2QzMjAtOGZjOS00OGFkLTkxZGYtMDJjZGM5MzIzYmM3XkEyXkFqcGc@.V1_FMjpg_UX1000.jpg'
  },
  {
    id: 12,
    title: 'Sword Art Online',
    year: '2012-present',
    runtime: '24 mins per episode',
    language: 'Japanese',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BN2NhYzU2NDEtYzI1NS00MjgzLThjZGUtOTYxNGJkZjZmNDdjXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg'
  },
  {
    id: 13,
    title: 'Hunter x Hunter',
    year: '2011-2014',
    runtime: '24 mins per episode',
    language: 'Japanese',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BYzYxOTlkYzctNGY2MC00MjNjLWIxOWMtY2QwYjcxZWIwMmEwXkEyXkFqcGc@.V1.jpg'
  },
  {
    id: 14,
    title: "JoJo's Bizarre Adventure",
    year: '2012-present',
    runtime: '24 mins per episode',
    language: 'Japanese',
    rating: '⭐⭐⭐⭐',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/JoJo_Part_1_Phantom_Blood.jpg/220px-JoJo_Part_1_Phantom_Blood.jpg'
  },
  {
    id: 15,
    title: 'Neon Genesis Evangelion',
    year: '1995-1996',
    runtime: '24 mins per episode',
    language: 'Japanese',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BZjZjZGI3ZDQtODNmZC00NjE0LTlmYTUtOTljMWI2YjNmMTQ0XkEyXkFqcGc@.V1_FMjpg_UX1000.jpg'
  },
];

const horrorMovies = [
  {
    id: 1,
    title: 'Tumbbad',
    year: '2018',
    runtime: '104 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/f3/67/6e/f3676e499b75a81bf5b916480af209fb.jpg',
  },
  {
    id: 2,
    title: 'Ek Thi Daayan',
    year: '2013',
    runtime: '135 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BODc4NThjMTMtNzg2Zi00M2YxLThmZmUtYWQzNDgyNWEwOTJkXkEyXkFqcGc@._V1_.jpg',
  },

  {
    id: 3,
    title: 'Pari',
    year: '2018',
    runtime: '136 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BYmU0MzI0MzYtYzY5MC00MzNkLWI1YTQtNmZmOWMyMWJlZjU5XkEyXkFqcGc@._V1_.jpg',
  },
  {
    id: 4,
    title: 'Stree',
    year: '2018',
    runtime: '128 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://image.tmdb.org/t/p/original/euhgW6hpDYw7nxFDjqHn0eKvQPX.jpg',
  },
  {
    id: 5,
    title: 'The House Next Door',
    year: '2017',
    runtime: '137 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://resizing.flixster.com/5yTIv0zJKCazodwEVcQ8aVlBHlk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQwMGMwMDY4LTZhYmYtNGZlMC1hYTZkLTZhMjNmNmZiMjAwOC53ZWJw',
  },
  {
    id: 6,
    title: '13B: Fear Has a New Address',
    year: '2009',
    runtime: '146 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVyBJsjSyJ91GCSBNtDJEWAhCxtnQlY4c8eQ&s',
  },
  {
    id: 7,
    title: 'Bhoot: Part One - The Haunted Ship',
    year: '2020',
    runtime: '114 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BMDdhOWZhN2UtMDViMi00ODY5LThiMDctNmIyNzdmZTNiOTkxXkEyXkFqcGc@._V1_.jpg',
  },

  {
    id: 8,
    title: 'Bhool Bhulaiyaa',
    year: '2007',
    runtime: '159 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfZAO6dtu4S31adFrXye2WMzOH5QBjUNI7w&s',
  },
  {
    id: 9,
    title: '1920',
    year: '2008',
    runtime: '138 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BMTQzMjg3MTkxOV5BMl5BanBnXkFtZTgwNjY4NzYxNTE@._V1_.jpg',
  },

  {
    id: 10,
    title: 'Chhorii',
    year: '2021',
    runtime: '129 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/S/pv-target-images/3f5733732b14e3b2dfe236c1315453154d0188cffd3f479b927a058406469a6c.jpg',
  },
  {
    id: 11,
    title: 'The Conjuring',
    year: '2013',
    runtime: '112 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_.jpg',
  },
  {
    id: 12,
    title: 'Hereditary',
    year: '2018',
    runtime: '127 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://images.squarespace-cdn.com/content/v1/511eea22e4b06642027a9a99/1532449879047-9FQ3FYK5ZZL2WQLWEW9D/Hereditary.jpg',
  },
  {
    id: 13,
    title: 'A Quiet Place',
    year: '2018',
    runtime: '90 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://image.tmdb.org/t/p/original/nAU74GmpUk7t5iklEp3bufwDq4n.jpg',
  },
  {
    id: 14,
    title: 'The Exorcist',
    year: '1973',
    runtime: '122 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMTb9Byl820_9450_T-h87ZaIY8WpidmGspw&s',
  },
  {
    id: 15,
    title: 'Get Out',
    year: '2017',
    runtime: '104 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BNTE2Nzg1NjkzNV5BMl5BanBnXkFtZTgwOTgyODMyMTI@._V1_.jpg',
  },
];

const DisneyMovies = [
  {
    id: 1,
    title: 'Wish',
    year: '2023',
    runtime: '92 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/9c/c8/bc/9cc8bc35430dc70445f6ac6ccc9463ad.jpg',
  },
  {
    id: 2,
    title: 'The Little Mermaid',
    year: '2023',
    runtime: '135 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/2b/65/90/2b65904a760644e2abf144198c7012a5.jpg',
  },
  {
    id: 3,
    title: 'Strange World',
    year: '2022',
    runtime: '102 minutes',
    language: 'English',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/ad/0e/e1/ad0ee1df050736e6af2813851e9f95c6.jpg',
  },
  {
    id: 4,
    title: 'Elemental',
    year: '2023',
    runtime: '109 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/3f/be/ba/3fbebabfb00e74ff6be92486d004a79d.jpg',
  },
  {
    id: 5,
    title: 'Encanto',
    year: '2021',
    runtime: '102 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/a8/ea/5b/a8ea5bc912d770ab0a4fd9bd912d2261.jpg',
  },
  {
    id: 6,
    title: 'Raya and the Last Dragon',
    year: '2021',
    runtime: '107 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/a2/70/a9/a270a97e40ae8fc3693a2793f5297501.jpg',
  },
  {
    id: 7,
    title: 'Turning Red',
    year: '2022',
    runtime: '100 minutes',
    language: 'English',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/da/f6/03/daf603a6d5cbd406e27b3019c92b79c0.jpg',
  },
  {
    id: 8,
    title: 'Lightyear',
    year: '2022',
    runtime: '105 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/a4/ea/5d/a4ea5d558972dd76288330bbc96e5f02.jpg',
  },
  {
    id: 9,
    title: 'Zootopia+',
    year: '2022',
    runtime: '90 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/fd/c2/cc/fdc2cce25a3c1bcd945be39bf508822f.jpg',
  },
  {
    id: 10,
    title: 'Frozen II',
    year: '2019',
    runtime: '103 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/91/7f/50/917f507c6d9a75d4615fe1d268d15a20.jpg',
  },
  {
    id: 11,
    title: 'Soul',
    year: '2020',
    runtime: '100 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/3a/ec/08/3aec087317dd8e9812fd77bd826780c9.jpg',
  },
  {
    id: 12,
    title: 'Luca',
    year: '2021',
    runtime: '95 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/be/ae/78/beae78cccf9e96c6c04df723e95dff7c.jpg',
  },
  {
    id: 13,
    title: 'Onward',
    year: '2020',
    runtime: '102 minutes',
    language: 'English',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/2a/d5/46/2ad54600def11680fe55d870d0f9c36c.jpg',
  },
  {
    id: 14,
    title: 'Moana',
    year: '2016',
    runtime: '107 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/ec/c1/14/ecc114242b7930c0a656d86047845526.jpg',
  },
  {
    id: 15,
    title: 'Coco',
    year: '2017',
    runtime: '105 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/4e/18/34/4e183454cfd1514edca198df0f244855.jpg',
  },
];
const Allrounders = [
  {
    id: 1,
    title: 'Jawan',
    year: '2023',
    runtime: '169 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/59/27/50/5927501eeb30666518c6b9fa309fc4be.jpg',
  },
  {
    id: 2,
    title: 'RRR',
    year: '2022',
    runtime: '187 minutes',
    language: 'Telugu',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/e5/21/52/e52152364dc8fb2b25e3dadb188af09f.jpg',
  },
  {
    id: 3,
    title: 'Pathaan',
    year: '2023',
    runtime: '146 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/58/6c/91/586c9120383fbff7c6bf04871f1e5fdc.jpg',
  },
  {
    id: 4,
    title: 'Vikram',
    year: '2022',
    runtime: '175 minutes',
    language: 'Tamil',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/a3/a8/72/a3a872bedc6afe040e29f54cd19dc967.jpg',
  },
  {
    id: 5,
    title: 'Pushpa: The Rise',
    year: '2021',
    runtime: '179 minutes',
    language: 'Telugu',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/b3/fd/1e/b3fd1ec872d03903ee48c874d2258a13.jpg',
  },
  {
    id: 6,
    title: 'Brahmāstra: Part One - Shiva',
    year: '2022',
    runtime: '168 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐',
    image: 'https://flixpatrol.com/runtime/cache/files/posters/7/w350/7rwcfyptl7tu7pschezn1zp9gh9.jpg',
  },
  {
    id: 7,
    title: 'KGF: Chapter 2',
    year: '2022',
    runtime: '168 minutes',
    language: 'Kannada',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/22/b1/bc/22b1bcc879841cf9775c0ab88fbacd89.jpg',
  },
  {
    id: 8,
    title: 'Drishyam 2',
    year: '2022',
    runtime: '140 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/c9/98/6b/c9986bf996a657929841c0c6f04b260b.jpg',
  },
  {
    id: 9,
    title: 'Kantara',
    year: '2022',
    runtime: '150 minutes',
    language: 'Kannada',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/f0/bc/11/f0bc113b4fe3e43fbe5800a5f273bfea.jpg',
  },
  {
    id: 10,
    title: 'Sita Ramam',
    year: '2022',
    runtime: '163 minutes',
    language: 'Telugu',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/3b/c9/12/3bc91289cb10679dd856d701ce8791f0.jpg',
  },
  {
    id: 11,
    title: 'Thunivu',
    year: '2023',
    runtime: '146 minutes',
    language: 'Tamil',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/0e/2e/d8/0e2ed894b487eb2befa8826c1721de7e.jpg',
  },
  {
    id: 12,
    title: 'Rocky Aur Rani Kii Prem Kahani',
    year: '2023',
    runtime: '168 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/24/7a/13/247a1308590caa47b78d21f39cddb7e0.jpg',
  },
  {
    id: 13,
    title: 'Varisu',
    year: '2023',
    runtime: '169 minutes',
    language: 'Tamil',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/8a/96/68/8a9668d96f34d1d53cb4184d68b1eb11.jpg',
  },

  {
    id: 14,
    title: 'Dishoom',
    year: '2016',
    runtime: '120 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/39/a7/f9/39a7f99b3a8a820948374dfe9266e74d.jpg',
  },

  {
    id: 15,
    title: 'The Great Indian Kitchen',
    year: '2023',
    runtime: '141 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/1e/1a/eb/1e1aeb8ac22d1c412f7430f612031e6b.jpg',
  },
];
const popularMovies = [
  {
    id: 1,
    title: 'Avatar: The Way of Water',
    year: '2022',
    runtime: '192 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/6c/35/f1/6c35f10f3465f446f7f20fae4b5b7a98.jpg',
  },
  {
    id: 2,
    title: 'Oppenheimer',
    year: '2023',
    runtime: '180 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/50/83/e6/5083e69962714f5c68a893a0980666fc.jpg',
  },
  {
    id: 3,
    title: 'Laal Singh Chaddha',
    year: '2022',
    runtime: '164 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://kashmirnewsline.net/wp-content/uploads/2022/10/images-36.jpeg',
  },

  {
    id: 4,
    title: 'RRR',
    year: '2022',
    runtime: '187 minutes',
    language: 'Telugu',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/8a/37/71/8a3771bc96b161307af8cb0bbd816bb8.jpg',
  },
  {
    id: 5,
    title: 'Barbie',
    year: '2023',
    runtime: '114 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://moviecity.ng/wp-content/uploads/2023/07/barbie-poster-moviecity.jpg',
  },
  {
    id: 6,
    title: 'Pathaan',
    year: '2023',
    runtime: '146 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/58/6c/91/586c9120383fbff7c6bf04871f1e5fdc.jpg',
  },
  {
    id: 7,
    title: 'Mission: Impossible - Dead Reckoning Part One',
    year: '2023',
    runtime: '163 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/7e/a3/99/7ea399e4b592a0b969d77916a93e001a.jpg',
  },
  {
    id: 8,
    title: 'Vikram',
    year: '2022',
    runtime: '175 minutes',
    language: 'Tamil',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa5cvb6U5Z4Q5cdewi_QhTjhtW6H5pEc4BoECA6abfi29TMMLZuny-ib3MqUH30AjFxvk&usqp=CAU',
  },
  {
    id: 9,
    title: 'Top Gun: Maverick',
    year: '2022',
    runtime: '130 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BMDBkZDNjMWEtOTdmMi00NmExLTg5MmMtNTFlYTJlNWY5YTdmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: 10,
    title: 'Pushpa: The Rise',
    year: '2021',
    runtime: '179 minutes',
    language: 'Telugu',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/b3/fd/1e/b3fd1ec872d03903ee48c874d2258a13.jpg',
  },
  {
    id: 11,
    title: 'The Batman',
    year: '2022',
    runtime: '176 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCeY1V6BTvCaXwUkOHdIDmCH9d09YH4dzwm1QmxQhKZXS-lJadAIAeE3XVrIr3U1kN5wA&usqp=CAU',
  },
  {
    id: 12,
    title: 'Kantara',
    year: '2022',
    runtime: '150 minutes',
    language: 'Kannada',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://upload.wikimedia.org/wikipedia/en/8/84/Kantara_poster.jpeg',
  },
  {
    id: 13,
    title: 'Doctor Strange in the Multiverse of Madness',
    year: '2022',
    runtime: '126 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BN2YxZGRjMzYtZjE1ZC00MDI0LThjZmQtZTZmMzVmMmQ2NzBmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: 14,
    title: 'Drishyam 2',
    year: '2022',
    runtime: '140 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://static.toiimg.com/photo/95588434.cms?imgsize=55540',
  },
  {
    id: 15,
    title: 'Guardians of the Galaxy Vol. 3',
    year: '2023',
    runtime: '150 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BOTJhOTMxMmItZmE0Ny00MDc3LWEzOGEtOGFkMzY4MWYyZDQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
];
const spacials = [
  {
    id: 1,
    title: 'The Legend of Hanuman Season 3',
    year: '2024',
    runtime: '45 minutes per episode',
    language: '',
    rating: '⭐⭐⭐⭐',
    image: 'https://assets.gadgets360cdn.com/pricee/assets/product/202307/the_legend_of_hanuman_1_1688461216.jpg',
  },

  {
    id: 2,
    title: 'Stranger Things: Season 5',
    year: '2024',
    runtime: '60 minutes per episode',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/63/0b/ab/630bab706812a5dabc80920c6d80f250.jpg',
  },

  {
    id: 3,
    title: 'The Mandalorian: Season 4',
    year: '2024',
    runtime: '40 minutes per episode',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/75/28/20/7528202aa082bce7979f17e836c76f27.jpg',
  },

  {
    id: 4,
    title: 'The Witcher: Season 4',
    year: '2024',
    runtime: '50 minutes per episode',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/8e/1a/1a/8e1a1a3913fd44a2188dac98602a7a81.jpg',
  },

  {
    id: 5,
    title: 'The Boys: Season 5',
    year: '2024',
    runtime: '50 minutes per episode',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2024/02/the-boys-season-4-poster-showing-homelander-with-victoria-neuman-surrounded-by-confetti.jpg',
  },

  {
    id: 6,
    title: 'Ahsoka: Season 2',
    year: '2024',
    runtime: '45 minutes per episode',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://hips.hearstapps.com/hmg-prod/images/rosario-dawson-ahsoka-tano-ahsoka-poster-64ada54c9d4de.jpg',
  },

  {
    id: 7,
    title: 'Loki: Season 2',
    year: '2024',
    runtime: '40 minutes per episode',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://resizing.flixster.com/_bfhe4PWPeyvX1XJe4LM_SJHG8k=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vMTVmMDViYjktN2ZiNS00OThhLWFmNjEtOTFiZWUyZWQ3NWU0LmpwZw==',
  },

  {
    id: 8,
    title: 'The Last of Us: Season 2',
    year: '2024',
    runtime: '50 minutes per episode',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://www.hollywoodreporter.com/wp-content/uploads/2024/09/TLOU-Day-Art_Abby_Credit-Greg-Ruth.jpg?w=2025',
  },

  {
    id: 9,
    title: 'Secret Invasion: Season 2',
    year: '2024',
    runtime: '45 minutes per episode',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BNmYzYzA2NzMtOTVmMC00ZDY4LThlMDctZmUyN2NlMjQ2ODViXkEyXkFqcGc@._V1_.jpg',
  },

  {
    id: 10,
    title: 'Echo: Season 1',
    year: '2024',
    runtime: '40 minutes per episode',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://image.tmdb.org/t/p/original/4Viv1DwZjU3o7jY973mG4S7K6QN.jpg',
  },

  {
    id: 11,
    title: 'Twisted Metal: Season 2',
    year: '2024',
    runtime: '50 minutes per episode',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/I/712WxFpoNGL._AC_UF894,1000_QL80_.jpg',
  },

  {
    id: 12,
    title: 'The Sandman: Season 2',
    year: '2024',
    runtime: '55 minutes per episode',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://sm.ign.com/t/ign_gr/gallery/t/the-sandma/the-sandman-2-new-posters_p5c4.1080.jpg',
  },

  {
    id: 13,
    title: 'Star Wars: Acolyte',
    year: '2024',
    runtime: '45 minutes per episode',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://lumiere-a.akamaihd.net/v1/images/manev-acolyte-ep-5-final-low-res_934757d4.jpeg',
  },

  {
    id: 14,
    title: 'Indiana Jones and the Dial of Destiny',
    year: '2024',
    runtime: '142 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.etsystatic.com/43710319/r/il/9182fb/6133387294/il_570xN.6133387294_448y.jpg',
  },

  {
    id: 15,
    title: 'Heart of Stone',
    year: '2024',
    runtime: '120 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://image.tmdb.org/t/p/original/vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg',
  },
];
const comingsoon = [
  {
    id: 1,
    title: 'Avatar: The Last Airbender (Live-Action)',
    year: '2024',
    runtime: '60 minutes per episode',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/f6/8b/f1/f68bf1750ab32d5fe7d78a74d54d50b4.jpg',
  },

  {
    id: 2,
    title: 'Deadpool 3',
    year: '2024',
    runtime: '130 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/be/fa/37/befa379cc2e8f3d519d10deb8abee881.jpg',
  },

  {
    id: 3,
    title: 'Animal',
    year: '2024',
    runtime: '150 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/bc/fe/47/bcfe47b4b2fbcb1dd40cef44569d6d81.jpg',
  },

  {
    id: 4,
    title: 'The Marvels',
    year: '2024',
    runtime: '125 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/dd/2c/12/dd2c1213655e064faa91afabe01b6860.jpg',
  },

  {
    id: 5,
    title: 'Don 3',
    year: '2024',
    runtime: '170 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/originals/d4/eb/bb/d4ebbbeb824df542d2df298f926382ed.jpg',
  },

  {
    id: 6,
    title: 'Kung Fu Panda 4',
    year: '2024',
    runtime: '95 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmvQ6W1VFa2bWO3o0MxqzrEd3BHCSGF54bFA&s',
  },

  {
    id: 7,
    title: 'Mirzapur: Season 3',
    year: '2024',
    runtime: '50 minutes per episode',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/af/aa/32/afaa32ad75d0e4e4cc77d5827d7aec23.jpg',
  },

  {
    id: 8,
    title: 'Spider-Man: Beyond the Spider-Verse',
    year: '2024',
    runtime: '140 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://preview.redd.it/beyond-the-spiderverse-poster-by-v0-kjlwry64rh5b1.png?auto=webp&s=6404847615c615cac1861840ed83dd561e2ba377',
  },

  {
    id: 9,
    title: 'Salaar: Ceasefire',
    year: '2024',
    runtime: '158 minutes',
    language: 'Telugu',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://chinmaynakhwa.wordpress.com/wp-content/uploads/2023/12/wp-17032610754067326981864121982714.jpg?w=832',
  },


  {
    id: 10,
    title: 'The Boys: Season 5',
    year: '2024',
    runtime: '60 minutes per episode',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiuj3O_OhWAG0TqAw6lKdljg1vIf-HjlceGQ&s',
  },

  {
    id: 11,
    title: 'Frozen 3',
    year: '2024',
    runtime: '110 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://preview.redd.it/my-fan-made-frozen-3-posters-v0-zhem5b9f0mxa1.jpg?width=1080&crop=smart&auto=webp&s=896c25831f3778b97b5c651e4bfabab13d9555ac',
  },

  {
    id: 12,
    title: 'Yodha',
    year: '2024',
    runtime: '130 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BMDIzMmZmMTctNmY2ZS00NjRiLWFhNTEtZDg3M2RiNTI1ZWFiXkEyXkFqcGc@._V1_.jpg',
  },

  {
    id: 13,
    title: 'The Penguin (Spin-off)',
    year: '2024',
    runtime: '55 minutes per episode',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Lo1DnvjajOfiqBqv-b2jVo28SWOFaUegMQ&s',
  },

  {
    id: 14,
    title: 'Pushpa 2: The Rule',
    year: '2024',
    runtime: '180 minutes',
    language: 'Telugu',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvIq6okCYzLClqb0_vZC3mnegVF1SNopmtMQ&s',
  },

  {
    id: 15,
    title: 'Moana (Live-Action)',
    year: '2024',
    runtime: '120 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxbpCKaN9saM0lsunAkAuzcu0o3THJVAzMsA&s',
  },
];
const kidscourner = [
  {
    id: 1,
    title: 'Peppa Pig',
    year: '2004',
    runtime: '5 minutes per episode',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT45m71pI7PXjwLUN8lvWEw8gBzXPXmCc6y8A&s'
  },
  {
    id: 2,
    title: 'PAW Patrol',
    year: '2013',
    runtime: '23 minutes per episode',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/I/61EaOz4-fXL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: 3,
    title: 'Dora the Explorer',
    year: '2000',
    runtime: '30 minutes per episode',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/originals/f9/ef/a4/f9efa4dbb4a210b741e3dd2301e948c0.jpg'
  },
  {
    id: 4,
    title: 'Chhota Bheem',
    year: '2008',
    runtime: '20 minutes per episode',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BMjFhNzU4NmItOTczMC00YTMyLTkzZjgtNTJjZDA0YmRkZTc4XkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 5,
    title: 'Shinchan',
    year: '1992',
    runtime: '24 minutes per episode',
    language: 'Japanese',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/I/51-X9QkeCPL.jpg'
  },
  {
    id: 6,
    title: 'Tom and Jerry',
    year: '1940',
    runtime: '7 minutes per episode',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://rukminim2.flixcart.com/image/850/1000/l02r1jk0/poster/x/w/q/medium-tom-jerry-poster-cartoon-a3-wall-poster-pack-of-1-original-imagbxcgbak4jytb.jpeg?q=20&crop=false'
  },
  {
    id: 7,
    title: 'Motu Patlu',
    year: '2012',
    runtime: '11 minutes per episode',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxK11LYZT9QKZfzYlOTz_rQNpjXk6-zOF5Bw&s'
  },
  {
    id: 8,
    title: 'Teen Titans Go!',
    year: '2013',
    runtime: '11 minutes per episode',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/I/81-gTqGjlJL.jpg'
  },
  {
    id: 9,
    title: 'Bluey',
    year: '2018',
    runtime: '7 minutes per episode',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://image.tmdb.org/t/p/original/b9mY0X5T20ZM073hoa5n0dgmbfN.jpg'
  },
  {
    id: 10,
    title: 'Pokemon',
    year: '1997',
    runtime: '23 minutes per episode',
    language: 'Japanese',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/474x/67/bc/36/67bc36fe4a5ad62a59b03059b58f57a1.jpg'
  },
  {
    id: 11,
    title: 'The Amazing World of Gumball',
    year: '2011',
    runtime: '11 minutes per episode',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BNmEwYzNhODgtZDc2Yi00MDAyLTliNWYtMDRkMThmMWE0NGNkXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 12,
    title: 'Ben 10',
    year: '2005',
    runtime: '22 minutes per episode',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/I/51BLNbE4arL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: 13,
    title: 'Kung Fu Panda: The Paws of Destiny',
    year: '2018',
    runtime: '23 minutes per episode',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUaKHrp8PA8dbfR0bx5MXNN3qZ0GmOlxyKkQ&s'
  },
  {
    id: 14,
    title: 'SpongeBob SquarePants',
    year: '1999',
    runtime: '11 minutes per episode',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/I/81D-WIVF+uL.jpg'
  },
  {
    id: 15,
    title: 'The Powerpuff Girls',
    year: '1998',
    runtime: '22 minutes per episode',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/I/71ANRSMnDsL._AC_UF1000,1000_QL80_.jpg'
  },
];
const popularINkids = [
  {
    id: 1,
    title: 'Chhota Bheem: Kung Fu Dhamaka',
    year: '2019',
    runtime: '100 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://play-lh.googleusercontent.com/X9M-DJthZF7eeBG8GLSDtXCljU5ckF8Dqb2MD4SNCk5kVTYrxPe9w3vN4aW0c23pR-Xoi2Zq5gZ5m8h6v_Br'
  },
  {
    id: 2,
    title: 'Mighty Little Bheem',
    year: '2019',
    runtime: '5 minutes per episode',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BYmJmZDA4YjItODRjNy00YjZiLThhMDEtMjVhOWNlZDk2OGRmXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 3,
    title: 'Jungle Book: The Adventures of Mowgli',
    year: '1990',
    runtime: '24 minutes per episode',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BNTgzZGMzYTItNWExMC00YjNlLTg2NzUtZDY2MDAzNDQzZGNjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    id: 4,
    title: 'Bal Hanuman',
    year: '2007',
    runtime: '90 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://cdn.magicdecor.in/com/2024/06/24113423/Bal-Hanuman-Wallpaper-Mural.jpg'
  },
  {
    id: 5,
    title: 'Akbar and Birbal',
    year: '2005',
    runtime: '22 minutes per episode',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://rukminim2.flixcart.com/image/850/1000/l3dcl8w0/book/2/w/3/akbar-birbal-original-imageggkdhzkzpmz.jpeg?q=20&crop=false'
  },
  {
    id: 6,
    title: 'Karadi Tales',
    year: '1999',
    runtime: '20 minutes per episode',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaUMO8zF5-zuwwTCraoEmFsHqyjBGdfrQZ1tAJ1tb0alYK-B6I_z6DQacgWRHJVugRCb8jLf7jPoO_41MYrt8JdD3TQib_5wpWwKclwxmK0ZkD9yw8ih2-GHBj3v9iCTfO1u4/w1200-h630-p-k-no-nu/16042_195953645478_195953365478_4404101_168582_n.jpg'
  },
  {
    id: 7,
    title: 'Chorr Police',
    year: '2012',
    runtime: '11 minutes per episode',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/I/91sQdx-ed1L._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: 8,
    title: 'Ramayana: The Legend of Prince Rama',
    year: '1993',
    runtime: '135 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://image.tmdb.org/t/p/original/l4MNBj7Zn2iVNfwBdm80Am0Ll7w.jpg'
  },
  {
    id: 9,
    title: 'Birbal Aur Viraat',
    year: '2020',
    runtime: '22 minutes per episode',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xhcjThG_ZpxiNAoGOnMlYeAbDiGmPCjNYg&s'
  },
  {
    id: 10,
    title: 'Tenali Rama',
    year: '2014',
    runtime: '23 minutes per episode',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BYWNlZDcwNDctNThhMy00M2VkLTgxMDAtMzQ4NjdmNmM4YjZhXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 11,
    title: 'Chhoti Anandi',
    year: '2016',
    runtime: '11 minutes per episode',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://www.sphereorigins.com/storage/uploads/shows/Chhoti%20Anandi%20Thumbnail.jpg'
  },
  {
    id: 12,
    title: 'Super V',
    year: '2019',
    runtime: '22 minutes per episode',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BZWVmMDA2NzktODY3Mi00NThkLTgzYzQtNjYxMmYxYTNlN2MxXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 13,
    title: 'Bal Ganesha',
    year: '2007',
    runtime: '90 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/I/41ZlebcJbvL.jpg'
  },
  {
    id: 14,
    title: 'Hanuman Da Damdaar',
    year: '2017',
    runtime: '105 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThWP8yWowfP4jsJrK7haG_9CJRof7h1ueIoA&s'
  },
  {
    id: 15,
    title: 'Krishna Aur Kans',
    year: '2012',
    runtime: '117 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://movieassetsdigital.sgp1.cdn.digitaloceanspaces.com/original/14272aa068ea596836af42500b0c786f6ef8193d'
  },
];
const popularinthriller = [
  {
    id: 1,
    title: 'Special Ops',
    year: '2020',
    runtime: '45 minutes per episode',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9gnhSWEJaGrcEYLQtnpFhPDcjktGKIcrPl0qvVaRr0FuOSrYWJyabkWRr5SuaxNXxbpcwkw'
  },
  {
    id: 2,
    title: 'Criminal Justice',
    year: '2019',
    runtime: '50 minutes per episode',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaiJLgfzN5EZLFUlx7RjdFrrV5Y3CnavHftffQhj42_3ZIUQoYZH56rci1MkI5rjJl-Ub0'
  },
  {
    id: 3,
    title: 'Aarya',
    year: '2020',
    runtime: '50 minutes per episode',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://resizing.flixster.com/nbCkAV88dkzjxLDIFd-G_OB9bEU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20611869_b_v9_aa.jpg'
  },
  {
    id: 4,
    title: 'Hostages',
    year: '2019',
    runtime: '45 minutes per episode',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BMmM3NWNhMzktNzBiNy00ZTlhLWEyODktYTg0MmQyZTI2MzgzXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 5,
    title: 'The Night Manager',
    year: '2023',
    runtime: '50 minutes per episode',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BMTk1NzkyMTUyN15BMl5BanBnXkFtZTgwNTM0NzM2ODE@._V1_.jpg'
  },
  {
    id: 6,
    title: 'October',
    year: '2018',
    runtime: '115 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgTGEG6zANFqCGP-vczfejJdc3XTeWRkSLclr7usr098u1vFd3HBZjtVm4oQSjKC4Zm-l9'
  },
  {
    id: 7,
    title: 'Drishyam 3',
    year: '2022',
    runtime: '142 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BNTAyMWM3NGYtN2M3ZC00YjBhLTg2YjItYzA4M2I4M2U2OGMzXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 8,
    title: 'Breathe: Into the Shadows',
    year: '2020',
    runtime: '40 minutes per episode',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BYmM4NDRmZWUtZTFmYS00MzIzLTk0NDctYWEyZjAwMjY1M2VhXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 9,
    title: 'Rudra: The Edge of Darkness',
    year: '2022',
    runtime: '50 minutes per episode',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BZTU4MzUyMjctYTM4NC00Zjc5LThjZjctOTJhMGEwZGRlZGIzXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 10,
    title: 'Kaun Pravin Tambe?',
    year: '2022',
    runtime: '134 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BZTlhMzM5NDYtODU3Ny00NjQwLWIzODktOGY0ZjY5NTVjZjllXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 11,
    title: 'Big Bull',
    year: '2021',
    runtime: '155 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/originals/3c/f5/f1/3cf5f18ea1729eab99a9d0236474f9d1.jpg'
  },
  {
    id: 12,
    title: 'Pari',
    year: '2018',
    runtime: '136 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BOWUxZjhmNTItYzRkNi00MTI2LWI1MTAtNzQ3YWYxNThjY2RmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    id: 13,
    title: 'Barot House',
    year: '2019',
    runtime: '90 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://assets.gadgets360cdn.com/pricee/assets/product/202210/Barot_House_1666091112.jpg'
  },
  {
    id: 14,
    title: 'Talvar',
    year: '2015',
    runtime: '132 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BMTYzODg0Mjc4M15BMl5BanBnXkFtZTgwNzY4Mzc3NjE@._V1_.jpg'
  },
  {
    id: 15,
    title: 'NH10',
    year: '2015',
    runtime: '115 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BMjliYTFmZmMtOGRjMC00ZDIxLThlMDEtMDExY2JkYmFiZTMwXkEyXkFqcGc@._V1_.jpg'
  },
];
const popularinRomence = [
  {
    id: 1,
    title: 'The Notebook',
    year: '2004',
    runtime: '123 min',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://res.cloudinary.com/dyx4yhvoq/image/upload/v1547721104/5c266428c2172c001bc94b9e/kogak3tkbeep8umicasl.jpg'
  },
  {
    id: 2,
    title: 'Pride and Prejudice',
    year: '2005',
    runtime: '129 min',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://ih1.redbubble.net/image.3581071581.9280/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg'
  },
  {
    id: 3,
    title: 'La La Land',
    year: '2016',
    runtime: '128 min',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/I/51r9qSPOx+L._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: 4,
    title: 'A Walk to Remember',
    year: '2002',
    runtime: '101 min',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/52f17c70416691.5ba2a79d66a22.jpg'
  },
  {
    id: 5,
    title: 'Titanic',
    year: '1997',
    runtime: '195 min',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/I/610CYrdV7AS.jpg'
  },
  {
    id: 6,
    title: 'Before Sunrise',
    year: '1995',
    runtime: '101 min',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BZDZhZmI1ZTUtYWI3NC00NTMwLTk3NWMtNDc0OGNjM2I0ZjlmXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 7,
    title: 'The Fault in Our Stars',
    year: '2014',
    runtime: '126 min',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BYTA4ODg5YWUtYmZiYy00Y2M4LWE0NjEtODE5MzhkYmJmZGEwXkEyXkFqcGc@._V1_QL75_UY281_CR0,0,190,281_.jpg'
  },
  {
    id: 8,
    title: 'Slumdog Millionaire',
    year: '2008',
    runtime: '120 min',
    language: 'English/Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDcALnVnCzculx0XwIMurHzplAIeuzVCAlcgl_eQR61qadFxnuryfwnqv4PFkw05NUeeo&usqp=CAU'
  },
  {
    id: 9,
    title: 'Crazy Rich Asians',
    year: '2018',
    runtime: '120 min',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_.jpg'
  },
  {
    id: 10,
    title: 'Love, Rosie',
    year: '2014',
    runtime: '102 min',
    language: 'English',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/originals/d8/cb/2c/d8cb2c83145a62f8becb0af0328a25cb.jpg'
  },
  {
    id: 11,
    title: '500 Days of Summer',
    year: '2009',
    runtime: '95 min',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://posterwa.com/cdn/shop/files/MOVIE92.jpg?v=1704270539&width=416'
  },
  {
    id: 12,
    title: 'Me Before You',
    year: '2016',
    runtime: '106 min',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt5TPp5l5T_WwduuHZhO_K-tja73TM63LMdg&s'
  },
  {
    id: 13,
    title: 'Notting Hill',
    year: '1999',
    runtime: '124 min',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/I/71BHm6QdfpL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: 14,
    title: 'To All the Boys I’ve Loved Before',
    year: '2018',
    runtime: '99 min',
    language: 'English',
    rating: '⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/I/71x4SaTStdL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: 15,
    title: 'The Vow',
    year: '2012',
    runtime: '104 min',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BOWEyNmZiZTEtNjlmZi00ZjhlLTkxMGEtNGM0ZjU4MGVmODBhXkEyXkFqcGc@._V1_.jpg'
  },
];
const comedyMovies = [
  {
    id: 1,
    title: 'Superbad',
    year: '2007',
    runtime: '113 min',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG8tIpoa_I8HTVEYAQ7DGamUrlPvH3Lpv_Rw&s'
  },
  {
    id: 2,
    title: 'The Hangover',
    year: '2009',
    runtime: '100 min',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.etsystatic.com/12729518/r/il/cc1d75/1992451812/il_1080xN.1992451812_fu7n.jpg'
  },
  {
    id: 3,
    title: 'Step Brothers',
    year: '2008',
    runtime: '98 min',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.ebayimg.com/00/s/MTYwMFgxMDY2/z/ZFkAAOSwfCVkxiu8/$_57.JPG?set_id=880000500F'
  },
  {
    id: 4,
    title: 'Mean Girls',
    year: '2004',
    runtime: '97 min',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://image.tmdb.org/t/p/original/2ZkuQXvVhh45uSvkBej4S7Ix1NJ.jpg'
  },
  {
    id: 5,
    title: 'Zombieland',
    year: '2009',
    runtime: '88 min',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/zombielanddoubletap_onesheet_1400x2100.jpg?itok=iGdFGbV_'
  },
  {
    id: 6,
    title: 'Dumb and Dumber',
    year: '1994',
    runtime: '107 min',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://imgc.allpostersimages.com/img/posters/trends-international-dumb-and-dumber-together_u-L-Q1RFVZ90.jpg'
  },

  {
    id: 7,
    title: '3 Idiots',
    year: '2009',
    runtime: '170 min',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/I/61NSZeiNF3L._AC_UF894,1000_QL80_.jpg'
  },
  {
    id: 8,
    title: 'Hera Pheri',
    year: '2000',
    runtime: '156 min',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR2jo3iBwKWGdEdmZPUnk2QgQN6KnuIkGez1KwC-RjrWepLxAEE4Nl4uLo7YWuTUIb1yM&usqp=CAU'
  },
  {
    id: 9,
    title: 'Chup Chup Ke',
    year: '2006',
    runtime: '164 min',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BMTg3MTMzNjUwOF5BMl5BanBnXkFtZTcwODgxODMzMQ@@._V1_.jpg'
  },
  {
    id: 10,
    title: 'Golmaal: Fun Unlimited',
    year: '2006',
    runtime: '150 min',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p180409_p_v10_aa.jpg'
  },
  {
    id: 11,
    title: 'PK',
    year: '2014',
    runtime: '153 min',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://www.tallengestore.com/cdn/shop/products/7381746122932A.jpg?v=1683929490'
  },
  {
    id: 12,
    title: 'Munna Bhai M.B.B.S.',
    year: '2003',
    runtime: '156 min',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/I/61ibrBjHgEL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: 13,
    title: 'Extreme Job',
    year: '2019',
    runtime: '111 min',
    language: 'Korean',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCM7Csj_y15hOOl9rfWBrnoAPISaMJzMxUlQ&s'
  },
  {
    id: 14,
    title: 'Miss Granny',
    year: '2014',
    runtime: '124 min',
    language: 'Korean',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BOWFhZWZjZDgtNmY1YS00Mjg4LThlMDUtOTVjZjI2NjZmYzU0XkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 15,
    title: 'My Sassy Girl',
    year: '2001',
    runtime: '123 min',
    language: 'Korean',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://image.tmdb.org/t/p/original/llSHPKnZWaFvvTKqslvUVeyrK4O.jpg'
  },

];


function HomePage({ darkMode, setDarkMode }) {
  const mainSlider = useRef(null);
  const thumbnailSlider = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settingsMain = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: thumbnailSlider.current,
    initialSlide: currentSlide,
  };

  const settingsThumbnail = {
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: mainSlider.current,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '50px',
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 7 } },
      { breakpoint: 992, settings: { slidesToShow: 6 } },
      { breakpoint: 768, settings: { slidesToShow: 6 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
    ],
  };

  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
    mainSlider.current.slickGoTo(index);
  };

  // ==================card slider=======================
  const sliderSettings1 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  const movies1 = [
    { id: 1, image1: 'https://www.yashrajfilms.com/images/default-source/movies/hrithik-vs-tiger/hrithik-v-s-tiger47bda6a026f56f7f9f64ff0b00090313.jpg?sfvrsn=9e48c9cc_17', progress: 20 },
    { id: 5, image1: 'https://img1.wsimg.com/isteam/ip/d6a3e7a7-e920-4711-bf09-856dd846af78/AVATAR2.jpg', progress: 50 },
    { id: 6, image1: 'https://preview.redd.it/jtbc-welcome-to-samdalri-character-poster-ji-chang-wook-v0-iye1k3aik72c1.jpg?width=640&crop=smart&auto=webp&s=0b88efbfd6e8ec3e612db44f23eb5952ca40b50b', progress: 50 },
    { id: 7, image1: 'https://i.ytimg.com/vi/OV2H8EYdFZ0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDxJrLCIiGzVp2wvZ2CWghcplVRdg', progress: 50 },
    { id: 8, image1: 'https://img.hulu.com/user/v3/artwork/5e235d03-75bc-4322-9c10-c2e49a1ca26d?base_image_bucket_name=image_manager&base_image=8491d838-eafc-49c2-9726-681f7f3ad908&region=US&format=webp&size=952x536', progress: 50 },
    { id: 9, image1: 'https://m.media-amazon.com/images/I/71oeH+pkAeS.jpg', progress: 50 },
    { id: 10, image1: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRHiGpOn5LdbUqDahk4QLRF6PaOOKcMSuVZpBPL9ORusx6ZT9ecnTKhH4H5iV9UG8TAv-_tD6XcMf3ob4H6BNAEJta5t_ttHhHHLV46PoKN-wmEThi-QGDmyD6G0mhKp-KfVKlLgjok0yt/w1200-h630-p-k-no-nu/Radha+Krishna+WPB.jpg', progress: 50 },
    { id: 2, image1: 'https://assets.teenvogue.com/photos/61f00be8cdaafb8d6368985c/16:9/w_1280,c_limit/JJK_Movie_16x9_Twitter%20Post.jpg', progress: 60 },
    { id: 4, image1: 'https://orangecubeproject.com/wp-content/uploads/2021/01/210109_HORIZONTAL_NAMES.jpg', progress: 80 },
    { id: 3, image1: 'https://images.squarespace-cdn.com/content/v1/63bb3e8a824d7e2f7eedf0d3/513d1f08-7d1a-40ec-9c3d-c65c6f28243e/Suzume+Horizontal.jpeg', progress: 40 },
  ];

  return (
    <>
      <Box sx={{ mt: '13px', ml: { lg: '60px', md: "60px", sm: "50px", xs: "30px" }, position: 'relative' }}>
        <SliderContainer>
          <Slider {...settingsMain} ref={mainSlider}>
            {movies.map((movie, index) => (
              <MainSlide key={index}>
                <Image src={movie.image} alt="Main Slide" />
                <Overlay>
                  <Text>
                    <img src={movie.titleImage} alt="Movie Title" style={{ width: "20%", marginBottom: "1rem" }} />

                    <Box sx={{ mt: { lg: 2, md: 2, sm: 1, xs: 0.5 }, mb: { lg: 2, md: 2, sm: 1, xs: 0.5 } }}>
                      <Description sx={{
                        fontSize: {
                          lg: "20px"
                          , md: "16px",
                          sm: "10px",
                        },
                        display: {
                          lg: "block",
                          md: "block",
                          sm: "block",
                          xs: "none"
                        }

                      }} variant="body1">{movie.Description}</Description>
                    </Box>
                    <Type
                      sx={{
                        fontSize: {
                          lg: "20px",
                          md: "16px",
                          sm: "10px",
                          xs: "9px"
                        }
                      }}
                      variant="subtitle1">Genre: {movie.type}</Type>
                    <Box sx={{
                      display: "flex", mt: 4,
                      fontSize: {
                        lg: "20px",
                        md: "16px",
                        sm: "10px"
                      },
                      mt: { lg: 2, md: 2, sm: 1, xs: 0.5 }
                    }}>
                      <SubscribeButton variant="contained">
                        <PlayArrowIcon /> Subscribe to Watch
                      </SubscribeButton>
                      <AddFav sx={{ ml: { lg: 3, md: 3, sm: 2, xs: 1 } }} variant="contained">+</AddFav>
                    </Box>
                  </Text>
                </Overlay>
              </MainSlide>
            ))}
          </Slider>

          <Box sx={{ mt: 1 }}>
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
      {/* ==================card slider================ */}
      <Container >
        <Box sx={{ ml: { lg: 5, md: 10 } }}>

          <SliderContainer1 >
            <Typography variant='h5'>Continue Watching</Typography>
            <Slider {...sliderSettings1}>
              {movies1.map((movie1) => (
                <Card key={movie1.id}>
                  <CardImage src={movie1.image1} alt="Movie" />
                  <ProgressBar  >
                    <ProgressFill progress={movie1.progress} />
                  </ProgressBar>
                </Card>
              ))}
            </Slider>
          </SliderContainer1>
        </Box>
      </Container>
      {/* ========================movie card======================== */}
      <Container>
        <Box sx={{ ml: { lg: 5, md: 10 }, mt: 3 }}>
          <Box>
            <Typography sx={{ ml: { lg: 5, md: 10 }, mb: 3 }} variant='h5'>Top Rated ⭐</Typography>
            <MovieSlider movies={moviesTopRated} />
          </Box>
          <Box>
            <Typography sx={{ ml: { lg: 3, md: 10 }, mb: 3, mt: 5 }} variant='h5' >Latest Releases</Typography>
            <MovieSlider movies={moviesLatest} />
          </Box>
          <Box>
            <Typography sx={{ ml: { lg: 3, md: 10 }, mb: 3, mt: 5 }} variant='h5' >Popular Shows</Typography>
            <MovieSlider movies={popular} />
          </Box>
          <Box>
            <Typography sx={{ ml: { lg: 3, md: 10 }, mb: 3, mt: 5 }} variant='h5' >Top animes</Typography>
            <MovieSlider movies={anime} />
          </Box>
        </Box>

        <Box>
          <Box>
            <Typography sx={{ ml: { lg: 3, md: 10 }, mb: 3, mt: 5 }} variant='h5' >Disney Movies</Typography>
            <MovieSlider movies={DisneyMovies} />
          </Box>
          <Box>
            <Typography sx={{ ml: { lg: 3, md: 10 }, mb: 3, mt: 5 }} variant='h5' >Entertainment All Rounders</Typography>
            <MovieSlider movies={Allrounders} />
          </Box>
        </Box >
        </Container>
  <Box sx={{ mt: 5, position: 'relative' }}>
  <img width="100%" height="350px" src="https://static.vecteezy.com/system/resources/previews/002/236/321/non_2x/movie-trendy-banner-vector.jpg" alt="" />
  <Box sx={{
    position: 'absolute',
    top: 0,
    left: 0,
    right:0,
    width: '100%',
    height: '97%',
    backgroundColor: 'rgba(128, 0, 128, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // boxShadow: '0px 0px 10px 5px rgba(128, 0, 128, 0.5)',
    // borderRadius: '10px',
    // padding: '20px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    '@media (max-width: 1200px)': {
      padding: '10px'
    },
    '@media (max-width: 992px)': {
      padding: '5px'
    },
    '@media (max-width: 768px)': {
      padding: '5px'
    },
    '@media (max-width: 576px)': {
      padding: '5px'
    }
  }}>
    <Typography variant="h5" sx={{ color: '#fff', mb: 2, ml: 2 }}>Watch Your Favorite Movies</Typography>
    <Button variant="contained" sx={{ backgroundColor: 'purple', color: '#fff', '&:hover': { backgroundColor: 'purple' }, ml: 2 }}>Sign In</Button>
  </Box>
</Box>



        <Container>

        
        <Box >

        <Box>
          <Typography sx={{ ml: { lg: 3, md: 10 }, mb: 3, mt: 5 }} variant='h5' >Hrror Movies</Typography>
          <MovieSlider movies={horrorMovies} />
        </Box>
        <Box>
          <Typography sx={{ ml: { lg: 3, md: 10 }, mb: 3, mt: 5 }} variant='h5' >Disney Movies</Typography>
          <MovieSlider movies={DisneyMovies} />
        </Box>
        <Box>
          <Typography sx={{ ml: { lg: 3, md: 10 }, mb: 3, mt: 5 }} variant='h5' >Entertainment All Rounders</Typography>
          <MovieSlider movies={Allrounders} />
        </Box>
        <Box>
          <Typography sx={{ ml: { lg: 3, md: 10 }, mb: 3, mt: 5 }} variant='h5' >Popular Movies</Typography>
          <MovieSlider movies={popularMovies} />
        </Box>
        <Box>
          <Typography sx={{ ml: { lg: 3, md: 10 }, mb: 3, mt: 5 }} variant='h5' >Spacials From Us</Typography>
          <MovieSlider movies={spacials} />
        </Box>
        <Box>
          <Typography sx={{ ml: { lg: 3, md: 10 }, mb: 3, mt: 5 }} variant='h5' >Comming Soon</Typography>
          <MovieSlider movies={comingsoon} />
        </Box>
        <Box>
          <Typography sx={{ ml: { lg: 3, md: 10 }, mb: 3, mt: 5 }} variant='h5' >kids courner</Typography>
          <MovieSlider movies={kidscourner} />
        </Box>
        <Box>
          <Typography sx={{ ml: { lg: 3, md: 10 }, mb: 3, mt: 5 }} variant='h5' >Popular in Thriller</Typography>
          <MovieSlider movies={popularinthriller} />
        </Box>
        <Box>
          <Typography sx={{ ml: { lg: 3, md: 10 }, mb: 3, mt: 5 }} variant='h5' >Popular in kids</Typography>
          <MovieSlider movies={popularINkids} />
        </Box>
        <Box>
          <Typography sx={{ ml: { lg: 3, md: 10 }, mb: 3, mt: 5 }} variant='h5' >Popular in romance</Typography>
          <MovieSlider movies={popularinRomence} />
        </Box>
        <Box>
          <Typography sx={{ ml: { lg: 3, md: 10 }, mb: 3, mt: 5 }} variant='h5' >Comedy Movies</Typography>
          <MovieSlider movies={comedyMovies} />
        </Box>

      </Box>
    </Container >
    </>

  );
}

export default HomePage;