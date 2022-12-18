import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_PACKAGE } from "../utils/mutations";
import { CURRENT_USER } from "../utils/queries";
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
import Box from "@mui/material/Box";
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
import './Tracking.css'
// end material UI imports

const theme = createTheme();
// end material UI function

const Tracking = () => {
  const [formState, setFormState] = useState({
    trackingNum: "",
    carrier: "",
  });
  const [trackedPackage, setTrackedPackage] = useState([]);
  const [packageSaved, setPackageSaved] = useState();
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
    setPackageSaved(false);

    if (!formState) {
      return false;
    }

    try {
      const response = await shippoTracking(
        formState.carrier,
        formState.trackingNum
      );

      console.log(response);

      if (!response.address_to) {
        alert('Something went wrong!')
        throw new Error("something went wrong!");
      }
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
  };

  const handleSavePackage = async (e) => {
    e.preventDefault();

    const p = trackedPackage[0];
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }
    console.log(p.trackingNumber, p.carrier);

    try {
      const data = await addPackage({
        variables: { trackingNum: p.trackingNumber, carrier: p.carrier },
        refetchQueries: [
            {
                query: CURRENT_USER,
            }
        ]
      });
      console.log(data);

      setPackageSaved(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="tracking" style={{marginTop: '110px', 
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: '30px'}}>
      <ThemeProvider theme={theme}>
      <Box
        sx={{
          margin: 1,
          backgroundColor: "primary.dark",
          borderRadius: "40px",
          padding: "40px",
          height: "60%",
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >

          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "lightgrey",
              borderRadius: "40px",
              padding: "40px",
            }}
          >
            <Typography component="h1" variant="h5" style={{fontWeight: 500}}>
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
                sx={{ mt: 3, mb: 2, borderRadius: "40px" }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
        sx={{
          margin: 1,
          backgroundColor: "primary.dark",
          borderRadius: "40px",
          padding: "40px",
          height: "60%",
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container>
        <Typography
            sx={{ margin: 2, textAlign: "center", color: "white" }}
            variant="h4"
          >
            {trackedPackage.length
              ? `Viewing results for ${
                  trackedPackage[0].carrier +
                  " " +
                  trackedPackage[0].trackingNumber
                }:`
              : ""}
          </Typography>
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
                          <TableCell align="right">{p.original_eta}</TableCell>
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
                  {Auth.loggedIn() ? (
                    <Box
                      component="form"
                      onSubmit={handleSavePackage}
                      noValidate
                      sx={{ mt: 1 }}
                    >
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, borderRadius: "40px" }}
                      >
                        Save Package
                      </Button>
                    </Box>
                  ) : (
                    ""
                  )}
                </Container>
              );
            })}
          </Box>
        </Container>
        {packageSaved ? (
          <Typography align="center" component="h1" variant="h5">
            Package Saved!
          </Typography>
        ) : (
          ""
        )}
        </Box>
      </ThemeProvider>
    </main>
  );
};

export default Tracking;
