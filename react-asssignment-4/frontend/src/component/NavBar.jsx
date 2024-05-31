import { Link } from "react-router-dom";
import { Button, Flex } from "@chakra-ui/react";
import {  useContext } from "react"
import { AuthContext } from "../context/AuthContextProvider";
import { color } from "framer-motion";
export default function NavBar() {
  const {
    logout,
    userData: { isAuth },
  } = useContext(AuthContext);
  return (
    //this styleing is not appropieat
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
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/ticket">Tickets Page</Link>
      {isAuth ? (
        <Button
          size={"sm"}
          onClick={() => {
            logout();
          }}
        >
          Log Out
        </Button>
      ) : (
        <Button size={"sm"}>
          <Link to="/login">Login</Link>
        </Button>
      )}
    </Flex>
  );
}
