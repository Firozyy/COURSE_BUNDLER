import { Box, Button, Grid, Heading, HStack, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

import { RiDeleteBin7Fill } from 'react-icons/ri'
import cursor from '../../../assets/images/cursor.png'
import Sidebar from '../Sidebar'
function User() {
  const users = [{
    id: "a1",
    Name:
      "abisheke",
    Role: 'admin',
    Subscription: {
      status: 'active'
    },
    Email: "sjhf@RiGll.com"
  }];

  const updatehandler = (userid) => {
    console.log(userid);
  }
  const delethandler = (userid) => {
    console.log(userid);
  }



  return (
    <Grid
      css={{ cursor: `url(${cursor}),default` }}
      minH='100vh'
      templateColumns={['1fr', "5fr 1fr"]}

    >
      <Box p={['0', '16']} overflowX="auto">
        <Heading
          textTransform={'uppercase'}
          children="All Users"
          my="16"
          textAlign={['center', 'left']}
        />
        <TableContainer w={['100vw', 'full']}>

          <Table variant={'simple'} size="lg">

            <TableCaption>All available users in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                users.map(item => (
                  <Row updatehandler={updatehandler} delethandler={delethandler} key={item.id} item={item} />
                ))
              }

            </Tbody>

          </Table>
        </TableContainer>
      </Box>
      <Sidebar />
    </Grid>
  )
}

export default User


function Row({ item, updatehandler, delethandler }) {
  return (
    <Tr>
      <Td>{item.id}</Td>
      <Td>{item.Name}</Td>
      <Td>{item.Email}</Td>
      <Td>{item.Role}</Td>

      <Td >
        #{item.Subscription.status === 'activ' ? "Activ " : "Not Active"}
      </Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button onClick={() => updatehandler(item.id)} color={'purple.500'} variant={'outline'}>Change role</Button>

          <Button onClick={() => delethandler(item.id)} color={"purple.500"} >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  )

}