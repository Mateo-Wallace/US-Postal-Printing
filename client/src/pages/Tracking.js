import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_PACKAGE } from "../utils/mutations";
import Auth from "../utils/auth";
import { shippoTracking } from "../utils/API";

// material UI imports
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
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
  const [formState, setFormState] = useState({
    trackingNum: "",
    carrier: "",
  });
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

    if (!formState) {
      return false;
    }

    try {
      const response = await shippoTracking(
        formState.carrier,
        formState.trackingNum
      );

      console.log(response);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { items } = await response.json();
      console.log(items);
    } catch (err) {
      console.error(err);
    }

    // try {
    //   const { data } = await addPackage({
    //     variables: { ...formState },
    //   });

    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }

    // setFormState({
    //   email: "",
    //   password: "",
    // });
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
                  id="trackingNum"
                  label="Tracking Number"
                  name="trackingNum"
                  autoComplete="trackingNum"
                  autoFocus
                  value={formState.trackingNum}
                  onChange={handleChange}
                />
                <FormControl fullWidth>
                  <InputLabel id="carrier-label">Carrier</InputLabel>
                  <Select
                    required
                    fullWidth
                    name="carrier"
                    label="Carrier"
                    labelId="carrier-label"
                    id="carrier"
                    value={formState.carrier}
                    onChange={handleChange}
                  >
                    <MenuItem value={"usps"}>USPS</MenuItem>
                    <MenuItem value={"fedex"}>Fedex</MenuItem>
                    <MenuItem value={"ups"}>UPS</MenuItem>
                    <MenuItem value={"dhl_express"}>DHL</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>
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
