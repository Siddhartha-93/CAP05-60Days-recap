import {
  Button,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TicketCreate() {
  const navigate = useNavigate();
  const [newTicket, setNewTicket] = useState({
    title: "",
    description: "",
    assignee: "",
    priority: "",
    status: "",
  });
  //creating new ticket object....
  function hendelCheng(e) {
    const { name, value } = e.target;
    let nTicket = { ...newTicket, [name]: value };
    setNewTicket(nTicket);
  }

  // sending new ticket to data base....
  async function addTicketInDb(newTicket) {
    try {
      let res = await axios({
        method: "POST",
        url: "http://localhost:3000/tickets",
        data: newTicket,
      });
      if (res.status == 201) {
        navigate("/ticket");
      }
    } catch (error) {
      console.log(error);
    }
  }
  // submit ticket
  function hendelSubmit(e) {
    e.preventDefault();
    addTicketInDb(newTicket);
  }

  return (
    <Container>
      <VStack>
        <form onSubmit={hendelSubmit}>
          <FormControl
            w={"30rem"}
            marginY={10}
            rounded={5}
            boxShadow="base"
            p="2"
          >
            <FormLabel>Title</FormLabel>
            <Input
              marginBottom={2}
              variant="outline"
              name="title"
              placeholder=" Add Title"
              value={newTicket.title}
              onChange={hendelCheng}
            />
            <FormLabel>Description</FormLabel>
            <Input
              marginBottom={2}
              variant="flushed"
              name="description"
              placeholder=" Add Description"
              value={newTicket.description}
              onChange={hendelCheng}
            />
            <FormLabel>Assignee</FormLabel>
            <Input
              marginBottom={2}
              variant="flushed"
              name="assignee"
              placeholder=" Add Assignee"
              value={newTicket.assignee}
              onChange={hendelCheng}
            />
            <FormLabel>Priority</FormLabel>
            <RadioGroup marginBottom={2} name="priority">
              <HStack
                spacing={3}
                onChange={hendelCheng}
                value={newTicket.priority}
              >
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
                <Radio value="6">6</Radio>
                <Radio value="7">7</Radio>
                <Radio value="8">8</Radio>
                <Radio value="9">9</Radio>
              </HStack>
            </RadioGroup>
            <FormLabel>Status</FormLabel>
            <Select
              marginBottom={2}
              placeholder="Select Status"
              value={newTicket.status}
              name="status"
              onChange={hendelCheng}
            >
              <option value="pending">Pending</option>
              <option value="progress">Progress</option>
              <option value="completed">Completed</option>
            </Select>
            <Button type="submit">Submit</Button>
          </FormControl>
        </form>
      </VStack>
    </Container>
  );
}

export default TicketCreate;
