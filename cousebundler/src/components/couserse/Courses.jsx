import { Text, Button, Container, Heading, HStack, Input, Stack, VStack, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './courses.css'
//element creation

const Course = ({ views, title, id, imageSrc, addtoplaylisthandler, creator, discription, lecturecount }) => {
    return (
        <VStack className='course' alignItems={['center', 'flex-start']}>
            <Image src={imageSrc} boxSize='60' objectFit={'contain'} />
            <Heading children={title} textAlign={['centere', 'left']} maxW='200px' fontFamily={'sans-serif'} noOfLines={2} size={'sm'} />

            <Text children={discription} noOfLines={2} />

            <HStack>
                <Text fontWeight={'bold'} textTransform='uppercase' noOfLines={2} children={"creator"} />
                <Text fontFamily={'body'} textTransform='uppercase' noOfLines={2} children={creator} />
            </HStack>
            <Heading textAlign={'center'} size='xs' children={`Lecture -${lecturecount}`} textTransform='uppercase' />
            <Stack direction={['column', 'row']} alignItems='center'>
                <Link to={`/course/${id}`}>
                    <Button colorScheme={'yellow'}>Watch Now</Button>
                    <Button variant={'ghost'} colorScheme={'yellow'}
                        onClick={() => addtoplaylisthandler(id)}>
                        Add To Playlist</Button>
                </Link>

            </Stack>

        </VStack>


    )
}
function Courses() {
    const [keyword, setkeyword] = useState('')
    const [catagory, setCatagory] = useState('')
    const addtoplaylisthandler = () => {
        console.log("added to playlist");
    };

    const catogories = [

        'Webdevelopment',
        "Artifcailintaligence",
        "Datastructure",
        "Appdeveloopment",
        "Gamedevelopment"
    ];
    return (
        <Container minH={'95vh'} maxW='container.lg' paddingY={'8'}>
            <Heading children='ALL COURSES' margin={'8'} />

            <Input value={keyword} onChange={e => setkeyword(e.target.value)}
                placeholder='search a couse...' type={"text"}
                focusBorderColor='yellow.500'
            />
            <HStack className='catogories' overflowX={'auto'} paddingY='7'


            >
                {catogories.map((e, index) => (
                    <Button key={index} onClick={() => setCatagory(e)} minW={'60'}>
                        <Text children={e} />
                    </Button>
                ))}
            </HStack>
            <Stack
                direction={['column', 'row']}
                flexWrap='wrap'
                justifyContent={['flex-start', 'space-evenly']}
                alignItems={['center', 'flex-start']}

            >
                <Course title={'sample'}
                    discription={"sample"}
                    views={23}
                    id={"sample"}
                    creator={"boy"}
                    lecturecount={2}
                    imageSrc={"https://www.thebigredgroup.com/wp-content/uploads/2021/07/5-reasons.jpg"}
                    addtoplaylisthandler={addtoplaylisthandler}

                />
            </Stack>
        </Container>
    )
}

export default Courses