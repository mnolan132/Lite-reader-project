import logo from "../assets/logo-no-background.png";
import { Flex, Spacer, Box, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Flex justify={"space-between"} style={{ width: "80vw" }}>
        <Box>
          <Link to="/">
            <img src={logo} alt="Logo" width={250} />
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Flex alignItems={"center"}>
            <Box p={3}>
              <Link to="/">Home</Link>
            </Box>
            <Box p={3}>
              <Link to="/about">About</Link>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Divider marginTop={3} />
    </>
  );
};

export default Navbar;
