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
import { useQuery } from '@apollo/client';
import MapIcon from '@mui/icons-material/Map';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

function ViewPackages() {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    const [expanded, setExpanded] = React.useState(false);

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

    return (
        <div>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h3" component="div">
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
                            Package
                        </Typography>
                        <Typography>{userPackage.trackingNum}</Typography>
                        <IconButton edge="end" aria-label="delete" onClick={handleTrack}>
                            <MapIcon />
                        </IconButton>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextField
                            id="outlined-note-input"
                            label="Add Note"
                            type="text"
                        />
                    </AccordionDetails>
                </Accordion>
            )}
        </div>
    );
}

export default ViewPackages;