"use client";

import { Grid, Box, Button } from "@mui/material";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";

export default function Home() {
  return (
    <>
      {/* section 1 */}
      <Box
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
        <BiSolidQuoteAltLeft
          style={{
            fontSize: "40px",
            color: "black",
          }}
        />
        <h2 style={{ fontWeight: "bold", margin: "20px 0" }}>
          Your deliverables are our top priority
        </h2>
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
        <BiSolidQuoteAltRight
          style={{
            fontSize: "40px",
            color: "black",
            marginTop: "20px",
          }}
        />
      </Box>
    </>
  );
}
