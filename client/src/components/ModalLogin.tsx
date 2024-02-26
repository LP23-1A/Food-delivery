import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LoginForm from "./LoginForm";
import { DialogTitle } from "@mui/material";
import { useRouter } from "next/navigation";
import axios from "axios";

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

function LoginModal() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const api = "http://localhost:8000/user/login";
    try {
      const response = await axios.post(api, {
        email,
        password,
      });
      console.log("User logged in successfully!", response.data.token);
      handleClose();
    } catch (error: any) {
      console.error("Login failed:", error.response.data);
      // Display an error message to the user
    }
  };

  return (
    <Stack>
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
          <LoginForm
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            handleLogin={handleLogin}
          />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
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

export default LoginModal;
