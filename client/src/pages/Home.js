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
        // '&:hover': {
        //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >
    <Typography sx={{margin: 1, textAlign: 'center', color: 'white'}} variant="h4" gutterBottom>
    Location & Hours
  </Typography>
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3564.081841247327!2d-80.1523419!3d26.7098323!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9290c5efab345%3A0x214ddf6757f47116!2sUS%20Postal%20%26%20Printing!5e0!3m2!1sen!2sus!4v1671043314933!5m2!1sen!2sus" 
  width="400" 
  height="300" 
  style={{border:0}} 
  allowFullScreen="" 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade">

  </iframe>
  {/* <img
  width="325px"
  height="210px"
  frameBorder="0" style={{border: 0, margin: '8px'}}
  src={Map}
  href= 'https://surveyjs.io/form-library/examples/nps-question/reactjs'>
</img> */}
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