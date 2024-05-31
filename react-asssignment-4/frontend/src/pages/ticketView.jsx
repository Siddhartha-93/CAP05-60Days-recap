import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
//ticket view component.........
function TicketView() {
  const navigate = useNavigate(); // navigate or send to another page..
  const { id } = useParams(); // react hook,its use to take parameters
  const [ticket, setTicket] = useState([]);

  //getting tickets detiles base on id params...... http://localhost:3000/tickets?id=1
  async function fetchTickitBaseId(id) {
    try {
      let res = await axios({
        method: "get",
        url: `http://localhost:3000/tickets/?id=${id}`,
      });

      let data = res.data;
      setTicket(data[0]);
    } catch (error) {
      console.log(error);
    }
  }
  async function deltTicket() {
    console.log(id);
    try {
      let res = await axios.delete(`http://localhost:3000/tickets/${id}`);
      console.log(res);
      if (res.status == 200) {
        navigate("/ticket");
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchTickitBaseId(id);
  }, [id]);

  const { title, description, assignee, priority, status } = ticket;
  // console.log(status)
  return (
    <>
      <Container marginY={5} >
        <Card>
          <CardHeader>
            <Heading size="md">{title}</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="2">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Description
                </Heading>
                <Text pt="2" fontSize="sm">
                  {description}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Assignee
                </Heading>
                <Text pt="2" fontSize="sm">
                  {assignee}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Priority
                </Heading>
                <Text pt="2" fontSize="sm">
                  {priority}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Status
                </Heading>
                <Text pt="2" fontSize="sm">
                  {status}
                </Text>
              </Box>
            </Stack>
          </CardBody>
          <CardFooter gap={3}>
            <Button
              onClick={() => {
                navigate(`/ticket/edit/${id}`);
              }}
            >
              Edit
            </Button>
            <Button onClick={deltTicket}>Delete</Button>
          </CardFooter>
        </Card>
      </Container>
    </>
  );
}

export default TicketView;
