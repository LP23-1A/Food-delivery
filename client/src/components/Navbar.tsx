"use client";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import { Box, Button, Stack } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Pinecone from "./images/Pinecone";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonIcon from "@mui/icons-material/Person";
import BasicModal from "./ModalLogin";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: 1,
  borderColor: "black",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

// "Нүүр", "Хоолны цэс", "Хүргэлтийн Бүс";
const navItems = [
  {
    name: "Нүүр",
    slug: "/",
  },
  {
    name: "Хоолны цэс",
    slug: "/menu",
  },
  {
    name: "Хүргэлтийн бүс",
    slug: "",
  },
];

export default function SearchAppBar() {
  const router = useRouter();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <Link href="/">
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <Pinecone />
            </IconButton>
          </Link>
          <List sx={{ display: "flex" }}>
            {navItems.map((item, index) => (
              <ListItem key={item.slug + index} disablePadding>
                <Link href={item.slug}>
                  <ListItemButton sx={{ textAlign: "center", width: "160px" }}>
                    <ListItemText primary={item.name} sx={{ color: "black" }} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          ></Typography>

          <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
            <Search sx={{ border: "solid black" }}>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "black" }} />
              </SearchIconWrapper>
              <StyledInputBase
                sx={{ opacity: "1" }}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Stack
              flexDirection={"row"}
              gap={5}
              color={"black"}
              alignItems={"center"}
            >
              <Box sx={{ gap: 2, display: "flex" }}>
                <ShoppingBasketIcon />
                Сагс
              </Box>
              <Box sx={{ gap: 2, display: "flex", alignItems: "center" }}>
                <Button>
                  <PersonIcon
                    onClick={() => router.push("/userprofile")}
                    sx={{ fontSize: "38px", color: "green" }}
                  />
                </Button>
                <BasicModal />
              </Box>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
