import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

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
    <footer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            backgroundColor: "#ff6659",
            mt: 'auto'
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={5} color='white'>
              <Grid item>
                <Box borderBottom={1}>ADDRESS</Box>
                <Box>Postal & Printing</Box>
                <Box>11150 Okeechobee Blvd Ste P</Box>
                <Box>Royal Palm Beach, FL 33411</Box>
              </Grid>
              <Grid item>
                <Box borderBottom={1}>CONTACT</Box>
                <Box>PH: 561.508.3336</Box>
                <Box>FX: 561.355.0459</Box>
                <Box>EM: info@postalandprinting.com</Box>
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
                    <Box>2:00 PM</Box>
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
            backgroundColor: "#3f50b5",
          }}
        >
          <Container maxWidth="sm">
            <Copyright />
          </Container>
        </Box>
      </Box>
    </footer>
  );
}
