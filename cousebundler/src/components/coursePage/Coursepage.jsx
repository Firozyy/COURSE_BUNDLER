import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import introvideo from '../../assets/videos/intro.mp4'
function Coursepage() {

  
    const [lecturenumber,setlecturenomber] =useState(0)
    const lectures=[{
        id:'1',
        title:'sample title1',
        description:'sample description',
        video:{
            url:'sdfsdf'
        }
    },
    {
        id:'2',
        title:'sample titl2',
        description:'sample description',
        video:{
            url:'sdfsdf'
        }
    },
    {
        id:'3',
        title:'sample title3',
        description:'sample description',
        video:{
            url:'sdfsdf'
        }
    },
];
    return (
        <Grid
            minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
            <Box>

                <video
                    width={'100%'}
                    controls
                    controlsList='nodownload noremotplayback'
                    disablePictureInPicture
                    disableRemotePlayback
                    src={introvideo}

                >

                </video>
                <Heading children={`# ${lecturenumber + 1}  ${lectures[lecturenumber].title}`}
                    m={'4'} />
                <Heading children='Discription'
                    m={'4'} />
                <Text m={'4'} children={lectures[lecturenumber].description} />
            </Box>
            <VStack>
                {
                    lectures.map((e,index) => (
                        <button
                        onClick={()=>setlecturenomber(index)}
                        style={{
                            width:"100%",
                            padding:"1rem",
                            textAlign:'center',
                            margin:'0',
                            borderBottom:'1px solid rgba(0,0,0,0.2)'
                        }}
                        >
                            <Text noOfLines={'1'}>
                                #{index+1} {e.title}
                            </Text>
                        </button>
                    ))
                }
            </VStack>

        </Grid>
    )
}

export default Coursepage
