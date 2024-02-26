"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function LoginForm({
  email,
  password,
  setEmail,
  setPassword,
  handleLogin,
}: any) {
  return (
    <Box sx={{ mt: 2, gap: 5, display: "flex", flexDirection: "column" }}>
      <TextField
        required
        id="outlined-required"
        label="Имэйл"
        placeholder="Имэйл хаягаа оруулна уу"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="outlined-password-input"
        label="Нууц үг"
        type="password"
        autoComplete="current-password"
        placeholder="Нууц үг"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin} variant="contained">
        Нэвтрэх
      </Button>
    </Box>
  );
}

export default LoginForm;
