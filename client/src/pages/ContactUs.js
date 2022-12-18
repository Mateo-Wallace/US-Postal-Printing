import React, { useRef } from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o7v6bje",
        "template_dlqmddm",
        form.current,
        "wy8lERfJqzUl-RB7J"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email succesfully sent!");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong!");
        }
      );
    e.target.reset();
  };

  return (
    <div
      style={{
        marginBottom: "10px",
        marginTop: "150px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          margin: 1,
          height: "60%",
          width: "80%",
          backgroundColor: "primary.dark",
          borderRadius: "40px",
          paddingBottom: "20px",
        }}
      >
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            gutterBottom
            variant="h4"
            sx={{ margin: 2, textAlign: "center", color: "white" }}
          >
            Contact Us
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "lightgrey",
              borderRadius: "40px",
              padding: "40px",
              height: "60%",
              width: "80%",
            }}
          >
            <form ref={form} onSubmit={sendEmail}>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    label="Name"
                    name="user_name"
                    type="text"
                    placeholder="Enter full name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="Subject"
                    name="subject"
                    type="text"
                    placeholder="Type your subject here"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    type="email"
                    label="Email"
                    name="user_email"
                    placeholder="Enter email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid
                  style={{ display: "flex", justifyContent: "center" }}
                  xs={12}
                  item
                >
                  <Button
                    style={{ backgroundColor: "#ff6659", borderRadius: "40px" }}
                    type="submit"
                    variant="contained"
                    value="Send"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </CardContent>
      </Box>
    </div>
  );
};

export default ContactUs;
