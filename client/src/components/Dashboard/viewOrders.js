import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { CURRENT_USER } from "../../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DELETE_ORDER } from "../../utils/mutations";
import "./viewOrders.css";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function ViewOrders() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const { loading, data } = useQuery(CURRENT_USER);
  const [deleteOrder, { deleteError }] = useMutation(DELETE_ORDER);

  const userData = data?.me || {};

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  const handleDeleteOrder = async (value) => {
    console.log(value);
    try {
      const { data } = await deleteOrder({
        variables: {
          orderId: value,
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
        justifyContent: "center",
        marginLeft: "21px",
      }}
    >
      <Grid style={{ width: "90%" }} container spacing={2}>
        <Grid item xs={12} md={6} style={{ minWidth: "100%" }}>
          <Typography
            sx={{ mt: 4, mb: 5, textAlign: "center", color: "white" }}
            variant="h3"
            component="div"
          >
            My Orders
          </Typography>
          <Demo>
            <List style={{ padding: 0 }} dense={dense}>
              {userData.orders.length ? (
                userData.orders.map((order) => (
                  <Box key={order._id}>
                    <ListItem
                      secondaryAction={
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          value={order._id}
                          onClick={(e) =>
                            handleDeleteOrder(e.currentTarget.value)
                          }
                        >
                          <DeleteIcon />
                        </IconButton>
                      }
                    >
                      <ListItemText
                        sx={{ textDecoration: "underline" }}
                        secondary={secondary ? "Secondary text" : null}
                      >
                        <Typography className="order-id">
                          {order._id}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                    <TableContainer
                      style={{ marginBottom: "10px" }}
                      component={Paper}
                    >
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
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {order.message}
                            </TableCell>
                            <TableCell align="right">
                              {order.createdAt}
                            </TableCell>
                            <TableCell align="right">{order.type}</TableCell>
                            <TableCell align="right">
                              {order.totalPrice}
                            </TableCell>
                            <TableCell align="right">
                              {order.quantity}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                ))
              ) : (
                <h2 style={{ textAlign: "center" }}>
                  You do not have any pending orders currently.
                </h2>
              )}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ViewOrders;
