import { Box, Stack, Typography } from "@mui/material";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

type FastProps = {
  text?: string | number;
  text1?: string | number;
  image?: string;
};

function FastDelivery(props: FastProps) {
  return (
    <Stack>
      <Box
        display={"flex"}
        gap={4}
        flexDirection={"column"}
        sx={{
          width: "264px",
          padding: "16px",
          justifyContent: "center",
          alignItems: "flex-start",
          borderRadius: "16px",
          border: "1px solid #D6D8DB",
          boxShadow: "4px 4px 12px 0px rgba(0, 0, 0, 0.10)",
        }}
      >
        <Box>
          <ImportContactsIcon />
        </Box>
        <Box>
          <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
            {props.text}
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: 400, opacity: 0.75 }}>
            {props.text1}
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
}
export default FastDelivery;
