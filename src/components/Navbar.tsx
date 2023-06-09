import logo from "../assets/logo-no-background.png";
import logoSmall from "../assets/litereader-website-favicon-color.png";
import { Flex, Spacer, Box, Divider, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLargerThanMobile] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Flex justify={"space-between"} maxWidth="1200px" mx="auto" width="80vw">
        <Box>
          <Link to="/">
            {isLargerThanMobile ? (
              <img src={logo} alt="Logo" width={250} />
            ) : (
              <img src={logoSmall} alt="Logo" width={50} />
            )}
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Flex alignItems={"center"}>
            <Box p={3}>
              <Link to="/">
                <strong>Ho</strong>me
              </Link>
            </Box>
            <Box p={3}>
              <Link to="/about">
                <strong>Ab</strong>out
              </Link>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Divider marginTop={3} />
    </>
  );
};

export default Navbar;
