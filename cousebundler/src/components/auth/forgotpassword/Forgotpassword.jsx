import { Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'


function Forgotpassword() {
    const [email, setEmail] = useState('')
    return (
        <Container h={"90vh"} py='16'>
            <form>
                <Heading children='Forget Password'
                textAlign={['center','center']}
                textTransform='uppercase'
                my={'16'}
                />
                <VStack spacing={'8'}>
              
                <Input
                    required
                  
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='abc@gmail.com'
                    type={'email'}
                    focusBorderColor='yellow.500'
                />
               
                <Button type='submit' width={'full'} colorScheme='yellow'>Sent resnt link</Button>
               
            </VStack>
            </form>
           

        </Container>
    )
}

export default Forgotpassword