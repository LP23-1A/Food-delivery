"use client";
import SearchAppBar from "@/components/Navbar";
import axios from "axios";
import React from "react";

import {
  Box,
  Button,
  Checkbox,
  DialogTitle,
  FormControlLabel,
  Stack,
  TextField,
} from "@mui/material";
import Complete from "@/components/Complate";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 448,
  bgcolor: "background.paper",
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

function Signup() {
  const api = "http://localhost:8000/user/signup";
  const [showPassword, setShowPassword] = React.useState(false);
  const [input, setInput] = React.useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const submitHundler = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(api, { ...input });
      if (data) {
        return <Complete />;
      }
      console.log("ok");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Stack>
      <SearchAppBar />
      <Box sx={style}>
        <DialogTitle alignSelf={"center"}>Бүртгүүлэх</DialogTitle>
        <TextField
          id="outlined-password-input"
          label="Нэр"
          type="name"
          autoComplete="current-password"
          placeholder="Нэрээ оруулна уу"
          onChange={(e) =>
            setInput((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <TextField
          id="outlined-password-input"
          label="И-мэйл"
          type="email"
          autoComplete="current-password"
          placeholder="И-мэйл хаягаа оруулна уу"
          onChange={(e) =>
            setInput((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <TextField
          id="outlined-password-input"
          label="Утас"
          type="number"
          autoComplete="current-password"
          placeholder="Утасны дугаар"
          onChange={(e) =>
            setInput((prev) => ({ ...prev, phoneNumber: e.target.value }))
          }
        />
        <TextField
          id="outlined-password-input"
          label="Нууц үг"
          type="password"
          autoComplete="current-password"
          placeholder="Нууц үг"
          onChange={(e) =>
            setInput((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <TextField
          id="outlined-password-input"
          label="Нууц үг"
          type="password"
          autoComplete="current-password"
          placeholder="Нууц үг"
        />

        <FormControlLabel
          control={
            <Checkbox onChange={handleChange} defaultChecked color="info" />
          }
          label="Үйлчилгээний нөхцөл зөвшөөрөх"
        />
        {/* <Checkbox
          color="info"
          disabled={false}
          label="Үйлчилгээний нөхцөо зөвшөөрөх"
          size="medium"
          variant="outlined"
        /> */}
        <Button
          sx={{ background: "#18BA51" }}
          disabled={input.password === ""}
          onClick={submitHundler}
        >
          Бүртгүүлэх
        </Button>
      </Box>
    </Stack>
  );
}
export default Signup;
