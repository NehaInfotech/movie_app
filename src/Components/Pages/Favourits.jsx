import React from 'react';
import { Container, Grid, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';

function Favorites({ favorites, removeFavorite }) {
  return (
    <Container maxWidth="lg">
      <Typography sx={{ mt: 5 }} variant="h4" component="h2" gutterBottom>
        Your Favourites
      </Typography>
      <Grid container spacing={2}>
        {favorites.map((movie, index) => (
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
                  color="error"
                  onClick={() => removeFavorite(movie)}
                >
                  Remove
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Favorites;
