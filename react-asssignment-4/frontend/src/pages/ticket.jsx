import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios";
import TicketCard from "../component/TicketCard";
import { useNavigate } from "react-router-dom";
function Tickets() {
  const [ticketList, setTicketList] = useState([]);
  const [shotBy, setShotBy] = useState("");
  const [filterBy, setFilterBy] = useState("");

  const navigate = useNavigate();
  async function fetchTicketData(shotBy, filterBy) {
    try {
      //create object query parameters for shot and filter
      const qParams = {};
      //set status for filter parameter...
      if (filterBy) {
        qParams.status = filterBy;
      }
      if (shotBy) {
        qParams._sort = "priority";
        qParams._order = shotBy;
      }
      console.log(qParams);
      let res = await axios({
        method: "get",
        url: "http://localhost:3000/tickets?",
        params: qParams,
      });
      let data = res?.data;
      setTicketList(data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(ticketList);
  //handel side Effect.....
  useEffect(() => {
    fetchTicketData(shotBy, filterBy);
  }, [shotBy, filterBy]);
  return (
    <Box>
      <Flex justifyContent={"end"}>
        <Button
          p={4}
          margin={"1rem"}
          onClick={() => {
            navigate("/ticket/create");
          }}
        >
          Create Ticket
        </Button>
      </Flex>
      {/* Shot and filter in put */}
      <Container marginY={4}>
        <Flex gap={10}>
          <Select
            variant="outline"
            placeholder="Select Status"
            value={filterBy}
            onChange={(e) => {
              setFilterBy(e.target.value);
            }}
          >
            <option value="Pending">Pending </option>
            <option value="Progress">Progress </option>
            <option value="Completed">Completed </option>
          </Select>
          <Select
            variant="outline"
            placeholder="Select Priority"
            value={shotBy}
            onChange={(e) => {
              setShotBy(e.target.value);
            }}
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </Select>
        </Flex>
      </Container>

      <SimpleGrid
        justifyContent={"Center"}
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={5}
      >
        {ticketList?.map((ele) => (
          <TicketCard {...ele} key={ele.id} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Tickets;
