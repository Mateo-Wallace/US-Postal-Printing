import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

// material UI imports
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link2 from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// end material UI imports

// material UI function
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link2 color="inherit" href="https://mui.com/">
        Your Website
      </Link2>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();
// end material UI function

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token, data.login.user._id);
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
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
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
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link2 href="#" variant="body2">
                      Forgot password?
                    </Link2>
                  </Grid>
                  <Grid item>
                    <Link2 href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link2>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      )}
      {error && <div>{error.message}</div>}
    </main>
  );
};

export default Login;
{
  /* <div>
          <h2>Login</h2>
          <form onSubmit={handleFormSubmit}>
            <input
              placeholder='Your email'
              name='email'
              type='email'
              value={formState.email}
              onChange={handleChange}
            />
            <input
              placeholde='Your password'
              name='password'
              type='password'
              value={formState.password}
              onChange={handleChange}
            />
            <button type='submit'>Login</button>
          </form>
        </div> */
}
