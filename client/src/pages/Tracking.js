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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// end material UI imports

const theme = createTheme();
// end material UI function

const Tracking = () => {
  const [formState, setFormState] = useState({
    trackingNum: "",
    carrier: "",
  });
  const [trackedPackage, setTrackedPackage] = useState([]);
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

      // if (!response.ok) {
      //   throw new Error("something went wrong!");
      // }
      const packageData = [
        {
          trackingNumber: response.tracking_number,
          carrier: response.carrier,
          eta: response.eta,
          original_eta: response.original_eta,
          address_to: response.address_to,
          tracking_status: response.tracking_status,
        },
      ];

      setTrackedPackage(packageData);
      setFormState({
        trackingNum: "",
        carrier: "",
      });
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

        <Container>
          <h2>
            {trackedPackage.length
              ? `Viewing results for ${trackedPackage[0].carrier + ' ' + trackedPackage[0].trackingNumber}:`
              : ""}
          </h2>
          <Box>
            {trackedPackage.map((p) => {
              return (
                <Container key={p.trackingNumber}>
                  <TableContainer
                    component={Paper}
                    sx={{ marginBottom: "10px" }}
                  >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Last Update</TableCell>
                          <TableCell align="right">Status</TableCell>
                          <TableCell align="right">City</TableCell>
                          <TableCell align="right">State</TableCell>
                          <TableCell align="right">Zip</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {p.tracking_status.status_date}
                          </TableCell>
                          <TableCell align="right">
                            {p.tracking_status.status_details}
                          </TableCell>
                          <TableCell align="right">
                            {p.tracking_status.location.city}
                          </TableCell>
                          <TableCell align="right">
                            {p.tracking_status.location.state}
                          </TableCell>
                          <TableCell align="right">
                            {p.tracking_status.location.zip}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Expected Delivery</TableCell>
                          <TableCell align="right">Original ETA</TableCell>
                          <TableCell align="right">City</TableCell>
                          <TableCell align="right">State</TableCell>
                          <TableCell align="right">Zip</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {p.eta}
                          </TableCell>
                          <TableCell align="right">
                            {p.original_eta}
                          </TableCell>
                          <TableCell align="right">
                            {p.address_to.city}
                          </TableCell>
                          <TableCell align="right">
                            {p.address_to.state}
                          </TableCell>
                          <TableCell align="right">
                            {p.address_to.zip}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Container>
              );
            })}
          </Box>
        </Container>
      </ThemeProvider>
    </main>
  );
};

export default Tracking;
