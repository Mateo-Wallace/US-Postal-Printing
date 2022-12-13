import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import { CURRENT_USER } from "../../utils/queries";
import { useQuery, useMutation } from '@apollo/client';
import { EDIT_USER } from '../../utils/mutations';
import { Input } from '@mui/material';


function EditUser() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const { loading, data } = useQuery(CURRENT_USER)

    const userData = data?.me || {};


    const [editMe, {error}] = useMutation(EDIT_USER);

    const [userState, setUserState] = React.useState({
        _id: userData._id,
        username: userData.username,
        email: userData.email,
        password: userData.password,
        __typename: userData.__typename
    })

    console.log(userState)


    if (loading) {
        return (
            <h2>LOADING...</h2>
        )
    }

    const handleEditSubmit = async (event) => {
        event.preventDefault();

        

        try {
            const { data } = await editMe({
                variables: {...userState}
            })
        }
        catch(err) {
            console.error(err)
        }

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
                            <Typography>{userState.email}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <form onSubmit={handleEditSubmit}>
                            <TextField
                                id="outlined-email-input"
                                label="New Email"
                                type="email"
                                autoComplete="current-email"
                                value={userState.email}
                                    onChange={event => {setUserState({...userState, email: event.target.value })}}
                                 />
                                 </form>
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
                                    {userState.username}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <form onSubmit={handleEditSubmit}>
                                <TextField
                                    id="outlined-username-input"
                                    label="New Username"
                                    type="text"
                                    autoComplete="current-username"
                                    value={userState.username}
                                    onChange={event => {setUserState({...userState, username: event.target.value })}}
                                    />
                                    </form>
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
                                    {userState.password || '###'}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <form onSubmit={handleEditSubmit}>
                                <TextField
                                    id="outlined-password-input"
                                    label="New Password"
                                    type="password"
                                    autoComplete="current-password"
                                    defaultValue={userState.password}
                                    onChange={event => {setUserState({...userState, password: event.target.value })}}
                                    />
                                    </form>
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