import { Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import {useParams } from 'react-router-dom';

function Resetpassword() {
    const [Password, setPassword] = useState('');
    const {token}=useParams();
   
    return (
        <Container h={"90vh"} py='16'>
            <form>
                <Heading children='Reset password'
                textAlign={['center','center']}
                textTransform='uppercase'
                my={'16'}
                />
                <VStack spacing={'8'}>
              
                <Input
                    required
                 
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='NewPassword'
                    type={'Password'}
                    focusBorderColor='yellow.500'
                />
              
                <Button type='submit' width={'full'} colorScheme='yellow'>Update Password</Button>
                
            </VStack>
            </form>
           

        </Container>
    )
}

export default Resetpassword