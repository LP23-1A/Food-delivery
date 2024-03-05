"use client";
import { Avatar, Box, Stack, TextField, Typography } from "@mui/material";
import imgP from "@/components/images/imgP.png";
import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";
import {
  Edit,
  ForwardToInbox,
  LocalPhone,
  Logout,
  PermIdentitySharp,
} from "@mui/icons-material";

const style = {
  bgcolor: "#e6e6e6",
  width: "392px",
  display: "flex",
  padding: "5px 20px",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "6px",
};

const iconStyle = {
  width: "50px",
  height: "50px",
  p: "14px",
  bgcolor: "white",
  borderRadius: "50%",
};

function userProfile() {
  return (
    <Stack>
      <Box>
        <Navbar />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Box>
          <Avatar
            sx={{ width: 120, height: 120 }}
            alt="Remy Sharp"
            src={imgP.src}
          />
        </Box>
        <Typography
          sx={{ fontSize: "28px", fontWeight: "700", textAlign: "center" }}
        >
          УгтахБаяр
        </Typography>
        <Box sx={style}>
          <Box sx={{ display: "flex", gap: "8px" }}>
            <PermIdentitySharp sx={iconStyle} />
            <TextField
              required
              sx={{ borderBottom: "none", width: "280px" }}
              id="standard-required"
              label="Таны нэр"
              variant="standard"
            />
          </Box>
          <Edit sx={{ color: "green" }} />
        </Box>
        <Box sx={style}>
          <Box sx={{ display: "flex", gap: "8px" }}>
            <LocalPhone sx={iconStyle} />
            <TextField
              required
              sx={{ borderBottom: "none", width: "280px" }}
              id="phone"
              label="Утасны дугаар"
              variant="standard"
            />
          </Box>

          <Edit sx={{ color: "green" }} />
        </Box>
        <Box sx={style}>
          <Box sx={{ display: "flex", gap: "8px" }}>
            <ForwardToInbox sx={iconStyle} />
            <TextField
              required
              sx={{ borderBottom: "none", width: "280px" }}
              id="standard-required"
              label="Имэйл хаяг"
              variant="standard"
            />
          </Box>

          <Edit sx={{ color: "green" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <Logout sx={iconStyle} />
            <Typography>Захиалгийн түүх</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <Logout sx={iconStyle} />
            <Typography>Гарах</Typography>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Stack>
  );
}
export default userProfile;
