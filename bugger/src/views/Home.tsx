import React from 'react';
import { Box, Button, Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import backgroundImg from '../assets/buggerglitch.jpg';


const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const glitchImageUrl = './buggerglitch.jpg';
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            height: isMobile ? 'auto' : '100vh',
            background: `url(${backgroundImg})`,
            overflow: 'hidden',
            backgroundSize: 'cover',
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper
          elevation={3}
          sx={{
            padding: theme.spacing(4),
            height: isMobile ? 'auto' : '100vh',
       
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h3" gutterBottom>
           Welcome to Bugger!
          </Typography>
          <Typography variant="body1" paragraph>
           To start your experience being a bugg spotter just select a project that seems to have a problem, then press the button and write your review there.
           Help the comunity by making it buggless !

          </Typography>
          <Button variant="contained" color="primary" href='/Projects'>
            Learn More
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HomePage;
