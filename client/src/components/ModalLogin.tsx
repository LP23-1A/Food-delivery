"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  DialogTitle,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Error from "./Error";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid",
  boxShadow: 24,
  p: 4,
};

function BasicModal() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleLogin = async (e: any) => {
    const BASE_URL = "http://localhost:8000/user/login";

    e.preventDefault();
    try {
      const { data } = await axios.post(BASE_URL, { ...input });

      if (data) {
        router.push(`/dashboard/${input.email}`);
        localStorage.setItem("email", JSON.stringify(input.email));
      } else {
        setError("username or password error");
      }
      console.log("ok");
    } catch (error) {
      console.log(error);

      return <Error />;
    }
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const [input, setInput] = React.useState({
    email: "",
    password: "",
  });

  return (
    <Stack>
      {error && <Error />}
      <Button sx={{ color: "black" }} onClick={handleOpen}>
        Нэвтрэх
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <DialogTitle id="modal-modal-title" variant="h6" component="h2">
            Нэвтрэх
          </DialogTitle>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, gap: 5, display: "flex", flexDirection: "column" }}
          >
            <Stack sx={{ flex: "" }}>
              <TextField
                sx={{
                  border: "1px solid gray",
                  borderBottom: "none",
                  borderRadius: "6px",
                  bgcolor: "#F7F7F8",
                }}
                id="filled-multiline-flexible"
                label="Имэйл хаягаа оруулна уу"
                multiline
                maxRows={4}
                variant="filled"
                onChange={(e: any) =>
                  setInput((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </Stack>

            <FormControl
              sx={{
                width: "38ch",
                borderRadius: "1ch",
                border: "none",
              }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Нууц үг
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={(e: any) =>
                  setInput((prev) => ({ ...prev, password: e.target.value }))
                }
                sx={{ display: "flex", bgcolor: "#F7F7F8" }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button>Нууц үг сэргээх</Button>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Button
              style={{
                backgroundColor:
                  input.email === "" || input.password === ""
                    ? "grey"
                    : "#18BA51",
              }}
              disabled={input.email === "" || input.password === ""}
              onClick={handleLogin}
              variant="contained"
            >
              Нэвтрэх
            </Button>

            <Typography alignSelf={"center"}>Эсвэл</Typography>
            <Button onClick={() => router.push("/signup")} variant="outlined">
              Бүртгүүлэх
            </Button>
          </Box>
        </Box>
      </Modal>
    </Stack>
  );
}
export default BasicModal;
