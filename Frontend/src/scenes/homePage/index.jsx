import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "Layouts/Navbar";

const HomePage = () => {
  const { _id } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Main />
    </Box>
  );
};

export default HomePage;
