import { Box, Button, Stack, Typography } from "@mui/material";

function CategoryContainer() {
  return (
    <Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "self-start",
        }}
      >
        <Button>Breakfast</Button>
        <Button>Soup</Button>
        <Button>Main Course</Button>
        <Button>Dessert</Button>
        <Button>Create New Category</Button>
      </Box>
    </Stack>
  );
}
export default CategoryContainer;
