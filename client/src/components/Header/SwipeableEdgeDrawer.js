import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Hamburger from "hamburger-react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import './Header.css';
import { MenuList } from "@mui/material";
import { style } from "@mui/system";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "dark"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "dark" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

function SwipeableEdgeDrawer(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const toggleDrawer = (newOpen) => () => {

    setOpen(newOpen);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root className="menu">
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <Box className='mobile-menu' sx={{ backgroundColor: "primary.main", display: "flex", justifyContent: 'center', padding: 2, alignItems: 'center' }}>
        <Hamburger color='lightgrey' size={48} onToggle={toggleDrawer(true)} toggled={open} toggle={setOpen}/>
      </Box>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox className="menu"
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography variant="h5" fontWeight={450} sx={{ p: 2, color: "text.secondary", display: "flex", justifyContent: "center" }}>
            Menu
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
             <MenuList
        id="basic-menu"
        open={open}
        onClose={toggleDrawer(false)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={toggleDrawer(false)}>Login/Signup</MenuItem>
        <MenuItem onClick={toggleDrawer(false)}>Products & Services</MenuItem>
        <MenuItem onClick={toggleDrawer(false)}>Make An Order</MenuItem>
        <MenuItem onClick={toggleDrawer(false)}>Tracking</MenuItem>
        <MenuItem onClick={toggleDrawer(false)}>Dashboard</MenuItem>
        <MenuItem onClick={toggleDrawer(false)}>Contact Us</MenuItem>
      </MenuList>
          {/* <Skeleton variant="rectangular" height="100%" /> */}
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer ;
