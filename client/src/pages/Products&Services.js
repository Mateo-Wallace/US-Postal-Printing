import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const ProductsServices = () => {
  return (
    <div style={{display: 'flex'}}>
    <Container sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', marginTop: '30px', marginBottom: '30px'}} >
      <Box
      sx={{
        margin: 1,
        width: 350,
        height: 300,
        backgroundColor: 'primary.dark',
        borderRadius: '40px'
      }}
    > 
    <Typography sx={{margin: 1, textAlign: 'center', color: 'white'}} variant="h4" gutterBottom>
    Notary Services
  </Typography>
  </Box>
     <Box
      sx={{
        margin: 1,
        width: 350,
        height: 300,
        backgroundColor: 'primary.dark',
        borderRadius: '40px'
      }}
    >
    <Typography sx={{margin: 1, textAlign: 'center', color: 'white'}} variant="h4" gutterBottom>
    Printing Services
  </Typography>
  </Box>
  <Box
      sx={{
        margin: 1,
        width: 350,
        height: 300,
        backgroundColor: 'primary.dark',
        borderRadius: '40px'
      }}
    >
    <Typography sx={{margin: 1, textAlign: 'center', color: 'white'}} variant="h4" gutterBottom>
    Business Cards
  </Typography>
  </Box>
  <Box
      sx={{
        margin: 1,
        width: 400,
        height: 300,
        backgroundColor: 'primary.dark',
        borderRadius: '40px'
      }}
    >
    <Typography sx={{margin: 1, textAlign: 'center', color: 'white'}} variant="h4" gutterBottom>
    Copying Services
  </Typography>
  </Box>
    <Box
      sx={{
        margin: 1,
        alignSelf: 'flex-end',
        width: 400,
        height: 300,
        backgroundColor: 'primary.dark',
        borderRadius: '40px'
      }}
    >
    <Typography sx={{margin: 1, textAlign: 'center', color: 'white'}} variant="h4" gutterBottom>
    Mailbox Rentals
  </Typography>
  </Box>
    </Container>
    </div>
  )
};

export default ProductsServices;