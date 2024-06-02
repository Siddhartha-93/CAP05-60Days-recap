import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingIndicator from "../component/LoadingIndicator";
import ErrorIndicator from "../component/ErrorIndicator";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
function ProductPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [idData, setIdData] = useState({});
  const { id } = useParams();
  //for alert state.............
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
  const toast = useToast()

  async function fetchUserData() {
    setLoading(true);
    try {
      let res = await axios({
        method: "get",
        url: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`,
      });
      let data = res?.data?.data;
      console.log(data);
      setIdData(data);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchUserData();
  }, []);
  if (loading) {
    <LoadingIndicator />;
  }
  if (error) {
    <ErrorIndicator />;
  }
  const { brand, title, image, category, price } = idData;
  return (
    <>
      <Container marginY={10}>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={image}
          />
          <CardBody>
            <Stack divider={<StackDivider />} spacing="2">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Title
                </Heading>
                <Text pt="2" fontSize="sm">
                  {title}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Brand
                </Heading>
                <Text pt="2" fontSize="sm">
                  {brand}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Category
                </Heading>
                <Text pt="2" fontSize="sm">
                  {category}
                </Text>
              </Box>

              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Price
                </Heading>
                <Text pt="2" fontSize="sm">
                  Rs: {price}
                </Text>
              </Box>
              <Button onClick={onOpen}>Add to Cart</Button>
            </Stack>
          </CardBody>
        </Card>
      </Container>
      {/* alert block........ */}
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
       
          <AlertDialogBody>
          Are you sure you want to add this item to cart
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
            Cancel 
            </Button>
            <Button colorScheme="red" ml={3} onClick={()=>{
              toast({
                title: ` Item successfully added in cart`,
                status: "success",
                isClosable: true,
              })
              onClose()
            }}>
            Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default ProductPage;
