import React from 'react';
import { Box, Typography, Button, Card, CardContent, Grid } from '@mui/material';

function Footer() {
  return (
    <>
      <Box sx={{ position: 'relative' ,mt:10}}>
        {/* Background Image */}
        <img
          src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQRC29H19twWKcTZ9Zpg4biJbGNaHF2GGIYNcLt4eZ6fvwugUJbuKxTjjMFPCS-y5P3ZePL57rupDtSkyUIJhv3P8leMJGMzszuG2CHNd65NwWPu5LeKxQkRNfNMHmxAwt7tmQZFk1VIrBd1aXr2AR5DM.jpg?r=5b1"
          width="100%"
          height="500px"
          alt="Footer Background"
          style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}
        />

        {/* Overlay Content */}
        <Card
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
          }}
        >
          <CardContent
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {/* Main Footer Heading */}
          <Box sx={{ textAlign: 'center', mt: 3 }}>
  <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', mb: 2 }}>
    Explore the World of Cinema
  </Typography>
  <Typography variant="body2">
    Discover new movies, get the latest updates, and dive into the magic of cinema with our curated collections.
  </Typography>
</Box>

<Grid container spacing={3} sx={{ maxWidth: '800px', margin: 'auto', mt: 3 }}>
  {[ 'Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Documentary', 'Romantic', 'Thriller', 'Adventure', 'Mystery', 'Fantasy' ].map((category, index) => (
    <Grid item xs={6} sm={3} key={index} sx={{ textAlign: 'center' }}>
      <Typography variant="body2">
        <a href={`/category/${category.toLowerCase()}`} style={{ textDecoration: 'none', color: 'white' }}>
          {category}
        </a>
      </Typography>
    </Grid>
  ))}
</Grid>

<Box sx={{ textAlign: 'center', mt: 4 }}>
  <Typography variant="h6" sx={{ mb: 1 }}>
    Join the Cinema Community!
  </Typography>
  <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
    <input type="email" placeholder="Enter your email" style={{
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      outline: 'none',
      width: '250px',
    }} />
    <Button variant="contained" sx={{
      backgroundColor: '#ff497c',
      textTransform: 'none',
      '&:hover': { backgroundColor: '#ff315c' },
    }}>
      Subscribe
    </Button>
  </Box>
  <Typography variant="body2" sx={{ mt: 2 }}>
    Follow us on social media to stay updated on the latest movie releases, behind-the-scenes, and more!
  </Typography>
  <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mt: 1 }}>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" width="20px" />
    </a>
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Twitter" width="20px" />
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
  <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="Instagram" width="20px" style={{ filter: 'invert(1)' }} />
</a>

  </Box>
</Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default Footer;
