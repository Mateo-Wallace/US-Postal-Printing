import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CURRENT_USER } from "../../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {
  ADD_PACKAGE,
  DELETE_PACKAGE,
  EDIT_PACKAGE,
} from "../../utils/mutations";
import "./viewPackages.css";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #3f51b5",
  boxShadow: 24,
  p: 4,
};

function ViewPackages() {
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [addPackage, { error }] = useMutation(ADD_PACKAGE);
  const [editPackage, { editError }] = useMutation(EDIT_PACKAGE);
  const [deletePackage, { deleteError }] = useMutation(DELETE_PACKAGE);
  const { loading, data } = useQuery(CURRENT_USER);

  const userData = data?.me || [];

  const [edit, setEditable] = React.useState(false);

  const [formState, setFormState] = React.useState({
    id: "",
    trackingNum: "",
    carrier: "",
    notes: "",
  });

  const handleEditOpenAndClose = (event) => {
    event.stopPropagation();
    setFormState({
      ...formState,
      trackingNum: event.target.dataset.trackingnum,
      notes: event.target.dataset.notes
    });
    console.log(formState);

    if (expanded) {
      setEditable(false);
    } else {
      setEditable(!edit);
    }
  };

  const handleChangeCarrier = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleAddTrackingNum = (e) => {
    const TrackingNumber = e.target.value;

    setFormState({
      ...formState,
      trackingNum: TrackingNumber,
    });
  };

  const handleAddNote = (e) => {
    const note = e.target.value;

    setFormState({
      ...formState,
      notes: note,
    });
  };

  const handleEditTrackingNum = (event) => {
    setFormState({
      ...formState,
      trackingNum: event.target.value,
    });
  };

  const handleEditNotes = (event) => {
    const note = event.target.value;

    setFormState({
      ...formState,
      trackingNum: event.target.trackingNum,
      notes: note,
    });
  };

  const setFormStateId = (event) => {
    setFormState({
      ...formState,
      id: event.target.id,
    });
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    console.log(edit);
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  const handleAddPackage = async () => {
    try {
      const { data } = await addPackage({
        variables: { ...formState },
        refetchQueries: [
          {
            query: CURRENT_USER,
          },
        ],
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }

    setFormState({
      email: "",
      password: "",
    });

    handleClose();
  };

  const handleSaveEdit = async (event) => {
    console.log({ formState });
    try {
      const { data } = await editPackage({
        variables: {
          ...formState,
          packageId: event.target.id,
        },
        refetchQueries: [
          {
            query: CURRENT_USER,
          },
        ],
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeletePackage = async (value) => {
    try {
      const { data } = await deletePackage({
        variables: {
          packageId: value,
        },
        refetchQueries: [
          {
            query: CURRENT_USER,
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          margin: 1,
          marginTop: "-20px",
          height: "60%",
          width: "90%",
          backgroundColor: "#0d579b",
          borderRadius: "40px",
          paddingBottom: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ mt: 4, mb: 5, textAlign: "Center", color: "white" }}
          variant="h3"
          component="div"
        >
          My Packages
        </Typography>
        {userData.packages.map((userPackage) => (
          <Box style={{ margin: 10 }} key={userPackage._id}>
            <Accordion
              style={{ margin: 1 }}
              onClick={(event) => {
                handleChange(event, "panel1");
                setEditable(false);
              }}
            >
              <AccordionSummary
                expandIcon={<EditIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography
                  sx={{ width: "33%", flexShrink: 0, color: "text.secondary" }}
                >
                  Package Tracking ID:
                </Typography>
                {edit ? (
                  <TextField
                    id={userPackage._id}
                    value={
                      formState.id == userPackage._id
                        ? formState.trackingNum
                        : ""
                    }
                    onChange={(event) => {
                      handleEditTrackingNum(event);
                    }}
                    onClick={(event) => {
                      event.stopPropagation();
                      setFormStateId(event);
                    }}
                    label={userPackage.trackingNum}
                    size="small"
                    placeholder="New Tracking Number"
                    sx={{ mr: 3 }}
                  ></TextField>
                ) : (
                  <Typography
                    className="tracking-id"
                    sx={{
                      width: "33%",
                      flexShrink: 0,
                      marginRight: "3px",
                      marginLeft: "40px",
                    }}
                  >
                    {userPackage.trackingNum}
                  </Typography>
                )}
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {edit ? (
                  <TextField
                    id={userPackage._id}
                    value={
                      formState.id == userPackage._id ? formState.notes : ""
                    }
                    onChange={(event) => handleEditNotes(event)}
                    onClick={(event) => {
                      event.stopPropagation();
                      setFormStateId(event);
                    }}
                    label={userPackage.notes}
                    size="large"
                    placeholder="Update Notes"
                  ></TextField>
                ) : (
                  <Typography>{userPackage.notes}</Typography>
                )}
                {edit ? (
                  <Button
                    id={userPackage._id}
                    sx={{ width: "5%", mt: 3 }}
                    variant="contained"
                    onClick={(event) => {
                      handleChange();
                      handleSaveEdit(event);
                    }}
                  >
                    Save
                  </Button>
                ) : (
                  ""
                )}
                <Button
                  sx={{ width: "20%", mt: 3 }}
                  variant="contained"
                  data-trackingnum={userPackage.trackingNum}
                  data-notes={userPackage.notes}
                  onClick={(event) => handleEditOpenAndClose(event)}
                >
                  Edit Package
                </Button>
                <Button
                  value={userPackage._id}
                  sx={{ width: "20%", mt: 3 }}
                  variant="contained"
                  color="error"
                  onClick={(e) => handleDeletePackage(e.target.value)}
                >
                  Delete Package
                </Button>
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}
        <Button
          sx={{ width: "100%", mt: 10 }}
          variant="contained"
          onClick={handleOpen}
        >
          <AddIcon />
          Add a package
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ textAlign: "center" }}
            >
              Package Tracking Number:
            </Typography>
            <form>
              <TextField
                id="tracking-number-input"
                label="tracking-number"
                type="text"
                placeholder="Ex. 9415511206227509857316"
                fullWidth
                value={formState.trackingNum}
                onChange={handleAddTrackingNum}
              />
            </form>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ textAlign: "center", marginTop: "50px" }}
            >
              Add notes for this package:
            </Typography>
            <form>
              <textarea
                id="package-notes-input"
                label="Packages Notes"
                type="text"
                placeholder="Ex. 9415511206227509857316"
                value={formState.notes}
                onChange={handleAddNote}
                style={{ width: "100%", height: 100, borderColor: "#999" }}
              />
            </form>
            <InputLabel id="carrier-label">Carrier</InputLabel>
            <Select
              required
              fullWidth
              name="carrier"
              labelId="carrier-label"
              id="carrier"
              value={formState.carrier}
              onChange={handleChangeCarrier}
            >
              <MenuItem value={"usps"}>USPS</MenuItem>
              <MenuItem value={"fedex"}>Fedex</MenuItem>
              <MenuItem value={"ups"}>UPS</MenuItem>
              <MenuItem value={"dhl_express"}>DHL</MenuItem>
            </Select>
            <Button
              sx={{ width: "100%", mt: 5 }}
              variant="contained"
              onClick={handleAddPackage}
            >
              <AddIcon />
              Add Package
            </Button>
          </Box>
        </Modal>
      </Box>
    </div>
  );
}

export default ViewPackages;
