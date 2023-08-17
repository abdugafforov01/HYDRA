import React from 'react'
import { Container, Content, Hydra, Intro, Mask, Text, Touch } from './style'
import vector from '../../assets/img/Component.png'
import mask from '../../assets/img/Mask group.png'
import './style.css'
export default function About() {
    return (
        <Container className='contain' id='about'>
            <Content>
                <Intro>
                    <Intro.Title>INTRODUCTION</Intro.Title>
                    <Intro.Text>TO HYDRA VR <Intro.Img src={vector} /></Intro.Text>
                </Intro>
                <Text>
                    Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                </Text>
            </Content>
            <Touch>
                <Mask src={mask} />
                <Hydra>
                    <Hydra.Title>ABOUT</Hydra.Title>
                    <Hydra.Tetle>HYDRA VR</Hydra.Tetle>
                    <Hydra.Text>
                        Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus
                        urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida
                        dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in.
                        Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet
                        sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
                        etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet
                        cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                        retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                        n tempor.
                    </Hydra.Text>
                    <Hydra.Btn>LET’S GET IN TOUCH</Hydra.Btn>
                </Hydra>
            </Touch>
            <Content>
                <Intro>
                    <Intro.Title>WHY BUILD</Intro.Title>
                    <Intro.Text>WITH HYDRA? <Intro.Img src={vector} /></Intro.Text>
                </Intro>
                <Text>
                    Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                </Text>
            </Content>
        </Container>
    )
}
