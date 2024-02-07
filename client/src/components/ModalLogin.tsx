"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { DialogTitle, Stack } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, gap: 5, display: "flex", flexDirection: "column" }}
          >
            <TextField
              required
              id="outlined-required"
              label="Имэйл"
              placeholder="Имэйл хаягаа оруулна уу"
            />

            <TextField
              id="outlined-password-input"
              label="Нууц үг"
              type="password"
              autoComplete="current-password"
              placeholder="Нууц үг"
            />
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Button disabled variant="contained">
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
