import React from "react";
import { Box } from "@mui/material";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

export default function Layout({ children }) {
    return (
        <>
            <Box sx={{ position: "sticky", top: "0px", zIndex: 10 }}>
                <Header />
            </Box>
            <Box>{children}</Box>
            <Box>
                <Footer />
            </Box>
        </>
    );
}
