import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Icon1 from '../assets/Icon1.png';
import Icon2 from '../assets/Icon2.png';
import Icon3 from '../assets/Icon3.png';
import Icon4 from '../assets/Icon4.png';

function Body7() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: '#f5f5f5',
        py: { xs: 2, sm: 4, md: 6 },
        px: { xs: 2, sm: 4, md: 6 },
        mt: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              textAlign: { xs: 'center', md: 'left' },
              mx: { xs: 0, md: 'auto' },
              px: { xs: 1, sm: 2, md: 4 },
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              Helping a local
            </Typography>
            <Typography variant="h4" component="h1" sx={{ color: 'green' }}>
              business reinvent itself
            </Typography>
            <Typography variant="body1" sx={{ color: 'black', mt: 1 }}>
              We reached here with our hard work and dedication
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={6} sm={6} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: { xs: 'column', sm: 'row' },
                  textAlign: { xs: 'center', sm: 'start' },
                }}
              >
                <img
                  src={Icon1}
                  alt="Icon 1"
                  style={{ maxWidth: '100%', maxHeight: '60px', objectFit: 'contain' }}
                />
                <Box sx={{ ml: { xs: 0, sm: 1 } }}>
                  <Typography variant="h6" component="b">2,245,000</Typography>
                  <Typography variant="body2">Members</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: { xs: 'column', sm: 'row' },
                  textAlign: { xs: 'center', sm: 'start' },
                }}
              >
                <img
                  src={Icon2}
                  alt="Icon 2"
                  style={{ maxWidth: '100%', maxHeight: '60px', objectFit: 'contain' }}
                />
                <Box sx={{ ml: { xs: 0, sm: 1 } }}>
                  <Typography variant="h6" component="b">4,632,812</Typography>
                  <Typography variant="body2">Clubs</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: { xs: 'column', sm: 'row' },
                  textAlign: { xs: 'center', sm: 'start' },
                }}
              >
                <img
                  src={Icon3}
                  alt="Icon 3"
                  style={{ maxWidth: '100%', maxHeight: '60px', objectFit: 'contain' }}
                />
                <Box sx={{ ml: { xs: 0, sm: 1 } }}>
                  <Typography variant="h6" component="b">828,000</Typography>
                  <Typography variant="body2">Event Bookings</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: { xs: 'column', sm: 'row' },
                  textAlign: { xs: 'center', sm: 'start' },
                }}
              >
                <img
                  src={Icon4}
                  alt="Icon 4"
                  style={{ maxWidth: '100%', maxHeight: '60px', objectFit: 'contain' }}
                />
                <Box sx={{ ml: { xs: 0, sm: 1 } }}>
                  <Typography variant="h6" component="b">1,926,000</Typography>
                  <Typography variant="body2">Payments</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Body7;
