import React from 'react'
import { Border, Btn, Container, Content, Form, Formu, Input, Text, Title } from './style'

export default function Register() {
  return (
    <Container id='services'>
        <Content>
            <Title>JOIN HYDRA</Title>
            <Border/>
            <Text>Let’s Build Your VR Experience</Text>
            <Form>
              <Form.Input type='text' placeholder='First Name'/>
              <Form.Input type='text' placeholder='Last Name'/>
            </Form>
             <Form>
              <Form.Input type='text' placeholder='First Name'/>
              <Form.Input type='text' placeholder='Last Name'/>
            </Form> 
            <Input type='text' placeholder='Subject'/>
            <Formu type='text' placeholder='Tell Us Something...'/>
            <Btn>SEND TO HYDRA</Btn>
        </Content>
    </Container> 
  )
}

