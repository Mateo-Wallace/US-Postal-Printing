import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card  from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import IconButton  from '@mui/material/IconButton';
import NotaryImage from '../images/notaryServices.jpeg'
import PrintingImage from '../images/printingServices.jpg'
import CopyingImage from '../images/copyingServices.jpg'
import BusinessCardsImage from '../images/businessCards.jpg'
import MailboxImage from '../images/mailboxes.jpg'
import Chip from '@mui/material/Chip';
import ImageListItemBar from '@mui/material/ImageListItemBar'



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
    <Container sx={{margin: 0, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}} fixed>
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
    Products & Services
  </Typography>
  <Typography sx={{marginTop: '-10px', textAlign: 'center', color: 'white'}} variant="h6" gutterBottom>
    (at a glance)
  </Typography>
  <Grid container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>

  <IconButton style={{position: 'relative'}} sx={{margin: '5px'}} aria-label="Notary-Services" size="large">
    <div  style={{display: 'flex', position: 'relative', justifyContent: 'center'}} >
  <Chip style={{zIndex: 90, position: 'aboslute'}} label='Notary Services' variant="outlined" />
  <img style={{ position: 'aboslute', height: '120px', width: '120px', borderRadius: '50px'}}src={NotaryImage}></img>
  </div>
</IconButton>

<IconButton sx={{margin: '5px', display: 'flex'}}  aria-label="Printing-Services" size="large">
  <img style={{height: '120px', width: '120px', borderRadius: '50px'}}src={PrintingImage} />
  <ImageListItemBar
            sx={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
            }}
            title={<Chip style={{color: 'white'}} label='Printing' variant="outlined" />}
            style={{borderRadius: '100px', justifySelf: 'center', alignSelf: 'center' }}
          />
</IconButton>


<IconButton sx={{margin: '5px'}}  aria-label="Business-Cards" size="large">
  <img style={{height: '120px', width: '120px', borderRadius: '50px'}}src={BusinessCardsImage}></img>
</IconButton>

<IconButton sx={{margin: '5px'}}  aria-label="Copying-Services" size="large">
  <img style={{height: '120px', width: '120px', borderRadius: '50px'}}src={CopyingImage}></img>
</IconButton>

<IconButton sx={{margin: '5px'}}  aria-label="Mailbox-Rental" size="large">
  <img style={{height: '120px', width: '120px', borderRadius: '50px'}}src={MailboxImage}></img>
</IconButton>

</Grid>
  </Box>
     <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
  width= "500"
  height= "300"
  style={{border:0, margin: '8px', borderRadius: '25px'}} 
  allowFullScreen="" 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade">
  </iframe>
  <Card sx={{fontSize: '16px', margin: 1}}>
  <Grid sx={{margin: 1}} item>
                <Box borderBottom={1}>STORE HOURS</Box>
                <Grid container>
                  <Grid item px={1}>
                    <Box>MON</Box>
                    <Box>9:00 AM</Box>
                    <Box>6:00 PM</Box>
                  </Grid>
                  <Grid item px={1}>
                    <Box>TUE</Box>
                    <Box>9:00 AM</Box>
                    <Box>6:00 PM</Box>
                  </Grid>
                  <Grid item px={1}>
                    <Box>WED</Box>
                    <Box>9:00 AM</Box>
                    <Box>6:00 PM</Box>
                  </Grid>
                  <Grid item px={1}>
                    <Box>THU</Box>
                    <Box>9:00 AM</Box>
                    <Box>6:00 PM</Box>
                  </Grid>
                  <Grid item px={1}>
                    <Box>FRI</Box>
                    <Box>9:00 AM</Box>
                    <Box>6:00 PM</Box>
                  </Grid>
                  <Grid item px={1}>
                    <Box>SAT</Box>
                    <Box>10:00 AM</Box>
                    <Box>2:00 PM</Box>
                  </Grid>
                  <Grid item px={1}>
                    <Box>SUN</Box>
                    <Box>Closed</Box>
                  </Grid>
                </Grid>
              </Grid>
              </Card>
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