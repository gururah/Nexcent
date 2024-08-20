import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import styled from '@emotion/styled';
import Card1 from '../assets/card1.png';
import Card2 from '../assets/card2.png';
import Card3 from '../assets/card3.png';
import Frame13 from './Frame 13.png';

const NewCardContainer = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px; /* Default margin-bottom for mobile */

  @media (min-width: 481px) {
    margin-bottom: 50px; /* Margin for tablets and above */
  }

  @media (min-width: 769px) {
    margin-bottom: 100px; /* Margin for laptops and above */
  }
`;

const NewCard = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 100%;
  max-width: 350px; /* Default max-width for larger screens */

  @media (max-width: 768px) {
    max-width: 300px; /* Max-width for tablets */
  }

  @media (max-width: 480px) {
    max-width: 100%; /* Max-width for mobile */
    padding: 0;
  }
`;

const NewCardContent = styled(Box)`
  text-align: center;
  background-color: #F5F7FA;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  max-width: 300px; /* Default max-width for larger screens */
  box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.1);
  margin-top: -50px; /* Default margin-top for larger screens */

  @media (max-width: 768px) {
    padding: 12px;
    max-width: 250px; /* Max-width for tablets */
  }

  @media (max-width: 480px) {
    padding: 10px;
    max-width: 90%; /* Max-width for mobile */
    margin-top: -30px; /* Adjust margin for mobile */
  }
`;

function BlogSection() {
  return (
    <Grid container spacing={2} justifyContent="center">
      <NewCardContainer item xs={12} sm={6} md={4}>
        <NewCard>
          <img src={Card1} style={{ width: '100%', height: 'auto' }} alt="Safeguarding Processes" />
          <NewCardContent>
            <Typography variant='h4' fontSize='20px' marginBottom='20px' color='gray'>
              Creating Streamlined Safeguarding Processes with OneRen
            </Typography>
            <img src={Frame13} alt="OneRen Logo" />
          </NewCardContent>
        </NewCard>
      </NewCardContainer>

      <NewCardContainer item xs={12} sm={6} md={4}>
        <NewCard>
          <img src={Card2} style={{ width: '100%', height: 'auto' }} alt="Safeguarding Processes" />
          <NewCardContent>
            <Typography variant='h4' fontSize='20px' marginBottom='20px' color='gray'>
              What are your safeguarding responsibilities and how can you manage them?
            </Typography>
            <img src={Frame13} alt="OneRen Logo" />
          </NewCardContent>
        </NewCard>
      </NewCardContainer>

      <NewCardContainer item xs={12} sm={6} md={4}>
        <NewCard>
          <img src={Card3} style={{ width: '100%', height: 'auto' }} alt="Safeguarding Processes" />
          <NewCardContent>
            <Typography variant='h4' fontSize='20px' marginBottom='20px' color='gray'>
              Revamping the Membership Model with Triathlon and the Australia
            </Typography>
            <img src={Frame13} alt="OneRen Logo" />
          </NewCardContent>
        </NewCard>
      </NewCardContainer>
    </Grid>
  );
}

export default BlogSection;
