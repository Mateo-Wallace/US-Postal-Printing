import React, { useRef } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";

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
          alert("Email succesfully sent!")
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong!")
        }
      );
    e.target.reset();
  };

  return (
    <div style={{ margin: "10, 0" }}>
      <Card
        style={{
          maxWidth: 550,
          margin: "150px auto",
          padding: "20px 5px 0px 5px",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5">
            Contact Us
          </Typography>
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
              <Grid xs={12} item>
                <Button type="submit" variant="contained" value="Send">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactUs;
