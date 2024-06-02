import { Link } from "react-router-dom";
import { Box, Button, Flex } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";
export default function NavBar() {
  const {
    logout,
    userData: { isAuth, email },
  } = useContext(AuthContext);

  // const {isAuth, email} = userData
  // let email = "myEmail@gmail.com";
  return (
    <Flex
      as="nav"
      gap={20}
      p={4}
      bg="teal.500"
      color="white"
      width={"100%"}
      justifyContent="space-around"
      borderStyle={"none"}
    >
      <Box>{isAuth? `Welcome ${email}` : "welcome"}</Box>
      <Box>
        <Link to="/">Home</Link>
        {isAuth ? (
          <Button marginX={2} size={"sm"} onClick={() => {
            logout();
          }}>
            Log Out
          </Button>
        ) : (
          <Link to="/login">
            <Button
              marginX={2}
              size={"sm"}
            >
              Log in
            </Button>
          </Link>
        )}
      </Box>
    </Flex>
  );
}
