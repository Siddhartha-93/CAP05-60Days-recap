import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, Stack, StackDivider, Text } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function TicketCard({id,title, status, priority }) {
    const navigate = useNavigate()
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
          <CardFooter>
            <Button
              onClick={() => {
                navigate(`/ticket/view/${id}`);
              }}
            >
              View Ticket
            </Button>
          </CardFooter>
        </Card>
      </>
    );
  }

export default TicketCard
