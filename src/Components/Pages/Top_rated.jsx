import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material';

const movieData = [

  {
    title: 'Kalki',
    description: 'action movie',
    image: 'https://avatars.mds.yandex.net/i?id=9d59e124caa00bd870d69b1548929807f5d89781-9265621-images-thumbs&n=13',
    rating: 8.1,
    releaseYear: 2020,
  },
  {
    title: 'Spacial ops ',
    description: 'This is a movie description',
    image: 'https://st1.bollywoodlife.com/wp-content/uploads/2021/10/Special-Ops-1.5-300x300.jpg',
    rating: 8.1,
    releaseYear: 2020,
  },

  {
    title: 'Dangal',
    description: 'Biographical sports drama film',
    image: 'https://i.pinimg.com/736x/96/3a/93/963a936f33e329b368b4e663ffac7ea8--bollywood.jpg',
    rating: 8.1,
    releaseYear: 2016,
  },
  {
    title: 'Lagaan',
    description: 'Epic sports drama film',
    image: 'https://im.rediff.com/300-300/movies/2011/jun/15slid1.jpg',
    rating: 8.1,
    releaseYear: 2001,
  },
  {
    title: 'Taare Zameen Par',
    description: 'Drama film',
    image: 'https://lastfm.freetls.fastly.net/i/u/avatar300s/a8d8d09976b1482a83e2156a17fc3a31.jpg',
    rating: 8.1,
    releaseYear: 2007,
  },
  {
    title: '3 Idiots',
    description: 'Coming-of-age comedy-drama film',
    image: 'https://lastfm.freetls.fastly.net/i/u/300x300/4c81e9159c0e44c28d697e5458426d98.jpg',
    rating: 8.4,
    releaseYear: 2009,
  },
  {
    title: 'PK',
    description: 'Satirical science fiction comedy film',
    image: 'https://avatars.mds.yandex.net/i?id=95f7d607fb893b9d9f4fa5df8fb59fde49091380-6917174-images-thumbs&n=13',
    rating: 8.1,
    releaseYear: 2014,
  },
  {
    title: 'Bajirao Mastani',
    description: 'Historical romance film',
    image: 'https://i0.wp.com/m.media-amazon.com/images/S/pv-target-images/5a75a716d62276d3b34dd73b1a15ab94b783246dab099557dac31967ab9ebba9.jpg?resize=300%2C300&ssl=1',
    rating: 7.5,
    releaseYear: 2015,
  },

{
  title: 'Jawan',
  description: 'Action film',
  image: 'https://upload.wikimedia.org/wikipedia/en/3/39/Jawan_film_poster.jpg',
  rating: 7.5,
  releaseYear: 2023,
},
{
  title: 'Do Patti',
  description: 'Action film',
  image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28516522_v_v13_aa.jpg',
  rating: 7.5,
  releaseYear: 2023,
},
  {
    title: 'Dangal',
    description: 'Biographical sports drama film',
    image: 'https://i.pinimg.com/736x/96/3a/93/963a936f33e329b368b4e663ffac7ea8--bollywood.jpg',
    rating: 8.1,
    releaseYear: 2016,
  },



  {
    title: 'Mohabbatein',
    description: 'Romance drama film',
    image: 'https://i.pinimg.com/originals/b5/54/7d/b5547d24a6990fcb79ed0e5af8c00eb0.jpg',
    rating: 7.6,
    releaseYear: 2000,
  },

  {
    title: 'Veer-Zaara',
    description: 'Romance film',
    image: 'https://avatars.mds.yandex.net/i?id=7c9721323532c9d848a94242b01488e4-4182781-images-thumbs&n=13',
    rating: 7.5,
    releaseYear: 2004,
  },
  {
    title: 'Jodhaa Akbar',
    description: 'Historical romance film',
    image: 'https://www.lyricsia.com/resources/images/Jodhaa-Akbar-300-2008.jpg',
    rating: 7.5,
    releaseYear: 2008,
  },
  {
    title: 'My Name Is Khan',
    description: 'Drama film',
    image: 'https://avatars.mds.yandex.net/i?id=9fd13d8c66a1054f1bfebebf209dc1ab048b6829-12168040-images-thumbs&n=13',
    rating: 7.5,
    releaseYear: 2010,
  },
  {
    title: 'Chennai Express',
    description: 'Action comedy film',
    image: 'https://m.media-amazon.com/images/M/MV5BNDM5ZWM2ZTktZTM5My00NGQzLWFkYmItZjAyNDU0ZTliOGIyXkEyXkFqcGc@._V1_.jpg',
    rating: 6.4,
    releaseYear: 2013,
  },
  {
    title: 'Happy New Year',
    description: 'Heist comedy-drama film',
    image: 'https://images.jdmagicbox.com/comp/jd_social/news/2018jul25/image-148642-kgmk5rcik3.jpg',
    rating: 5.8,
    releaseYear: 2014,
  },
  {
    title: 'Dilwale',
    description: 'Action comedy film',
    image: 'https://avatars.mds.yandex.net/i?id=ea4fd1ba45325e6fbc6e077dae1930a4e3ef96f7-5378083-images-thumbs&n=13',
    rating: 5.1,
    releaseYear: 2015,
  },

  {
    title: 'Dear Zindagi',
    description: 'Coming-of-age drama film',
    image: 'https://avatars.mds.yandex.net/i?id=f8773220fab0e160aa9d366c69c9bf6e-5216221-images-thumbs&n=13',
    rating: 7.5,
    releaseYear: 2016,
  },
  {
  title: 'Heropanti',
  description: 'Action romantic film',
  image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/heropanti-et00015363-24-03-2017-16-43-36.jpg',
  rating: 5.5,
  releaseYear: 2014,
},
  {
    title: 'Padmaavat',
    description: 'Historical drama film',
    image: 'https://avatars.mds.yandex.net/i?id=869ca8e4a698ce721476951d4c0a82bfdea4af5b-10702699-images-thumbs&n=13',
    rating: 7.5,
    releaseYear: 2018,
  },
  {
    title: 'Sanju',
    description: 'Biographical drama film',
    image: 'https://avatars.mds.yandex.net/i?id=6fc833aa638534afb6af8c85b4062998-5042014-images-thumbs&n=13',
    rating: 7.5,
    releaseYear: 2018,
  },
  {
    title: 'Stree',
    description: 'Comedy horror film',
    image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202408/stree-2-box-office-195147158-1x1_0.jpeg?VersionId=WOZn2F3qGjjtn8ZsTsnSuitXJE1ItYPA',
    rating: 7.5,
    releaseYear: 2018,
  },
  {
    title: 'Badhaai Ho',
    description: 'Coming-of-age comedy-drama film',
    image: 'https://static.kinoafisha.info/k/movie_posters/1080x1920/upload/movie_posters/9/8/5/8355589/757948061653467621.jpg',
    rating: 7.5,
    releaseYear: 2018,
  },


];

function TopRated({ favorites, addFavorite }) {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography sx={{ mt: 5 }} variant="h4" component="h2" gutterBottom>
            Top Rated Movies
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" component="p" gutterBottom>
            Browse through our collection of top-rated movies
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {movieData.map((movie, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={movie.image}
                    alt="Movie Image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {movie.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {movie.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Release Year: {movie.releaseYear}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Rating: {movie.rating}/10
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={() => addFavorite(movie)}
                      disabled={favorites.some(
                        (fav) => fav.title === movie.title
                      )}
                    >
                      Add to Favourites
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TopRated;
