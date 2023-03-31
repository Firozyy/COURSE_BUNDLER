import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

function Changepassword() {
    const [oldpassword,setoldpassword]=useState('')
    const [newpassword,setNewpassword]=useState('')
    return (
        <Container py={'16'} minH={'90vh'}>
            <form >
                <Heading
                    textTransform={'uppercase'}
                    my='16'
                    textAlign={['center', 'left']}
                >Change password</Heading>

                <VStack spacing={'8'}>
                    <Input
                        required

                        value={oldpassword}
                        onChange={(e) => setoldpassword(e.target.value)}
                        placeholder='Enter old password'
                        type={'password'}
                        focusBorderColor='yellow.500'
                    />
                    <Input
                        required

                        value={newpassword}
                        onChange={(e) => setNewpassword(e.target.value)}
                        placeholder='Ente New password'
                        type={'password'}
                        focusBorderColor='yellow.500'
                    />
                    <Button w={"full"} type='submit' colorScheme={'yellow'}>change</Button>
                </VStack>
            </form>
        </Container>
    )
}

export default Changepassword