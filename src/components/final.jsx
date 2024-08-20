import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
  },
}));

const Heading = styled('h1')(({ theme }) => ({
  margin: 0,
  fontSize: '1.5rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem',
  },
}));

const Paragraph = styled('p')(({ theme }) => ({
  margin: 0,
  marginTop: theme.spacing(2),
  fontSize: '1rem',
  lineHeight: 1.5,
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.125rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.25rem',
  },
}));

function Body8() {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={12}>
        <StyledBox textAlign="center">
          <Heading variant="subtitle1"
                sx={{ color: '#4D4D4D'}} >
            Caring is the new marketing
          </Heading>
          <Paragraph  sx={{ color: '#708090'}}>
            The Nexcent blog is the best place to read about the latest membership insights,<br />
            trends and more. See who's joining the community, read about how our community
            <br /> are increasing their membership income and lots more.
          </Paragraph>
        </StyledBox>
      </Grid>
    </Grid>
  );
}

export default Body8;
