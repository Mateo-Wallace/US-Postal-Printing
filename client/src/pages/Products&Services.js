import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import NotaryImage from "../images/notaryServices.jpeg";
import PrintingImage from "../images/printingServices.jpg";
import CopyingImage from "../images/copyingServices.jpg";
import BusinessCardsImage from "../images/businessCards.jpg";
import MailboxImage from "../images/mailboxes.jpg";

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
            image={PrintingImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              sx={{ color: "white" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              Printing Services
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              When you need something printed or copied for your small business,
              US Postal & Printing is ready to help you make it picture perfect.
              Come visit your local print shop for:
              <p>Posters, Signs, Flyers, Pamphlets, Letterhead</p>
            </Typography>
          </CardContent>
        </Card>
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
            image={BusinessCardsImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              sx={{ color: "white" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              Business Cards
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              A professionally printed, high-quality business card leaves a
              lasting impression on your small business customers and is one of
              the best marketing tools you have. Our business card printing
              services include:
              <p>Full Color, Double Sided, Assortment of Paper</p>
            </Typography>
          </CardContent>
        </Card>
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
            image={CopyingImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              sx={{ color: "white" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              Copying Services
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              Copying is a common occurance for your business, and US Postal &
              Printing is here to fulfill those needs no matter the size. Our
              business card printing services include:
              <p>Full Color, Double Sided, Assortment of Paper</p>
            </Typography>
          </CardContent>
        </Card>
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
            image={MailboxImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              sx={{ color: "white" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              Mailbox Rentals
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              With our mailbox services, you get a lot more than just a PO box
              with a key. You get convenience, a secure location for storing
              your mail and packages, professionalism and other services to help
              you run your business and life more efficiently.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default ProductsServices;
