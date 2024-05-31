import {useState,useContext } from "react";
import axios from "axios"
import {
  Text,
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import {AuthContext} from "../context/AuthContextProvider";
import {Navigate} from "react-router-dom"

//its for chakra ui
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
//


function LoginPage() {
 
  const [showPassword, setShowPassword] = useState(false);
  const [logData, setlogData] = useState({
    email: "",
    password: "",
  });
const {login,userData:{isAuth}}= useContext(AuthContext)

  // change on input field...
  function handelChng(e) {
    const { name, value } = e.target;

    let ndata = {
      ...logData,
      [name]: value,
    };
    setlogData(ndata);
  }

  // submit from....
  async function hamdelSubmit(e) {
    e.preventDefault();

    const{email,password} = logData

    try {
      let req = await axios({
        method: 'post',
        url: 'https://reqres.in/api/login',
        data: {
        email,
        password,
        }
      });
      login(req?.data?.token)
    
    } catch (error) {console.log(error)}
  }
  if (isAuth){
    return <Navigate to ="/"/>
  }

  const handleShowClick = () => setShowPassword(!showPassword);

 

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="90vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome To Masai</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={hamdelSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="email"
                    placeholder="email address"
                    name="email"
                    value={logData.email}
                    onChange={handelChng}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    onChange={handelChng}
                    value={logData.password}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        <Text fontSize="lg">
          email: eve.holt@reqres.in , password: cityslicka
        </Text>
      </Box>
    </Flex>
  );
}

export default LoginPage;
