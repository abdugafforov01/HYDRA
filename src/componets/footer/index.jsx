import React from 'react'
import { Bordem, Border, Btn, Btns, Build, Container, Content, Info, Logo, Menu, Row, Zine } from './style'
import '../../index.css'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <Container className='conta'>
            <Content>
                <Logo />
                <Border />
                <Menu>
                    <Menu.Title>ABOUT</Menu.Title>
                    <Menu.Title>SERVICES</Menu.Title>
                    <Menu.Title>TECHNOLOGIES</Menu.Title>
                    <Menu.Title>HOW TO</Menu.Title>
                    <Menu.Title>JOIN HYDRA</Menu.Title>
                </Menu>
                <Border />
                <Info>
                    <Info.Title>F.A.Q</Info.Title>
                    <Info.Title>sistemap</Info.Title>
                    <Info.Title>conditions</Info.Title>
                    <Info.Title>Licenses</Info.Title>
                </Info>
                <Border />
                <Build>
                    <Build.Title>SOCIALIZE WITH HYDRA</Build.Title>
                    <Row>
                        <a href="https://ru-ru.facebook.com/"><Build.Face /></a>
                        <a href="https://twitter.com/?lang=ru"><Build.Twiter /></a>
                        <a href="https://www.linkedin.com/authwall?trk=qf&original_referer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fru.linkedin.com%2F"><Build.Linke /></a>
                        <a href="https://www.youtube.com/"><Build.Youtube /></a>
                        <a href="https://www.instagram.com/"><Build.Insta /></a>
                        <a href="https://www.pinterest.com/"><Build.Pinte /></a>
                    </Row>
                    <Btns><Btn>BUILD YOUR WORLD</Btn></Btns>
                </Build>
            </Content>
            <Bordem />
            <Zine>
                2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED
            </Zine>
        </Container>
    )
}
