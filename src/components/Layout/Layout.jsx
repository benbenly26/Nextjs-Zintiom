'use client'

import React from "react";
import { Box } from "@mui/material";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { AppProgressBar } from "next-nprogress-bar";

export default function Layout({ children }) {
    return (
        <>
            <Box sx={{ position: "sticky", top: "0px", zIndex: 10 }}>
                <Header />
            </Box>
            <AppProgressBar
                height="4px"
                color="#006666"
                options={{ showSpinner: false }}
                shallowRouting
            />
            <Box>{children}</Box>
            <Box>
                <Footer />
            </Box>
        </>
    );
}
