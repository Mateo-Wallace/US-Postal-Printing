import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { CURRENT_USER } from "../../utils/queries";
import { useQuery, useMutation } from '@apollo/client';
import MapIcon from '@mui/icons-material/Map';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import { Button, Input } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { ADD_PACKAGE } from '../../utils/mutations'


function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #3f51b5',
    boxShadow: 24,
    p: 4,
};


const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));





function ViewPackages() {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    const [expanded, setExpanded] = React.useState(false);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [addPackage, { error }] = useMutation(ADD_PACKAGE);

    const [formState, setFormState] = React.useState({
        trackingNum: "",
        carrier: "",
        notes: "",
      });

      const handleChangeCarrier = (e) => {
        const { name, value } = e.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };

      const handleAddTrackingNum = (e) => {
        const TrackingNumber = e.target.value

        setFormState({
            ...formState,
            trackingNum: TrackingNumber
        })
      }

      const handleAddNote = (e) => {
        const note = e.target.value

        setFormState({
            ...formState,
            notes: note
        })
      }



    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const { loading, data } = useQuery(CURRENT_USER)

    const userData = data?.me || {};

    if (loading) {
        return (
            <h2>LOADING...</h2>
        )
    }

    const handleTrack = () => {
        alert('pressed')
    }

    const handleAddPackage = async () => {

        console.log(formState)
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
    }

console.log(userData)

    return (
        <div>
            <Typography sx={{ mt: 4, mb: 5, textAlign: 'Center' }} variant="h3" component="div">
                My Packages
            </Typography>
            {userData.packages.map((userPackage) =>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} key={userPackage._id}>
                    <AccordionSummary
                        expandIcon={<EditIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0, color: 'text.secondary' }}>
                            Package Tracking ID:
                        </Typography>
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>{userPackage.trackingNum}</Typography>
                        <Typography sx={{ width: '33%', flexShrink: 0, color: 'text.secondary' }}>Track this package
                            <IconButton edge="end" aria-label="delete" onClick={handleTrack}>
                                <MapIcon />
                            </IconButton>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{userPackage.notes}</Typography>
                    </AccordionDetails>
                </Accordion>
            )}
            <Button sx={{ width: '100%', mt: 10 }} variant="contained" onClick={handleOpen}>
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
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ textAlign: 'center' }}>
                        Package Tracking Number:
                    </Typography>
                    <form>
                        <TextField
                            id="tracking-number-input"
                            label="tracking-number"
                            type="text"
                            placeholder='Ex. 9415511206227509857316'
                            fullWidth
                            value={formState.trackingNum}
                            onChange={handleAddTrackingNum}
                        />
                    </form>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ textAlign: 'center', marginTop: '50px' }}>
                        Add notes for this package:
                    </Typography>
                    <form>
                        <textarea
                            id="package-notes-input"
                            label="Packages Notes"
                            type="text"
                            placeholder='Ex. 9415511206227509857316'
                            value={formState.notes}
                            onChange={handleAddNote}
                            style={{ width: '100%', height: 100, borderColor: '#999' }}
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
                    <Button sx={{ width: '100%', mt: 5 }} variant="contained" onClick={handleAddPackage}>
                        <AddIcon />
                        Add Package
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}

export default ViewPackages;