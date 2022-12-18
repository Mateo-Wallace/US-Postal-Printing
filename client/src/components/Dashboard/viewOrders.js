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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DELETE_ORDER } from '../../utils/mutations';

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

function ViewOrders() {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    const { loading, data } = useQuery(CURRENT_USER)
    const [deleteOrder, { deleteError }] = useMutation(DELETE_ORDER);

    const userData = data?.me || {};
    console.log(userData.orders)

    if (loading) {
        return (
            <h2>LOADING...</h2>
        )
    }

    const handleDeleteOrder = async (value) => {

        try {
            const { data } = await deleteOrder({
                variables: {
                    orderId: value,
                },
                refetchQueries: [
                    {
                        query: CURRENT_USER,
                    }
                ]
            }
            );

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ minWidth: '100%' }}>
                    <Typography sx={{ mt: 4, mb: 5, textAlign: 'center' }} variant="h3" component="div">
                        My Orders
                    </Typography>
                    <Demo>
                        <List dense={dense}>
                            {userData.orders.map((order) =>
                                <>
                                    <ListItem key={order._id}
                                        secondaryAction={
                                            <IconButton edge="end" aria-label="delete" value={order._id} onClick={e => handleDeleteOrder(e.target.value)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        }
                                    >
                                        <ListItemText
                                            sx={{textDecoration: 'underline'}}
                                            primary={order._id}
                                            secondary={secondary ? 'Secondary text' : null}
                                        />
                                    </ListItem>
                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Order Message</TableCell>
                                                    <TableCell align="right">Ordered On:</TableCell>
                                                    <TableCell align="right">Order Type</TableCell>
                                                    <TableCell align="right">Total Price</TableCell>
                                                    <TableCell align="right">Quantity</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                    <TableRow
                                                        key={order._id}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row">{order.message}</TableCell>
                                                        <TableCell align="right">{order.createdAt}</TableCell>
                                                        <TableCell align="right">{order.type}</TableCell>
                                                        <TableCell align="right">{order.totalPrice}</TableCell>
                                                        <TableCell align="right">{order.quantity}</TableCell>
                                                    </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </>
                            )}
                        </List>
                    </Demo>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ViewOrders;