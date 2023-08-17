import React from 'react'
import { Border, Col, Container, Elipse, Group, Row, Col1, Col2, Col3, Row1, } from './style'
import group from '../../assets/img/group.png'
import mask from '../../assets/img/mask.png'
import gril from '../../assets/img/gril.png'
import prime from '../../assets/img/prime.png'
import { Carousel } from 'antd'
import './style.css'
export default function Card() {
    return (
        <>
            <Container className='containe' id='howto'>
                <Row>
                    <Col>
                        <Elipse />
                        <Group src={group} />
                        <Col.Title>SIMULATION</Col.Title>
                        <Border />
                        <Col.Text>
                            Vitae sapien pellentesque habitant morbi
                            nunc. Viverra aliquet  porttitor rhoncus
                            libero justo laoreet sit amet vitae.
                        </Col.Text>
                        <Col.Btn>TRY IT NOW</Col.Btn>
                    </Col>
                    <Col1>
                        <Elipse />
                        <Group src={mask} />
                        <Col.Title>EDUCATION</Col.Title>
                        <Border />
                        <Col.Text>
                            Vitae sapien pellentesque habitant morbi
                            nunc. Viverra aliquet  porttitor rhoncus
                            libero justo laoreet sit amet vitae.
                        </Col.Text>
                        <Col.Btn>TRY IT NOW</Col.Btn>
                    </Col1>
                    <Col2>
                        <Elipse />
                        <Group src={gril} />
                        <Col.Title>SELF-CARE</Col.Title>
                        <Border />
                        <Col.Text>
                            Vitae sapien pellentesque habitant morbi
                            nunc. Viverra aliquet  porttitor rhoncus
                            libero justo laoreet sit amet vitae.
                        </Col.Text>
                        <Col.Btn>TRY IT NOW</Col.Btn>
                    </Col2>
                    <Col3>
                        <Elipse />
                        <Group src={prime} />
                        <Col.Title>OUTDOOR</Col.Title>
                        <Border />
                        <Col.Text>
                            Vitae sapien pellentesque habitant morbi
                            nunc. Viverra aliquet  porttitor rhoncus
                            libero justo laoreet sit amet vitae.
                        </Col.Text>
                        <Col.Btn>TRY IT NOW</Col.Btn>
                    </Col3>
                </Row>
                <Row1>
                    <div className="carusel">
                        <Carousel autoplay>
                            <Col>
                                <Elipse />
                                <Group src={group} />
                                <Col.Title>SIMULATION</Col.Title>
                                <Border />
                                <Col.Text>
                                    Vitae sapien pellentesque habitant morbi
                                    nunc. Viverra aliquet  porttitor rhoncus
                                    libero justo laoreet sit amet vitae.
                                </Col.Text>
                                <Col.Btn>TRY IT NOW</Col.Btn>
                            </Col>
                            <Col1>
                                <Elipse />
                                <Group src={mask} />
                                <Col.Title>EDUCATION</Col.Title>
                                <Border />
                                <Col.Text>
                                    Vitae sapien pellentesque habitant morbi
                                    nunc. Viverra aliquet  porttitor rhoncus
                                    libero justo laoreet sit amet vitae.
                                </Col.Text>
                                <Col.Btn>TRY IT NOW</Col.Btn>
                            </Col1>
                            <Col2>
                                <Elipse />
                                <Group src={gril} />
                                <Col.Title>SELF-CARE</Col.Title>
                                <Border />
                                <Col.Text>
                                    Vitae sapien pellentesque habitant morbi
                                    nunc. Viverra aliquet  porttitor rhoncus
                                    libero justo laoreet sit amet vitae.
                                </Col.Text>
                                <Col.Btn>TRY IT NOW</Col.Btn>
                            </Col2>
                            <Col3>
                                <Elipse />
                                <Group src={prime} />
                                <Col.Title>OUTDOOR</Col.Title>
                                <Border />
                                <Col.Text>
                                    Vitae sapien pellentesque habitant morbi
                                    nunc. Viverra aliquet  porttitor rhoncus
                                    libero justo laoreet sit amet vitae.
                                </Col.Text>
                                <Col.Btn>TRY IT NOW</Col.Btn>
                            </Col3>
                        </Carousel>
                    </div>
                </Row1>
            </Container>
        </>
    )
}

