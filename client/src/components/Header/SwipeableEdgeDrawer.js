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
import "./Header.css";
import { MenuList } from "@mui/material";
import { style } from "@mui/system";
import { Link } from "react-router-dom";

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
    <Root
      style={{
        borderBottomLeftRadius: "40px",
        borderBottomRightRadius: "40px",
      }}
      className="menu"
    >
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(58% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <Box
        className="mobile-menu"
        sx={{
          backgroundColor: "primary.main",
          display: "flex",
          justifyContent: "center",
          padding: 2,
          alignItems: "center",
          borderBottomLeftRadius: "40px",
          borderBottomRightRadius: "40px",
        }}
      >
        <Hamburger
          color="#e0e0e0"
          size={48}
          onToggle={toggleDrawer(true)}
          toggled={open}
          toggle={setOpen}
        />
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
          disableScrollLock: true,
        }}
      >
        <StyledBox
          className="menu"
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: "40px",
            borderTopRightRadius: "40px",
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography
            variant="h5"
            fontWeight={450}
            sx={{
              p: 2,
              color: "#e0e0e0",
              display: "flex",
              justifyContent: "center",
            }}
          >
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
            alignItems: "center",
          }}
        >
          <MenuList
            sx={{
              backgroundColor: "#757575",
              borderRadius: "40px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
            }}
            id="basic-menu"
            open={open}
            onClose={toggleDrawer(false)}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link to="/login" style={{ textDecoration: "none" }}>
              <MenuItem
                style={{
                  marginBottom: "6px",
                  display: "flex",
                  justifyContent: "center",
                  borderTopLeftRadius: "40px",
                  borderTopRightRadius: "40px",
                  border: "#149be6 solid 3px",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)",
                }}
                onClick={toggleDrawer(false)}
              >
                <Typography
                  variant="p"
                  fontWeight={700}
                  sx={{ p: 1, color: "text.secondary" }}
                >
                  Login/Signup
                </Typography>
              </MenuItem>
            </Link>
            <Link to="/products&services" style={{ textDecoration: "none" }}>
              <MenuItem
                style={{
                    marginBottom: "6px",
                    display: "flex",
                    justifyContent: "center",
                    border: "#149be6 solid 3px",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)",
                  }}
                onClick={toggleDrawer(false)}
              >
                <Typography
                  variant="p"
                  fontWeight={700}
                  sx={{ p: 1, color: "text.secondary" }}
                >
                  Products & Services
                </Typography>
              </MenuItem>
            </Link>
            <Link to="/make-an-order" style={{ textDecoration: "none" }}>
              <MenuItem
                style={{
                    marginBottom: "6px",
                    display: "flex",
                    justifyContent: "center",
                    border: "#149be6 solid 3px",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)",
                  }}
                onClick={toggleDrawer(false)}
              >
                <Typography
                  variant="p"
                  fontWeight={700}
                  sx={{ p: 1, color: "text.secondary" }}
                >
                Make An Order
                </Typography>
              </MenuItem>
            </Link>
            <Link to="/tracking" style={{ textDecoration: "none" }}>
              <MenuItem
                style={{
                    marginBottom: "6px",
                    display: "flex",
                    justifyContent: "center",
                    border: "#149be6 solid 3px",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)",
                  }}
                onClick={toggleDrawer(false)}
              >
                <Typography
                  variant="p"
                  fontWeight={700}
                  sx={{ p: 1, color: "text.secondary" }}
                >
                Tracking
                </Typography>
              </MenuItem>
            </Link>
            <Link to="/dashboard/:userId" style={{ textDecoration: "none" }}>
              <MenuItem
                style={{
                    marginBottom: "6px",
                    display: "flex",
                    justifyContent: "center",
                    border: "#149be6 solid 3px",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)",
                  }}
                onClick={toggleDrawer(false)}
              >
                <Typography
                  variant="p"
                  fontWeight={700}
                  sx={{ p: 1, color: "text.secondary" }}
                >
                Dashboard
                </Typography>
              </MenuItem>
            </Link>
            <Link to="/contact-us" style={{ textDecoration: "none" }}>
              <MenuItem
                style={{
                    display: "flex",
                    justifyContent: "center",
                    borderBottomLeftRadius: "40px",
                    borderBottomRightRadius: "40px",
                    border: "#149be6 solid 3px",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)",
                  }}
                onClick={toggleDrawer(false)}
              >
                <Typography
                  variant="p"
                  fontWeight={700}
                  sx={{ p: 1, color: "text.secondary" }}
                >
                Contact Us
                </Typography>
              </MenuItem>
            </Link>
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

export default SwipeableEdgeDrawer;
