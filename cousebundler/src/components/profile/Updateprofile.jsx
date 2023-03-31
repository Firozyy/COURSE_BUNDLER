import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

function Updateprofile() {
  const[email,setemail]=useState('');
  const[name,setname]=useState('')
  return (
    <Container py={'16'} minH={'90vh'}>
    <form >
        <Heading
            textTransform={'uppercase'}
            my='16'
            textAlign={['center', 'left']}
        >Update profile</Heading>

        <VStack spacing={'8'}>
            <Input
          

                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder='Name'
                type={'text'}
                focusBorderColor='yellow.500'
            />
            <Input
          

          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder='email'
          type={'email'}
          focusBorderColor='yellow.500'
      />
            <Button w={"full"} type='submit' colorScheme={'yellow'}>Update</Button>
        </VStack>
    </form>
</Container>
  )
}

export default Updateprofile