import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ id, title, category, price }) {
  const navigate = useNavigate();
  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="2">
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
          </Stack>
        </CardBody>
        <CardFooter>
          <Button
            onClick={() => {
              navigate(`/product/view/${id}`);
            }}
          >
              More Details 
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default ProductCard;
