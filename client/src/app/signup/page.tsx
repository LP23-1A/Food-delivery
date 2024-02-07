import SearchAppBar from "@/components/Navbar";
import {
  Box,
  Checkbox,
  DialogTitle,
  FormControlLabel,
  Stack,
  TextField,
} from "@mui/material";
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
        />
        <TextField
          id="outlined-password-input"
          label="И-мэйл"
          type="email"
          autoComplete="current-password"
          placeholder="И-мэйл хаягаа оруулна уу"
        />
        <TextField
          id="outlined-password-input"
          label="Утас"
          type="number"
          autoComplete="current-password"
          placeholder="Утасны дугаар"
        />
        <TextField
          id="outlined-password-input"
          label="Нууц үг"
          type="password"
          autoComplete="current-password"
          placeholder="Нууц үг"
        />
        <TextField
          id="outlined-password-input"
          label="Нууц үг"
          type="password"
          autoComplete="current-password"
          placeholder="Нууц үг"
        />

        <FormControlLabel
          control={<Checkbox defaultChecked color="info" />}
          label="Үйлчилгээний нөхцөо зөвшөөрөх"
        />
        {/* <Checkbox
          color="info"
          disabled={false}
          label="Үйлчилгээний нөхцөо зөвшөөрөх"
          size="medium"
          variant="outlined"
        /> */}
      </Box>
    </Stack>
  );
}
export default Signup;
