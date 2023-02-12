import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import Footer from "./Footer";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="#FFEFA0">
          PUDZIANO-POL
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor="#F8EDE3"
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to PUDZIANO-POL!
        </Typography>
        <Form />
      </Box>
        <Footer/>
    </Box>

  );
};

export default LoginPage;
