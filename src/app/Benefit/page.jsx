"use client";

import { Box, Typography, Grid } from "@mui/material";
import { FaCheckCircle } from "react-icons/fa";

export default function Benefit() {
  const data = [
    { id: 1, name: "Impeccable Code Quality" },
    { id: 2, name: "Future Proof Scalability" },
    { id: 3, name: "Ironclad Security" },
    { id: 4, name: "Dependable SaaS Solutions" },
    { id: 5, name: "Swift Turnaround Time (TAT)" },
    { id: 6, name: "High Performance Cloud Management" },
    { id: 7, name: "24/7 Post-Product Support" },
    { id: 8, name: "AI Driven Efficiency" },
    { id: 9, name: "Personalized Consulting" },
    { id: 10, name: "Dedicated to your success" },
  ];

  return (
    <Box
      sx={{
        width: { lg: "75%", xs: "90%" },
        backgroundColor: "#f2f2f2",
        padding: "4%",
        margin: "auto",
        marginTop: "5%",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontSize: "24px",
          fontWeight: "600",
        }}
      >
        What Benefit Will You Get From Us How we support our partner all over
        the world
      </Typography>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid item xs={12} md={6} lg={6} key={item?.id}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 0",
              }}
            >
              <FaCheckCircle
                style={{
                  color: "#006666",
                  fontSize: "25px",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontSize: "18px",
                }}
              >
                {item?.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
