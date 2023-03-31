import { Avatar, Button, Container, Heading, HStack, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { ModalFooter } from 'react-bootstrap';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom'
import { fileuploderCss } from '../auth/register/Register';

function Profile() {
    const removeplaylisthandler = (id) => {
        console.log(id);
    };
    const changeImageHnadler = (event, image) => { 
        event.preventDefault();
        console.log(image);
    };

    const user = {
        name: "Firos",
        email: "frios@gmail.com",
        createdAt: String(new Date().toISOString()),
        role: 'user',
        subsciption: {
            status: "active"
        },
        playlist: [{

            course: 'robotics',
            poster: 'data:image/jpeg;base64,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'

        }]
    };
    const { isOpen, onClose, onOpen } = useDisclosure();

    return (

        <Container
            minH={'95vh'}
            maxW='container.lg'
            py={'8'}
        >
            <Heading m={'8'}
                textTransform='uppercase'   >

                profile
            </Heading>
            <Stack
                justifyContent={'center'}
                direction={['column', 'row']}
                alignItems={'center'}
                spacing={["8", "16"]}
                padding='8'
            >

                <VStack>

                    <Avatar boxSize={'48'} />

                    <Button onClick={onOpen} colorScheme={'yellow'} variant='ghost'>

                        CHANGE PHOTO
                    </Button>
                </VStack >

                <VStack spacing={'4'} alignItems={["center", 'flex-start']}>
                    <HStack>
                        <Text fontWeight={'bold'}>
                            Name
                        </Text>
                        <Text >
                            {user.name}
                        </Text>
                    </HStack>
                    <HStack>
                        <Text fontWeight={'bold'}>
                            Email
                        </Text>
                        <Text >
                            {user.email}
                        </Text>
                    </HStack> <HStack>
                        <Text fontWeight={'bold'}>
                            createdAt
                        </Text>
                        <Text >
                            {user.createdAt.split('T')[0]}
                        </Text>
                    </HStack>

                    {user.role !== "admin" && (
                        <HStack>
                            <Text fontWeight={'bold'}>SUBSCRIPTION</Text>
                            {user.subsciption.status === 'active' ? (
                                <Button variant={'unstyled'} color={'yellow.500'}>Cancel Subscription</Button>
                            ) : (
                                <Link to={'/subscribe'}>
                                    <Button colorScheme={'yellow'}>Subscribe</Button>
                                </Link>
                            )
                            }
                        </HStack>
                    )}

                    <Stack direction={['column', 'row']}
                        alignItems={'center'}>

                        <Link to={"/updateprofile"}>
                            <Button>Update profile</Button>
                        </Link>
                        <Link to={"/changepassword"}>
                            <Button>Change Passwrord</Button>
                        </Link>
                    </Stack>

                </VStack>
            </Stack>


            <Heading size={'md'} my='8'>Playlist</Heading>
            {
                user.playlist.length > 0 && (
                    <Stack
                        direction={['column', 'row']}
                        flexWrap='wrap'
                        alignItems={'center'}
                        p='4'


                    >

                        {
                            user.playlist.map((e, index) => (

                                <VStack w='48' key={e.course}>
                                    <Image boxSize={"full"} objectFit='contain' src={e.poster} />
                                    <Link to={`/course/${e.course}`}>
                                        <Button variant={'ghost'} colorScheme={'yellow'}>    Watch Now</Button>

                                    </Link>
                                    <Button onClick={() => removeplaylisthandler(e.course)}>

                                        <RiDeleteBin7Fill />
                                    </Button>
                                </VStack>
                            ))
                        }

                    </Stack>
                )
            }

            <ChangephotBox 
            changeImageHnadler={changeImageHnadler}
             isOpen={isOpen} 
             onClose={onClose} />
        </Container>


    )
}

export default Profile
function ChangephotBox({ isOpen, onClose, changeImageHnadler }) {
    const [ImagePrev, setImagePrev] = useState('')
    const [image, setImage] = useState('')


    const Changeimage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setImagePrev(reader.result);
            setImage(file);
        };
    };

    const closehandler = () => {
        onClose();
        setImagePrev('');
        setImage('');
    }
    return (
        <Modal isOpen={isOpen} onClose={closehandler}>

            <ModalOverlay backdropFilter={'blur(10px)'} />
            <ModalContent>
            <ModalHeader>Change Photo</ModalHeader>
                <ModalCloseButton />
                <ModalBody>

                    <Container>
                    <form onSubmit={e => changeImageHnadler(e, image)}>
                            <VStack spacing={'8'}>

                                {ImagePrev && (
                                    <Avatar src={ImagePrev} boxSize={'48'} />
                                )}
                                <Input type={'file'} css={{ "&::file-selector-button": fileuploderCss }}
                                    onChange={Changeimage}
                                />
                                <Button width={'full'} type='submit' colorScheme={'yellow'}>Change</Button>
                            </VStack>
                        </form>
                    </Container>

                </ModalBody>

                <ModalFooter>
                    <Button mr='3' onClick={closehandler}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}