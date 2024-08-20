import { East } from '@mui/icons-material';
import React from 'react';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material'; // Import Typography from MUI
import testimonialImage from '../assets/testimonialImage3.png';
import Sampleicon1 from '../assets/sampleicon1.png';
import Sampleicon2 from '../assets/sampleicon2.png';
import Sampleicon3 from '../assets/sampleicon3.png';
import Sampleicon4 from '../assets/sampleicon4.png';
import Sampleicon5 from '../assets/sampleicon5.png';
import Sampleicon6 from '../assets/sampleicon6.png';

function TestimonalsSection2() {
    return (
        <Box 
            sx={{ 
                flexGrow: 1, 
                height: 'auto', 
                marginTop: { xs: '20px', sm: '30px' },
                padding: { xs: '0 16px', sm: '0 32px' } 
            }}
        >
            <Grid container spacing={3} columns={14} alignItems="center">
                {/* Image Section */}
                <Grid 
                    item 
                    xs={12} 
                    sm={5} 
                    md={4}
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: 'center', sm: 'flex-start' },
                        marginTop: { xs: '10px', sm: '0' },
                        textAlign: { xs: 'center', sm: 'left' }
                    }}
                >
                    <img 
                        src={testimonialImage}
                        alt="Testimonial"
                        style={{
                            maxWidth: '90%', 
                            height: 'auto',
                            paddingLeft: { xs: '0', sm: '5px' }
                        }} 
                    />
                </Grid>

                <Grid 
                    item 
                    xs={12} 
                    sm={9} 
                    md={9}
                    sx={{
                        marginTop: { xs: '20px', sm: '0' ,md:'40px'},
                        paddingLeft: { sm: '0' },
                        textAlign: { xs: 'center', sm: 'left' },
                        alignItems: { xs: 'center', sm: 'flex-start' }
                    }}
                >
                    <Box>
                    <Typography
                variant="subtitle1"
                sx={{ color: '#708090', mb: 2 }}
              >
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
              </Typography>
                        <Typography
                            component="h1"
                            sx={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 500,
                                fontSize: { xs: '14px', sm: '16px', md: '20px' },
                                color: 'green',
                                margin: '10px 0',
                                marginBottom: { md:'30px'},
                            }}
                        >
                            Tim Smith
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{ color: '#708090', mb: 2 }}
                            
                        >
                            British Dragon Boat Racing Association
                        </Typography>
                    </Box>
                    <Box 
                        display='flex' 
                        sx={{ 
                            flexDirection: { xs: 'column', sm: 'row' }, 
                            alignItems: { xs: 'center', sm: 'flex-start' },
                            // marginTop: '30px' ,
                            marginTop: {xs:'10px',md:'14px'}
                        }}
                    >
                        <Box 
                            display='grid' 
                            gridTemplateColumns='repeat(6, 1fr)' 
                            gap={1} 
                            sx={{ 
                                alignContent: 'center', 
                                marginTop: '10px', 
                                width: '100%', 
                                marginBottom: '10px' 
                                
                            }}
                        > 
                            <Box gridColumn='span 1'>
                                <img src={Sampleicon1} alt="Icon 1" style={{ maxWidth: '100%' }} />
                            </Box>
                            <Box gridColumn='span 1'>
                                <img src={Sampleicon2} alt="Icon 2" style={{ maxWidth: '100%' }} />
                            </Box>
                            <Box gridColumn='span 1'>
                                <img src={Sampleicon3} alt="Icon 3" style={{ maxWidth: '100%' }} />
                            </Box>
                            <Box gridColumn='span 1'>
                                <img src={Sampleicon4} alt="Icon 4" style={{ maxWidth: '100%' }} />
                            </Box>
                            <Box gridColumn='span 1'>
                                <img src={Sampleicon5} alt="Icon 5" style={{ maxWidth: '100%' }} />
                            </Box>
                            <Box gridColumn='span 1'>
                                <img src={Sampleicon6} alt="Icon 6" style={{ maxWidth: '100%' }} />
                            </Box>
                        </Box>
                        <Box 
                            sx={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                // marginTop: '34px',
                                
                                marginLeft: { sm: '2px' },
                                
                            }}
                        >
                            <Button sx={{ color: 'green', whiteSpace: 'nowrap', textTransform: 'none' }}>
                                Meet All Customers
                            </Button>
                            <East fontSize="large" sx={{ color: 'green', marginLeft: '5px' }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default TestimonalsSection2;
