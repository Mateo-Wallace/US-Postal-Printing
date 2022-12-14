import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_PACKAGE } from "../utils/mutations";

// material UI imports
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link2 from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// end material UI imports

const theme = createTheme();
// end material UI function

const Tracking = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addPackage, { error, data }] = useMutation(ADD_PACKAGE);

  /// HANDLE CHANGE ///
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  /// FORM SUBMISSION ///
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await addPackage({
        variables: { ...formState },
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main>
      {data ? (
        <p>
          Successfully logged in! You may now head{" "}
          <Link to="/">back to the hompage.</Link>
        </p>
      ) : (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Track A Package
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={formState.email}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link2 href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link2>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      )}
      {error && <div>{error.message}</div>}
    </main>
  );
};

export default Tracking;
