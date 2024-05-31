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
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function TicketEdit() {
  const navigate = useNavigate()
  const { id } = useParams();
  const [editTicket, setEditTicket] = useState({});

  async function editById() {

    try {
      let res = await axios({
        method: "GET",
        url: `http://localhost:3000/tickets/${id}`,
      });
      let data = res.data;
      setEditTicket(data);
      
    } catch (error) {
      console.log(error);
    }
    
  }
 function hendelCheng(e){
const {name,value}= e.target
let nTicket ={
  ...editTicket,
  [name]:value
}
setEditTicket(nTicket)

}

async function upDater(){
  try {
    let res = await axios({
      method: "PUT",
      url: `http://localhost:3000/tickets/${id}`,
      data: editTicket
    });
   console.log(res.status)
   if(res.status ==200){
    navigate("/ticket")
   }
  } catch (error) {
    console.log(error);
  }
}
  useEffect(() => {
    editById();
  }, []);
  const { title, description, assignee, priority, status } = editTicket;
  ;
  return (
    <Container>
      <VStack>
        <form>
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
              value={title}
              onChange={(e)=>{
                hendelCheng(e)
              }}
            />
            <FormLabel>Description</FormLabel>
            <Input
              marginBottom={2}
              variant="flushed"
              name="description"
              placeholder=" Add Description"
              value={description}
              onChange={(e)=>{
                hendelCheng(e)
              }}
            />
            <FormLabel>Assignee</FormLabel>
            <Input
              marginBottom={2}
              variant="flushed"
              name="assignee"
              placeholder=" Add Assignee"
              value={assignee}
              onChange={(e)=>{
                hendelCheng(e)
              }}
            />
            <FormLabel>Priority</FormLabel>
            <RadioGroup marginBottom={2} name="priority"  value={priority}>
              <HStack
                spacing={3}
                onChange={(e)=>{
                  hendelCheng(e)
                }}  
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
              value={status}
              name="status"
              onChange={(e)=>{
                hendelCheng(e)
              }}
            >
              <option value="Pending">Pending</option>
              <option value="Progress">Progress</option>
              <option value="Completed">Completed</option>
            </Select>
            <Button onClick={()=>{
              upDater()
            }} >Edit</Button> 
          </FormControl>
        </form>
      </VStack>
    </Container>
  );
}

export default TicketEdit;
