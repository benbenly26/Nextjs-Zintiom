"use client";

import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { AiFillFacebook } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Box sx={{ width: { lg: "75%" }, paddingBottom: "20px" }} className="m-auto mt-2">
        <Box
          sx={{
            display: { xs: "flex", lg: "flex" },
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: { xs: "center", lg: "space-between" },
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: 3,
              alignItems: "center",
            }}
          >
            <Box>
              <img alt="logo" src={"images/logo.svg"} />
            </Box>
            <Box>
              <Typography>About Us</Typography>
            </Box>
            <Box>
              <Typography>Services</Typography>
            </Box>
            <Box>
              <Typography>Security</Typography>
            </Box>
            <Box>
              <Typography>Blog</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "flex", lg: "row" },
              gap: 1,
              alignItems: "center",
              marginTop: { xs: 2, lg: 0 },
            }}
          >
            <IconButton>
              <AiFillFacebook style={{ color: "#008080" }} />
            </IconButton>
            <IconButton>
              <FaXTwitter style={{ color: "#008080" }} />
            </IconButton>
            <IconButton>
              <FaLinkedin style={{ color: "#008080" }} />
            </IconButton>
            <IconButton>
              <FaYoutube style={{ color: "#008080" }} />
            </IconButton>
          </Box>
        </Box>
        <hr />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: { xs: "center", lg: "space-between" },
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box>
            <Typography>
              © 2025{" "}
              <span
                style={{
                  fontWeight: "600",
                  color: "#008080",
                }}
              >
                Zintiom Solutions
              </span>
              . Copyright and rights reserved
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: 2,
              marginTop: { xs: 2, lg: 0 },
            }}
          >
            <Typography>Terms and Conditions</Typography>
            <Typography>Privacy Policy</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
