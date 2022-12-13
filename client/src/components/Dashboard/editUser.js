import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import { CURRENT_USER } from "../../utils/queries";
import { useQuery } from '@apollo/client';

function EditUser() {
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

    return (
        <div>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h3" component="div">
                Edit Account
            </Typography>
                 <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<EditIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0, color: 'text.secondary' }}>
                                Email
                            </Typography>
                            <Typography>{userData.email}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TextField
                                id="outlined-email-input"
                                label="New Email"
                                type="email"
                                autoComplete="current-email" />
                        </AccordionDetails>
                    </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={<EditIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0, color: 'text.secondary' }}>Username</Typography>
                                <Typography>
                                    {userData.username}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <TextField
                                    id="outlined-username-input"
                                    label="New Username"
                                    type="text"
                                    autoComplete="current-username" />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={<EditIcon />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0, color: 'text.secondary' }}>
                                    Password
                                </Typography>
                                <Typography>
                                    #########
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <TextField
                                    id="outlined-password-input"
                                    label="New Password"
                                    type="password"
                                    autoComplete="current-password" />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                expandIcon={<EditIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0, color: 'text.secondary' }}>Phone Number</Typography>
                                <Typography>
                                    555-555-5555
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <TextField
                                    id="outlined-phonenumber-input"
                                    label="New Phone Number"
                                    type="text"
                                    autoComplete="current-phonenumber" />
                            </AccordionDetails>
                        </Accordion>
        </div>
    );
}

export default EditUser;