import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Map from '../images/US-Postal-Printing-Map.png';



const Home = () => {
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
    <Container sx={{margin: 0,  display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}} fixed>
      <Box
      sx={{
        margin: 1,
        width: 550,
        height: 400,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    > 
    <Typography sx={{margin: 1, textAlign: 'center', color: 'white'}} variant="h4" gutterBottom>
    Products & Services
  </Typography>
  <Typography sx={{marginTop: '-10px', textAlign: 'center', color: 'white'}} variant="h6" gutterBottom>
    (at a glance)
  </Typography>
  </Box>
     <Box
      sx={{
        margin: 1,
        width: 550,
        height: 400,
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
  <a href="https://www.google.com/maps/place/Postal+%26+Printing/@26.7077343,-80.2237872,16z/data=!4m5!3m4!1s0x88d92f8cbb645c6b:0xe6fd7a8b86fec5e0!8m2!3d26.70705!4d-80.2191157" target="_blank" rel="noreferrer">
  <img
  width="325px"
  height="210px"
  frameBorder="0" style={{border: 0, margin: '8px'}}
  src={Map}
  href= 'https://surveyjs.io/form-library/examples/nps-question/reactjs'>
</img>
</a>
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

export default Home;