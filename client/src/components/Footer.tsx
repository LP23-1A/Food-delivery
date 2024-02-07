import { Box, DialogTitle, Stack, Typography } from "@mui/material";
import PineconeW from "./images/PineconeW";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import BackImg from "./images/BackImg";
import { relative } from "path";

function Footer() {
  return (
    <Stack>
      <Box
        sx={{
          gap: "40px",
          paddingX: 10,
          paddingY: "114px",
          color: "#fff",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#18BA51",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box sx={{ position: "absolute", alignItems: "center" }}>
          <BackImg />
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <PineconeW />
          <DialogTitle>Footer Delivery</DialogTitle>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            alignSelf: "stretch",
          }}
        >
          <Typography>Нүүр</Typography>
          <Typography>Холбоо барих</Typography>
          <Typography>Хоолны цэс</Typography>
          <Typography>Үйлчилгээний нөхцөл</Typography>
          <Typography>Хүргэлтийн бүс</Typography>
          <Typography>Нууцлалын бодлого</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            textAlign: "center",
          }}
        >
          <Box>
            <FacebookIcon />
            <InstagramIcon />
            <XIcon />
          </Box>
          <Box width={1200} borderTop={1}></Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography>© 2024 Pinecone Foods LLC</Typography>
            <Typography>Зохиогчийн эрх хуулиар хамгаалагдсан.</Typography>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}
export default Footer;
