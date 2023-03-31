import { Box, Button, Container, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FormLabel } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Contact() {
    const [email, setEmail] = useState('');
    const [name, setname] = useState('');
    const [message, setmessage] = useState('');
    return (
        <Container h={'90vh'}>
            <VStack h={'full'} spacing='16' justifyContent={'center'} >
                <Heading children='CONTACT US' />
                <form style={{ width: "100%" }} >
                    <Box my={'4'}>
                        <FormLabel htmlFor='name' children='Name' />
                        <Input
                            required
                            id="name"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            placeholder='name'
                            type={'text'}
                            focusBorderColor='yellow.500'
                        />
                    </Box> 
                    <Box my={'4'}>
                        <FormLabel htmlFor='email' children='email address' />
                        <Input
                            required
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='abc@gmail.com'
                            type={'email'}
                            focusBorderColor='yellow.500'
                        />
                    </Box> 
                    <Box my={'4'}>
                        <FormLabel htmlFor='message' children='Message' />
                        <Textarea
                            required
                            id="message"
                            value={message}
                            onChange={(e) => setmessage(e.target.value)}
                            placeholder='message...'
                         
                            focusBorderColor='yellow.500'
                        />
                    </Box> 
                 
                 
               
                    <Button my={'4'} colorScheme={'yellow'} type='submit'>
                        Login
                    </Button>
                    <Box my={'2'}>
                       Request a new course?{' '}
                        <Link to={"/request"}>
                            <Button variant={'link'} colorScheme='yellow'> Request</Button>
                        </Link>
                        {' '}
                        here

                    </Box>

                

                </form>
            </VStack>
        </Container>
    )
}

export default Contact