import React from 'react'
import { Hard, Info, Logo, Box, Design, Content, Intro, Text, Flex, Info1, Info2, Info3, Logo1, Container, Display, Flex1 } from './style'
import tech from '../../assets/img/Hydra-Tech1 1.png'
import unity from '../../assets/img/Hydra-Tech3 1.png'
import culus from '../../assets/img/Hydra-Tech2 1.png'
import viwe from '../../assets/img/Hydra-Tech4 1.png'
import vector from '../../assets/img/Component.png'
import strelka from '../../assets/img/strelka.png'
import strelka2 from '../../assets/img/strelka2.png'
import { Carousel } from 'antd'
import { useState } from 'react'
import '../card/style.css'
export default function Technologies() {
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open)
    return (
        <>
            <Container id='technologies'>
                <Hard className='hard'>
                    <Hard.Title>TECHNOLOGIES & HARDWARE</Hard.Title>
                    <Hard.Text>USED BY HYDRA VR.</Hard.Text>
                    <Hard.Img />
                    <Hard.Box onClick={toggle} >
                        <Hard.Image style={{ display: open ? 'block' : 'none' }} src={strelka} />
                        <Hard.Icon style={{ display: open ? 'none' : 'block' }} src={strelka2} />
                    </Hard.Box>
                </Hard>
                <Logo style={{ display: open ? 'block' : 'none' }}>
                    <Display>
                        <Info src={tech} />
                        <Info1 src={unity} />
                        <Info2 src={culus} />
                        <Info3 src={viwe} />
                    </Display>
                </Logo>
                <Logo1>
                    <Carousel autoplay>
                        <Info src={tech} />
                        <Info1 src={unity} />
                        <Info2 src={culus} />
                        <Info3 src={viwe} />
                    </Carousel>
                </Logo1>
                <Content>
                    <Intro>
                        <Intro.Title>HOW WE BUILD</Intro.Title>
                        <Intro.Text>WITH HYDRA VR?<Intro.Img src={vector} /></Intro.Text>
                    </Intro>
                    <Text>
                        Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </Text>
                </Content>
                <Flex className='flex'>
                    <Box>
                        <Box.Img />
                        <Box.Col><Box.Title>01</Box.Title></Box.Col>
                        <Design>
                            <Design.Img />
                            <Design.Title>
                                3D Conception
                                & Design
                            </Design.Title>
                        </Design>
                    </Box>
                    <Box>
                        <Box.Img />
                        <Box.Col><Box.Title>02</Box.Title></Box.Col>
                        <Design>
                            <Design.Img />
                            <Design.Title>
                                Interaction
                                Design
                            </Design.Title>
                        </Design>
                    </Box>
                    <Box>
                        <Box.Img />
                        <Box.Col><Box.Title>03</Box.Title></Box.Col>
                        <Design>
                            <Design.Img />
                            <Design.Title>
                                VR World
                                User Testing
                            </Design.Title>
                        </Design>
                    </Box>
                    <Box>
                        <Box.Img />
                        <Box.Col><Box.Title>04</Box.Title></Box.Col>
                        <Design>
                            <Design.Img />
                            <Design.Title>
                                Hydra VR
                                Deploy
                            </Design.Title>
                        </Design>
                    </Box>
                </Flex>
                <Flex1>
                  <div className="caruse">
                  <Carousel>
                   <Box>
                        <Box.Img />
                        <Box.Col><Box.Title>01</Box.Title></Box.Col>
                        <Design>
                            <Design.Img />
                            <Design.Title>
                                3D Conception
                                & Design
                            </Design.Title>
                        </Design>
                    </Box>
                    <Box>
                        <Box.Img />
                        <Box.Col><Box.Title>02</Box.Title></Box.Col>
                        <Design>
                            <Design.Img />
                            <Design.Title>
                                Interaction
                                Design
                            </Design.Title>
                        </Design>
                    </Box>
                    <Box>
                        <Box.Img />
                        <Box.Col><Box.Title>03</Box.Title></Box.Col>
                        <Design>
                            <Design.Img />
                            <Design.Title>
                                VR World
                                User Testing
                            </Design.Title>
                        </Design>
                    </Box>
                    <Box>
                        <Box.Img />
                        <Box.Col><Box.Title>04</Box.Title></Box.Col>
                        <Design>
                            <Design.Img />
                            <Design.Title>
                                Hydra VR
                                Deploy
                            </Design.Title>
                        </Design>
                    </Box>
                   </Carousel>
                  </div>
                </Flex1>
            </Container>
        </>
    )
}
