"use client";

import React, { useState } from "react";
import "./styles.css";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import HomeIcon from "@mui/icons-material/Home";
import QuizIcon from "@mui/icons-material/Quiz";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import InfoIcon from "@mui/icons-material/Info";
import { useRouter } from "next-nprogress-bar";

export default function Header() {
  const [open, setOpen] = useState(false);

  const r = useRouter()
  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      <Divider />
      <List>
        <ListItem>
          <ListItemButton onClick={() => r.push(`?section=Home`)}>
            <ListItemIcon>
              <HomeIcon />
              <Typography className="mx-2">Home</Typography>
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton onClick={() => r.push(`?section=Services`)}>
            <ListItemIcon>
              <ManageAccountsIcon />
              <Typography className="mx-2">Services</Typography>
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton onClick={() => r.push(`?section=FAQ`)}>
            <ListItemIcon>
              <QuizIcon />
              <Typography className="mx-2">FAQ</Typography>
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton onClick={() => r.push(`?section=Blog`)}>
            <ListItemIcon>
              <NewspaperIcon />
              <Typography className="mx-2">Blog</Typography>
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton onClick={() => r.push(`?section=AboutUs`)}>
            <ListItemIcon>
              <InfoIcon />
              <Typography className="mx-2">About Us</Typography>
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <Box className='d-flex justify-content-center'>
        <Button
          sx={{
            backgroundColor: "#008080",
            color: "white",
            borderRadius: "25px",
            padding: "10px 20px",
            fontSize: "14px",
            fontWeight: "500",
            textTransform: "none",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              backgroundColor: "#006666",
            },
            "&:active": {
              backgroundColor: "#004c4c",
              transform: "scale(0.98)",
            },
          }}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <div
        className="main-header d-flex justify-content-between align-items-center"
        style={{ width: "100%" }}
      >
        <Box className="d-flex align-items-center">
          <Box>
            <img alt="logo" src={"images/logo.svg"} />
          </Box>
          <Box
            gap={2}
            className="p-2 ms-5 d-flex justify-content-between align-items-center"
          >
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "inline",
                  md: "inline",
                }, cursor: "pointer"
              }}
            >
              <Typography onClick={() => r.push(`?section=Home`)}>Home</Typography>
            </Box>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "inline",
                  md: "inline",
                }, cursor: "pointer"
              }}
            >
              <Typography onClick={() => r.push(`?section=Services`)}>Services</Typography>
            </Box>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "inline",
                  md: "inline",
                }, cursor: "pointer"
              }}
            >
              <Typography onClick={() => r.push(`?section=FAQ`)}>FAQ</Typography>
            </Box>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "inline",
                  md: "inline",
                }, cursor: "pointer"
              }}
            >
              <Typography onClick={() => r.push(`?section=Blog`)}>Blog</Typography>
            </Box>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "inline",
                  md: "inline",
                }, cursor: "pointer"
              }}
            >
              <Typography onClick={() => r.push(`?section=AboutUs`)}>About Us</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "inline",
              md: "inline",
            },
          }}
        >
          <Button
            sx={{
              backgroundColor: "#008080",
              color: "white",
              borderRadius: "25px",
              padding: "10px 20px",
              fontSize: "14px",
              fontWeight: "500",
              textTransform: "none",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                backgroundColor: "#006666",
              },
              "&:active": {
                backgroundColor: "#004c4c",
                transform: "scale(0.98)",
              },
            }}
          >
            Contact Us
          </Button>
        </Box>
        <Box
          sx={{
            display: {
              xs: "inline",
              sm: "none",
              md: "none",
            },
          }}
        >
          <IconButton edge="start" color="inherit" aria-label="menu"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          {open && <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
            {DrawerList}
          </Drawer>}
        </Box>
      </div>
    </>
  );
}
