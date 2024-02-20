import CategoryContainer from "@/components/CategoryContainer";
import SearchAppBar from "@/components/Navbar";
import { Box, Stack, Typography } from "@mui/material";

function FoodCategory() {
  return (
    <Stack>
      <Box>
        <SearchAppBar />
      </Box>
      <Box>
        <Box>
          <Typography>Food menu</Typography>
          <Box>
            <CategoryContainer />
          </Box>
        </Box>
        <Box></Box>
      </Box>
    </Stack>
  );
}
export default FoodCategory;
