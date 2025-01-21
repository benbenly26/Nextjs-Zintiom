"use client";

import { createRef, useEffect, useRef, useState } from "react";
import { Grid, Box, Button, Typography, IconButton } from "@mui/material";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import Benefit from "./Benefit/page";
import Service from "./Service/page";
import Getintouch from "./Getintouch/page";
import { useSearchParams } from "next/navigation";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);
  let val = ["Home", "Services", "FAQ", "Blog", "AboutUs"];

  const ref = useRef(val.map(() => createRef()));
  const params = useSearchParams();

  useEffect(() => {
    val.map(
      (se, i) =>
        se == params.get("section") &&
        ref.current[i].current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        })
    );
  }, [params.get("section")]);

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
      {/* section 1 */}
      <Box
        ref={ref.current[0]}
        sx={{
          width: { lg: "75%", xs: "90%" },
          paddingTop: "4%",
          margin: "auto",
          marginTop: "1%",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            alignItems: { lg: "flex-start", xs: "center" },
            textAlign: { xs: "center", lg: "left" },
          }}
        >
          <Grid item xs={12} lg={6}>
            <Box>
              <h1
                style={{
                  fontSize: "38px",
                  fontWeight: "600",
                  lineHeight: "1.2",
                  marginBottom: "16px",
                }}
                className="responsive-heading"
              >
                Wake-up to the world of <br />
                digital transformation solutions
              </h1>
              <p
                style={{
                  lineHeight: "30px",
                  fontSize: "16px",
                }}
              >
                We are a digital engineering solutions company focusing on data
                analysis, custom software development with a complete AI-driven
                automation and cybersecurity solutions. Our digital businesses
                approach understands your pain points and intricacies and comes
                up with workable solutions appropriate to your respective
                business. Never wait for a free consultation.
              </p>
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
                Get Started
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                width: "100%",
                marginTop: { xs: "20px", lg: "0" },
              }}
            >
              <img
                alt="logo"
                src={"images/Group.png"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                loading="eager"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* section 2 */}
      <Box
        sx={{
          width: { lg: "75%", xs: "90%" },
          paddingTop: "4%",
          margin: "auto",
          marginTop: "1%",
          textAlign: "center",
        }}
      >
        <Box
          className="d-flex"
          style={{
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "inline",
                md: "inline",
              },
            }}
          >
            <BiSolidQuoteAltLeft
              style={{
                fontSize: "40px",
                color: "black",
                position: "absolute",
                left: 0,
              }}
            />
          </Box>
          <h2
            style={{
              fontWeight: "bold",
              margin: "20px 0",
              textAlign: "center",
            }}
          >
            Your deliverables are our top priority
          </h2>
        </Box>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.8",
            color: "rgba(0, 0, 0, 0.8)",
            margin: "0 auto",
            width: "90%",
          }}
        >
          We employ digital business methodologies, interacting with every
          industry and pointing to a single source of truth. It helps everyone,
          especially decision-makers and team members, access the same
          information as per their roles. This approach improves business
          processes, collaboration, and data-driven decision-making. The journey
          from idea generation to result-fetching outcomes has brought ease of
          workflow to all our clients.
        </p>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "flex",
              md: "flex",
            },
            justifyContent: "flex-end",
          }}
        >
          <BiSolidQuoteAltRight
            style={{
              fontSize: "40px",
              color: "black",
              alignItems: "right",
            }}
          />
        </Box>
      </Box>
      {/* section 3 */}
      <Box ref={ref.current[1]}>
        <Service />
      </Box>
      {/* section 4 */}

      <Box
        ref={ref.current[3]}
        sx={{
          width: { lg: "75%", xs: "90%" },
          borderRadius: "10px",
          backgroundColor: "#006666",
          padding: "40px",
          margin: "auto",
          marginTop: "5%",
          textAlign: { xs: "center", lg: "left" },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} lg={9}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                color: "white",
              }}
            >
              Unleash the new possibilities with Gen AI & VLM. To know the
              proven solutions for the industry
            </Typography>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Button
              sx={{
                backgroundColor: "#FFFFFF",
                color: "black",
                borderRadius: "25px",
                padding: "10px",
                fontSize: "14px",
                fontWeight: "500",
                textTransform: "none",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              Schedule a meeting
            </Button>
          </Grid>
        </Grid>
      </Box>
      {/* section 5 */}
      <Box ref={ref.current[2]}>
        <Benefit />
      </Box>

      {/* section 6 */}
      <Box
        ref={ref.current[3]}
        sx={{
          width: { lg: "75%", xs: "90%" },
          paddingTop: "4%",
          margin: "auto",
          marginTop: "1%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Innovation has become digital capability
        </Typography>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.8",
            color: "rgba(0, 0, 0, 0.8)",
            margin: "0 auto",
            width: "90%",
          }}
        >
          Are you looking to envision your business by integrating digital
          technology ? At Zintiom, we provide value propositions, competitive
          edge, next-gen connectivity, and new-age technologies with AI
          automation for products, services, operations, and business models.
        </p>
        <Button
          className="mt-3"
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
          Get In Touch
        </Button>
      </Box>
      {/* section 7 */}
      <Box ref={ref.current[4]}>
        <Getintouch />
      </Box>
      {showScroll && (
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
      )}
    </>
  );
}
