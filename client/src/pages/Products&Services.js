import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const ProductsServices = () => {
  return (
    <div style={{display: 'flex'}}>
      <Box
      sx={{
        margin: 1,
        marginLeft: '20px',
        alignSelf: 'flex-start',
        width: 300,
        height: 600,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
    <Container sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}} fixed>
      <Box
      sx={{
        margin: 1,
        width: 400,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    > 
    <Typography sx={{margin: 1, textAlign: 'center', color: 'white'}} variant="h4" gutterBottom>
    The Real Products & Services
  </Typography>
  </Box>
     <Box
      sx={{
        margin: 1,
        width: 400,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
    <Typography sx={{margin: 1, textAlign: 'center', color: 'white'}} variant="h4" gutterBottom>
    Location & Hours
  </Typography>
  </Box>
    <Box
      sx={{
        margin: 1,
        alignSelf: 'flex-end',
        width: 600,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
    <Typography sx={{margin: 1, textAlign: 'center', color: 'white'}} variant="h4" gutterBottom>
    F.A.Q.
  </Typography>
  <Typography sx={{marginTop: '-10px', textAlign: 'center', color: 'white'}} variant="h6" gutterBottom>
    (Frequently Asked Questions)
  </Typography>
  </Box>
    </Container>
    </div>
  )
};

export default ProductsServices;