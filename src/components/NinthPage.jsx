import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card1 from '../assets/card1.png';
import Card2 from '../assets/card2.png';
import Card3 from '../assets/card3.png';
import Frame13 from './Frame 13.png';

const NewCard = ({ image, title }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 2,
      bgcolor: 'white',
      borderRadius: 2,
      boxShadow: 1,
      height: 'auto',
      maxWidth: '100%',
      textAlign: 'center',
      position: 'relative'
    }}
  >
    <img
      src={image}
      alt="Card Image"
      style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
    />
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#F5F7FA',
        padding: 2,
        borderRadius: '0 0 8px 8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h6" component="div" sx={{ mb: 1, color: 'gray' }}>
        {title}
      </Typography>
      <img src={Frame13} alt="Logo" style={{ width: '100%', height: 'auto' }} />
    </Box>
  </Box>
);

const NinthPage = () => {
  return (
    <Box sx={{ py: 4, px: { xs: 2, sm: 4, md: 6 } }} >
      <Grid container spacing={4} justifyContent="center" sx={{padding: { xs: '8px 2px', sm: '10px px' }}}>
        <Grid item xs={12} sm={6} md={4}>
          <NewCard
            image={Card1}
            title="Creating Streamlined Safeguarding Processes with OneRen"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <NewCard
            image={Card2}
            title="What are your safeguarding responsibilities and how can you manage them?"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
          <NewCard
            image={Card3}
            title="Revamping the Membership Model with Triathlon Australia"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default NinthPage;
