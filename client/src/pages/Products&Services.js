import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import NotaryImage from "../images/notaryServices.jpeg";

const ProductsServices = () => {
  return (
    <div style={{ display: "flex" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <Card
          sx={{
            maxWidth: 345,
            backgroundColor: "primary.dark",
            borderRadius: "40px",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={NotaryImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              sx={{ color: "white" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              Notary Services
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              When it comes to notarizing your business and personal documents,
              US Postal & Printing can get the job done. Stop by today and get
              notarizing checked off your list. Some commonly notarized
              documents include:
              <p>Wills, Trusts, Deeds, Contracts, & Affidavits</p>
            </Typography>
          </CardContent>
        </Card>
        <Box
          sx={{
            margin: 1,
            width: 350,
            height: 300,
            backgroundColor: "primary.dark",
            borderRadius: "40px",
          }}
        >
          <Typography
            sx={{ margin: 1, textAlign: "center", color: "white" }}
            variant="h4"
            gutterBottom
          >
            Printing Services
          </Typography>
        </Box>
        <Box
          sx={{
            margin: 1,
            width: 350,
            height: 300,
            backgroundColor: "primary.dark",
            borderRadius: "40px",
          }}
        >
          <Typography
            sx={{ margin: 1, textAlign: "center", color: "white" }}
            variant="h4"
            gutterBottom
          >
            Business Cards
          </Typography>
        </Box>
        <Box
          sx={{
            margin: 1,
            width: 400,
            height: 300,
            backgroundColor: "primary.dark",
            borderRadius: "40px",
          }}
        >
          <Typography
            sx={{ margin: 1, textAlign: "center", color: "white" }}
            variant="h4"
            gutterBottom
          >
            Copying Services
          </Typography>
        </Box>
        <Box
          sx={{
            margin: 1,
            alignSelf: "flex-end",
            width: 400,
            height: 300,
            backgroundColor: "primary.dark",
            borderRadius: "40px",
          }}
        >
          <Typography
            sx={{ margin: 1, textAlign: "center", color: "white" }}
            variant="h4"
            gutterBottom
          >
            Mailbox Rentals
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default ProductsServices;
