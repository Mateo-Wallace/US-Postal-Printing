import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import NotaryImage from "../images/notaryServices.jpeg";
import PrintingImage from "../images/printingServices.jpg";
import CopyingImage from "../images/copyingServices.jpg";
import BusinessCardsImage from "../images/businessCards.jpg";
import MailboxImage from "../images/mailboxes.jpg";
import Chip from "@mui/material/Chip";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { style } from "@mui/system";

const Home = () => {
  return (
    <div style={{ display: "flex", marginTop: '120px' }}>
      <Box
        sx={{
          margin: 1,
          marginLeft: "20px",
          alignSelf: "flex-start",
          width: 300,
          height: 700,
          backgroundColor: "primary.dark",
        }}
      >
         <Typography
            sx={{ margin: 2, textAlign: "center", color: "white" }}
            variant="h4"
          >
            Pickup Times
          </Typography>
          <Typography
            sx={{ margin: 2, color: "white" }}
            variant="h6"
          >
            Carrier Options:
          </Typography>
          <Grid sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}>

          <Grid sx={{ margin: 1, marginLeft: '25px', borderRadius: '20px',         
           "&:hover": {
            backgroundColor: "darkgreen",
            opacity: 0.8,
          }, }} item>
          <Chip
            sx={{ fontSize: '18px', letterSpacing: '1.5px', color: "white" }}
            color="success" 
            label="USPS"
          />
          </Grid>

          <Grid sx={{ margin: 1, borderRadius: '20px',  
          "&:hover": {
            backgroundColor: "darkgreen",
            opacity: 0.8,
          }, }} item>
          <Chip
            sx={{ fontSize: '18px', letterSpacing: '1.5px', color: "white" }}
            color="success" 
            label="DHL"
          />
          </Grid>

          <Grid sx={{ margin: 1, marginLeft: '25px', borderRadius: '20px', 
        "&:hover": {
          backgroundColor: "darkgreen",
          opacity: 0.8,
        },}} item>
          <Chip
            sx={{ fontSize: '18px', letterSpacing: '1.5px', color: "white" }}
            color="success" 
            label="FEDEX"
          />
          </Grid>

            <Grid sx={{ margin: 1, marginLeft: '-2px', borderRadius: '20px', 
            "&:hover": {
            backgroundColor: "darkgreen",
            opacity: 0.8,
          }, }} item>
          <Chip
            sx={{ fontSize: '18px', letterSpacing: '1.5px', color: "white" }}
            color="success" 
            label="UPS"
          />
          </Grid>
          </Grid>
          <Typography
            sx={{ margin: 2, color: "white" }}
            variant="h6"
          >
            Dates and Times:
          </Typography>
          
          <Typography
            sx={{ margin: 2, textAlign: "center", color: "white", fontSize: '16px', marginLeft: '25px', marginTop: '20px' }}
            variant="h6"
          >
            All Carriers
          </Typography>

          <Grid sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}>

          <Grid sx={{ margin: 1, marginLeft: '25px', borderRadius: '20px',         
           "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          }, }} item>

            <Typography
            sx={{ margin: 1, marginLeft: '3px', textAlign: 'center', color: "white", fontSize: '14px' }}
            variant="h6"
          >
            Mondays
          </Typography>

          <Chip
            sx={{ fontSize: '18px', textAlign: 'center', letterSpacing: '1.5px', color: "white" }}
            color="success" 
            label="5pm"
          />
          </Grid>

          <Grid sx={{ margin: 1 }} item>

          <Typography
            sx={{ margin: 1, marginLeft: '1px', textAlign: 'center', color: "white", fontSize: '14px' }}
            variant="h6"
          >
            Tuesdays
          </Typography>

          <Chip
            sx={{ fontSize: '18px', textAlign: 'center', letterSpacing: '1.5px', color: "white" }}
            color="success" 
            label="5pm"
          />
          </Grid>

          <Grid sx={{ margin: 1, marginLeft: '32px'}} item>

          <Typography
            sx={{ margin: 1, marginLeft: '-5px', textAlign: 'center', color: "white", fontSize: '14px' }}
            variant="h6"
          >
            Wednesdays
          </Typography>

          <Chip
            sx={{ fontSize: '18px', textAlign: 'center', letterSpacing: '1.5px', color: "white" }}
            color="success" 
            label="5pm"
          />
          </Grid>

            <Grid sx={{ margin: 1, marginLeft: '2px' }} item>

            <Typography
            sx={{ margin: 1, textAlign: 'center', marginLeft: '0px', color: "white", fontSize: '14px' }}
            variant="h6"
          >
            Thursdays
          </Typography>

          <Chip
            sx={{ fontSize: '18px', textAlign: 'center', letterSpacing: '1.5px', color: "white" }}
            color="success" 
            label="5pm"
          />
          </Grid>

          <Grid sx={{ margin: 1, marginLeft: '20px'}} item>

          <Typography
            sx={{ margin: 1, color: "white", textAlign: 'center', fontSize: '14px' }}
            variant="h6"
          >
            Fridays
          </Typography>

          <Chip
            sx={{ fontSize: '18px', textAlign: 'center', letterSpacing: '1.5px', color: "white" }}
            color="success" 
            label="5pm"
          />
          </Grid>

            <Grid sx={{ margin: 1, marginRight: '-3px' }} item>

            <Typography
            sx={{ margin: 1, marginLeft: '0px', textAlign: 'center', color: "white", fontSize: '14px' }}
            variant="h6"
          >
            Saturdays
          </Typography>

          <Chip
            sx={{ fontSize: '18px', textAlign: 'center', letterSpacing: '1.5px', color: "white" }}
            color="success" 
            label="1pm"
          />
          </Grid>

          <Grid sx={{ margin: 1, marginLeft: '25px'}} item>

<Typography
  sx={{ margin: 1, textAlign: 'center', color: "white", fontSize: '14px' }}
  variant="h6"
>
  Sundays
</Typography>

<Chip
  sx={{ fontSize: '18px', textAlign: 'center', letterSpacing: '1.5px', color: "white" }}
  color="error" 
  label="No Pickups"
/>
</Grid>

          </Grid>

      </Box>
      <Container
        sx={{
          margin: 0,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
        fixed
      >
        <Box
          sx={{
            margin: 1,
            width: 550,
            height: 400,
            backgroundColor: "primary.dark",
            borderRadius: "40px",
          }}
        >
          <Typography
            sx={{ margin: 2, textAlign: "center", color: "white" }}
            variant="h4"
            gutterBottom
          >
            Products & Services
          </Typography>
          <Typography
            sx={{ marginTop: "-10px", textAlign: "center", color: "white" }}
            variant="h6"
            gutterBottom
          >
            (at a glance)
          </Typography>
          <Grid
            container
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              style={{
                height: "120px",
                width: "120px",
                padding: "10px",
                margin: "10px",
                borderRadius: "40px",
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)'
              }}
            >
              <img
                style={{
                  position: "aboslute",
                  height: "120px",
                  width: "120px",
                  borderRadius: "40px",
                }}
                src={NotaryImage}
              />

              <ImageListItemBar
                sx={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                    "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                  height: "120px",
                  width: "120px",
                  "&:hover": {
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.60) 0%, " +
                      "rgba(0,0,0,0.25) 65%, rgba(0,0,0,0) 100%)",
                  }
                }}
                title={
                  <Tooltip title="Notary Services" arrow>
                    <Chip
                      clickable={true}
                      style={{color: 'white'}}
                      label="Notary"
                      variant="outlined"
                    />
                  </Tooltip>
                }
                style={{
                  borderRadius: "40px",
                }}
              />
            </Button>

            <Button
              style={{
                height: "120px",
                width: "120px",
                padding: "10px",
                margin: "10px",
                borderRadius: "40px",
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)'
              }}
            >
              <img
                style={{
                  height: "120px",
                  width: "120px",
                  borderRadius: "40px",
                }}
                src={PrintingImage}
              />
              <ImageListItemBar
                sx={{
                  background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                height: "120px",
                width: "120px",
                "&:hover": {
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.60) 0%, " +
                    "rgba(0,0,0,0.25) 65%, rgba(0,0,0,0) 100%)",
                },
                }}
                title={
                  <Tooltip title="Printing Services" arrow>
                  <Chip
                    clickable={true}
                    style={{color: 'white'}}
                    label="Printing"
                    variant="outlined"
                  />
                  </Tooltip>
                }
                style={{
                  borderRadius: "40px"
                }}
              />
            </Button>

            <Button
              style={{
                height: "120px",
                width: "120px",
                padding: "10px",
                margin: "10px",
                borderRadius: "40px",
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)'
              }}
            >
              <img
                style={{
                  height: "120px",
                  width: "120px",
                  borderRadius: "40px",
                }}
                src={BusinessCardsImage}
              />
              <ImageListItemBar
                sx={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                    "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                  height: "120px",
                  width: "120px",
                  "&:hover": {
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.60) 0%, " +
                      "rgba(0,0,0,0.25) 65%, rgba(0,0,0,0) 100%)",
                  },
                }}
                title={
                  <Tooltip title="Business Cards" arrow>
                  <Chip
                    clickable={true}
                    style={{ color: "white" }}
                    label="Cards"
                    variant="outlined"
                  />
                  </Tooltip>
                }
                style={{
                  borderRadius: "40px",
                }}
              />
            </Button>

            <Button
              style={{
                height: "120px",
                width: "120px",
                padding: "10px",
                margin: "10px",
                borderRadius: "40px",
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)'
              }}
            >
              <img
                style={{
                  height: "120px",
                  width: "120px",
                  borderRadius: "40px",
                }}
                src={CopyingImage}
              />
              <ImageListItemBar
                sx={{
                  background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                height: "120px",
                width: "120px",
                "&:hover": {
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.60) 0%, " +
                    "rgba(0,0,0,0.25) 65%, rgba(0,0,0,0) 100%)",
                },
                }}
                title={
                  <Tooltip title="Copying Services" arrow>
                  <Chip
                    clickable={true}
                    style={{ color: "white" }}
                    label="Copying"
                    variant="outlined"
                  />
                  </Tooltip>
                }
                style={{
                  borderRadius: "40px",
                }}
              />
            </Button>

            <Button
              style={{
                height: "120px",
                width: "120px",
                padding: "10px",
                margin: "10px",
                borderRadius: "40px",
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)'
              }}
            >
              <img
                style={{
                  height: "120px",
                  width: "120px",
                  borderRadius: "40px",
                }}
                src={MailboxImage}
              />
              <ImageListItemBar
                sx={{
                  background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                height: "120px",
                width: "120px",
                "&:hover": {
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.60) 0%, " +
                    "rgba(0,0,0,0.25) 65%, rgba(0,0,0,0) 100%)",
                },
                }}
                title={
                  <Tooltip title="Mailbox Rental" arrow>
                  <Chip
                    clickable={true}
                    style={{ color: "white" }}
                    label="Mailbox"
                    variant="outlined"
                  />
                  </Tooltip>
                }
                style={{
                  borderRadius: "40px"
                }}
              />
            </Button>
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: 1,
            width: 550,
            height: 400,
            backgroundColor: "primary.dark",
            // '&:hover': {
            //   backgroundColor: 'primary.main',
            //   opacity: [0.9, 0.8, 0.7],
            // },
          }}
        >
          <Typography
            sx={{ margin: 2, textAlign: "center", color: "white" }}
            variant="h4"
            gutterBottom
          >
            Location & Hours
          </Typography>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3564.081841247327!2d-80.1523419!3d26.7098323!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9290c5efab345%3A0x214ddf6757f47116!2sUS%20Postal%20%26%20Printing!5e0!3m2!1sen!2sus!4v1671043314933!5m2!1sen!2sus"
            width="500"
            height="300"
            style={{ border: 0, margin: "8px", borderRadius: "25px", 
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' 
          }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <Card sx={{ fontSize: "16px", margin: 1, borderRadius: "25px", 
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)'
        }}>
            <Grid sx={{ margin: 1.3 }} item>
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
            alignSelf: "flex-end",
            width: 600,
            height: 300,
            backgroundColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <Typography
            sx={{ margin: 2, textAlign: "center", color: "white" }}
            variant="h4"
            gutterBottom
          >
            F.A.Q.
          </Typography>
          <Typography
            sx={{ marginTop: "-10px", textAlign: "center", color: "white" }}
            variant="h6"
            gutterBottom
          >
            (Frequently Asked Questions)
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
