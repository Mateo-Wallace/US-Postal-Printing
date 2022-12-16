import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { AppBar } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary white" align="center">
      {"Copyright © US Postal & Printing "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <footer
    style={{
      position: 'sticky',
    }}
    >
      <AppBar
      position="sticky"
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "100vh",
          position: 'sticky',
          bottom: 0,
          minWidth: '100vh',
          margin: 0,
          left: 0
        }}
      >
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            backgroundColor: "#ff6659",
            mt: 'auto',
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={5} color='white'>
              <Grid item>
                <Box borderBottom={1}>ADDRESS</Box>
                <Box>US Postal & Printing</Box>
                <Box>6901 Okeechobee Blvd Ste D-5</Box>
                <Box>West Palm Beach, FL 33411</Box>
              </Grid>
              <Grid item>
                <Box borderBottom={1}>CONTACT</Box>
                <Box>PH: 561.686.9660</Box>
                <Box>FX: 561.684.3257</Box>
                <Box>EM: uspostalprinting@gmail.com</Box>
              </Grid>
              <Grid item>
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
                    <Box>3:00 PM</Box>
                  </Grid>
                  <Grid item px={1}>
                    <Box>SUN</Box>
                    <Box>Closed</Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            backgroundColor: 'primary',
          }}
        >
          <Container maxWidth="sm">
            <Copyright />
          </Container>
        </Box>
      </AppBar>
    </footer>
  );
}
