"use client";

import {
    Box,
    Typography,
    Grid,
    Card,
    Avatar,
} from "@mui/material";
import { FaBusinessTime } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { HiMiniCpuChip } from "react-icons/hi2";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdSecurity } from "react-icons/md";

export default function Service() {
    const data = [
        {
            id: 1,
            title: "Digital Business",
            content:
                "We apply digital technology and digital methodologies to innovate business models. It can ultimately shape the products and offer better customer experience.",
            icon: <FaBusinessTime />,
        },
        {
            id: 2,
            title: "Industry Cloud Platforms",
            content:
                "Zintiom with viable experience in vertical cloud platforms enjoin Infrastructure as a service, software, and platform offer multiple solutions to distinct verticals.",
            icon: <FaCloudDownloadAlt />,
        },
        {
            id: 3,
            title: "Platform Modernization",
            content:
                "We have an application support Center for platform automation where the entire tech-data could be transferred to cloud platforms for modern infrastructure with superior work-flow.",
            icon: <FaLightbulb />,
        },
        {
            id: 4,
            title: "AI/Gen AI/VLM",
            content:
                "Gen AI or Visual Language model (VLM) with no compromise on quality, Zintiom stands a-top in the AI industry serving techno-managerial leaders make right decisions in their business operations.",
            icon: <HiMiniCpuChip />,
        },
        {
            id: 5,
            title: "Software Development Services",
            content:
                "We help you plan, organize, design, develop, integrate, connect (API), test, and provide you scalable software solutions with end-to-end services and support offerings.",
            icon: <MdMiscellaneousServices />,
        },
        {
            id: 6,
            title: "Cyber-security & Compliance",
            content:
                "We provide robust cybersecurity solutions to every industry adhering to standards, laws, and regulatory requirements. We build market trust and reputation.",
            icon: <MdSecurity />,
        },
    ];

    return (
        <Box
            sx={{
                width: { lg: "85%", xs: "95%" },
                backgroundColor: "#f9f9f9",
                padding: "4%",
                margin: "auto",
                marginTop: "5%",
                borderRadius: "12px",
                textAlign: "center",
            }}
        >
            <Typography
                variant="h4"
                gutterBottom
                sx={{
                    fontSize: "26px",
                    fontWeight: "700",
                }}
            >
                Our Service Offerings
            </Typography>
            <Grid container spacing={3} sx={{ marginTop: "20px" }}>
                {data.map((service) => (
                    <Grid item xs={12} sm={12} md={6} lg={6} key={service.id}>
                        <Card
                            variant="outlined"
                            sx={{
                                padding: "20px",
                                borderRadius: "10px",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                textAlign: "center",
                                height: { xs: "27em", lg: "18em" },
                            }}
                        >
                            <Box className="d-flex justify-content-center">
                                <Box>
                                    <Avatar
                                        sx={{
                                            margin: "auto",
                                            backgroundColor: "#000",
                                            color: "#fff",
                                            width: "60px",
                                            height: "60px",
                                            marginBottom: "10px",
                                        }}
                                    >
                                        {service.icon}
                                    </Avatar>
                                </Box>
                                <Box
                                    className="w-75"
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        flexDirection: "column",
                                        textAlign: "start",
                                        padding: "15px",
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontSize: "22px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        {service.title}
                                    </Typography>
                                    <p
                                        style={{
                                            fontSize: "16px",
                                            lineHeight: "1.8",
                                            color: "rgba(0, 0, 0, 0.8)",
                                            width: "90%",
                                        }}
                                    >
                                        {service.content}
                                    </p>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
