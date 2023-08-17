import React from 'react'
import { Box, Container, Logation, Content, Dive, Img, Call, Mail, Flex, Border, Image, Mask, Btns } from './style'
import icon from '../../assets/img/Component 2.png'
export default function Main() {
    return (
        <Container id='header'>
            <Content>
                <Dive>
                    <Dive.Title> <span>Dive</span> Into The Depths Of <span>Virtual Reality</span></Dive.Title>
                    <Dive.Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quidem cum deleniti distinctio, error vitae saepe, voluptatibus eaque fugit, necessitatibus quod velit. Temporibus, sequi.</Dive.Text>
                    <Btns>
                        <Dive.Btn>Build your world</Dive.Btn>
                        <Dive.Icon src={icon} />
                    </Btns>
                </Dive>
                <Img />
            </Content>

            <Box>
                <Flex>
                    <Logation>
                        <Logation.Img />
                        <div>
                            <Logation.Title>Pay Us a Visit</Logation.Title>
                            <Logation.Text>Union St, Seattle, WA 98101, United States</Logation.Text>
                        </div>
                    </Logation>
                    <Border />
                    <Call>
                        <Call.Img />
                        <div>
                            <Call.Title>Give Us a Call</Call.Title>
                            <Call.Text href='tel:(110) 1111-1010'>(110) 1111-1010</Call.Text>
                        </div>
                    </Call>
                    <Border />
                    <Mail>
                        <Mail.Img />
                        <div>
                            <Mail.Title>Send Us a Message</Mail.Title>
                            <Mail.Text href='email:Contact@HydraVTech.com'>Contact@HydraVTech.com</Mail.Text>
                        </div>
                    </Mail>
                </Flex>
            </Box>
        </Container>
    )
}
