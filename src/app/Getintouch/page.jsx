"use client";

import { useState } from "react";
import { Box, Grid, TextField, Button } from "@mui/material";
import { toast } from "sonner";

export default function GetInTouch() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name?.length < 3 || phone?.length < 3 || email?.length < 3 ) {
      toast.error("Please fill all the fields");
      return;
    }
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return toast.error("Please Enter the Correct Email");
    }
    try {
      let data = {
        name: name,
        phone: phone,
        email: email,
        message: message,
      };

      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log('res', res)
      const response = await res.json();

      console.log("response", response);
      if (res.status == 200) {
        toast.success(response.msg);
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      } else {
        toast.error(response.msg);
      }
    } catch (e) {
      console.log(e);
    }

  };

  return (
    <Box
      sx={{
        width: { lg: "100%", xs: "90%" },
        backgroundColor: "#f2f2f2",
        padding: "4%",
        margin: "auto",
        marginTop: "5%",
        borderRadius: "10px",
        textAlign: "center",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: { lg: "75%", xs: "90%" },
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
              }}
            >
              <h4 style={{ marginBottom: "10px" }}>Get in touch</h4>
              <p style={{ marginBottom: "20px", color: "#555" }}>
                Feel free to reach out anytime—I'm here to help!
              </p>
            </Box>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <TextField
                sx={{
                  backgroundColor: "white",
                }}
                variant="outlined"
                fullWidth
                placeholder="Person / Company name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                sx={{
                  backgroundColor: "white",
                }}
                variant="outlined"
                fullWidth
                placeholder="Contact Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <TextField
                sx={{
                  backgroundColor: "white",
                }}
                variant="outlined"
                fullWidth
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                sx={{
                  backgroundColor: "white",
                }}
                variant="outlined"
                fullWidth
                placeholder="Let's talk about your idea"
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button
                onClick={handleSubmit}
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
                Submit
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={"images/Customer.webp"}
              alt="Customer Service"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
