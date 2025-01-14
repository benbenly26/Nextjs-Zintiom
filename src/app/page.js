"use client";

import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          width: { lg: "75%", xs: "90%" },
          paddingTop: "4%",
          margin: "auto",
          marginTop: "1%",
        }}
      >
        <Box
          sx={{
            display: { lg: "flex", xs: "block" },
            justifyContent: "space-between",
            alignItems: { lg: "flex-start", xs: "center" },
            textAlign: { xs: "center", lg: "left" },
          }}
        >
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
                margin: { xs: "0 auto", lg: "0" },
              }}
            >
              We are a digital engineering solutions company focusing on data
              analysis, custom software development with a complete AI-driven
              automation and cybersecurity solutions. Our digital businesses
              approach understands your pain points and intricacies and comes up
              with workable solutions appropriate to your respective business.
              Never wait for a free consultation.
            </p>
          </Box>
          <Box
            sx={{
              marginTop: { xs: "20px", lg: "0" },
            }}
          >
            <img
              alt="logo"
              src={"images/Group.png"}
              style={{
                height: "340px",
                width: "100%",
              }}
              loading="eager"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
