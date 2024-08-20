import React from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import testimonialImage from '../assets/testimonialImage1.png'; 

const TestimonialsSection = () => {
  return (
    <Container maxWidth="lg">
      <Box py={{ xs: 2, sm: 4, md: 5 }}>
        <Grid container spacing={3} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
          <Grid item xs={12} sm={6} md={9} lg={4}>
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center',
                height: 'auto',
                maxWidth: { xs: '100%', sm: '400px', md: '500px', lg: '600px' },
                margin: 'auto'
              }}
            >
              <img
                src={testimonialImage}
                alt="Testimonial"
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '8px' 
                }} 
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={8} lg={8}>
            <Box 
              p={{ xs: 2, sm: 3, md: 4 }}
              sx={{ 
                width: '100%', 
                maxWidth: '661px',
                height: 'auto',
                mx: 'auto', // Center content
                textAlign: { xs: 'center', sm: 'left' }
              }}
            >
              <Typography 
                variant="h4" 
                component="h2" 
                gutterBottom
                sx={{ 
                  mb: 2,
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
                }}
              >
                The unseen of spending three years at Pixelgrade
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ 
                  color: '#708090', 
                  mb: 2,
                  fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' }
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ispsum. Sed accumsan quarn vitae est varius fringila. Pellenteque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amer risus pretium auctor. Etiam quis massa pulvinar aliquam quam vitae, tempus sem. Donec elementum pulvier adio.
              </Typography>
              <Button
                variant="contained"
                sx={{ 
                  backgroundColor: '#4caf50', 
                  color: 'white', 
                  textTransform: 'none' 
                }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default TestimonialsSection;
