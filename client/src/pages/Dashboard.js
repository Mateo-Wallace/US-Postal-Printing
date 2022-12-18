import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import InnerDashboard from "../components/Dashboard/dashboard";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Inventory2 from "@mui/icons-material/Inventory2";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EditUser from "../components/Dashboard/editUser";
import ViewOrders from "../components/Dashboard/viewOrders";
import ViewPackages from "../components/Dashboard/viewPackages";
import { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./Dashboard.css";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

function DashboardContent() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [pageIndex, setPageIndex] = useState("Dashboard");

  const showDashboard = () => setPageIndex("Dashboard");
  const showPackages = () => setPageIndex("View My Packages");
  const showOrders = () => setPageIndex("View My Orders");
  const showEdit = () => setPageIndex("Edit My Account");

  const renderPage = () => {
    if (pageIndex === "Dashboard") {
      return <InnerDashboard />;
    }
    if (pageIndex === "View My Packages") {
      return <ViewPackages />;
    }
    if (pageIndex === "View My Orders") {
      return <ViewOrders />;
    }
    if (pageIndex === "Edit My Account") {
      return <EditUser />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className="wholeDash" sx={{ display: "flex", marginTop: "95px" }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open} style={{ zIndex: 1 }}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            {open ? <h6 style={{ marginRight: "5px" }}>Close Menu</h6> : ""}
            <IconButton onClick={toggleDrawer}>
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </Toolbar>
          <Divider />
          <List
            className="dashboardNav"
            style={{ backgroundColor: "primary.dark" }}
            component="nav"
          >
            <React.Fragment>
              <ListItemButton onClick={showDashboard}>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
              <ListItemButton onClick={showPackages}>
                <ListItemIcon>
                  <Inventory2 />
                </ListItemIcon>
                <ListItemText primary="View My Packages" />
              </ListItemButton>
              <ListItemButton onClick={showOrders}>
                <ListItemIcon>
                  <ShoppingCart />
                </ListItemIcon>
                <ListItemText primary="View My Orders" />
              </ListItemButton>
              <ListItemButton onClick={showEdit}>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Edit My Account" />
              </ListItemButton>
            </React.Fragment>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />

          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {renderPage()}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
