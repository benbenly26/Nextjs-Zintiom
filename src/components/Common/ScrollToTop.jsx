"use client";

import { useState, useEffect } from "react";
import { IconButton, Tooltip } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);

  // Handle scrolling behavior
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showScroll && (
        <Tooltip title="Scroll to top" placement="left">
          <IconButton
            onClick={scrollToTop}
            sx={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              backgroundColor: "#008080",
              color: "white",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "#006666",
              },
            }}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
}
