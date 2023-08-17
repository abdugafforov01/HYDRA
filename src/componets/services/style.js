import styled from "styled-components";
import { ReactComponent as vector } from '../../assets/svg/Vector 16.svg'

export const Container = styled.div` 
padding-top: 150px;
max-width: 1350px;
margin: 0 auto;
@media screen and (max-width:480px) {
    padding-top: 80px;
}
`
export const Content = styled.div` 
width: 1275px;
height: 1008px;
background: radial-gradient(circle, rgba(67,61,96,1) 0%, rgba(72,64,103,1) 0%, rgba(22,15,51,1) 99%);
margin: 0 auto;
border-radius: 100px;
text-align: center;
@media screen and (max-width:480px) {
    width: 343px;
    height: 973px;
    border-radius: 40px;
}
`
export const Title = styled.h3` 
font-weight: 700;
font-size: 36px;
color: rgba(255, 255, 255, 1);
padding-top: 60px;
@media screen and (max-width:480px) {
   font-size: 24px;
}
`
export const Border = styled(vector)` 
margin-top: 20px;
@media screen and (max-width:480px) {
    width: 200px;
}
`
export const Text = styled.h6` 
font-weight: 300;
font-size: 36px;
color: rgba(255, 255, 255, 1);
padding-top: 30px;
padding-bottom: 10px;
@media screen and (max-width:480px) {
    font-size: 29px;
}
`
export const Form = styled.div` 
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
padding-top: 50px;
@media screen and (max-width:480px) {
    display: block;
    padding-top: 0px;
}
`
Form.Input = styled.input` 
width: 524px;
height: 72px;
border: 2px solid rgba(255, 255, 255, 1);
color: rgba(255, 255, 255, 1);
border-radius: 40px;
background: none;
padding-left: 30px;
outline: none;
:focus{
    border: 2px solid #5D2AE4;
}
:hover{
    box-shadow:0 0 10px #5D2AE4
}
@media screen and (max-width:480px) {
    width: 300px;
    height: 53px;
    margin-top: 20px;
    :hover
    {
        box-shadow:none;
    }
}
`
export const Input =  styled.input` 
width: 1068px;
height: 72px;
border: 2px solid rgba(255, 255, 255, 1);
color: rgba(255, 255, 255, 1);
border-radius: 40px;
background: none;
padding-left: 30px;
outline: none;
margin-top: 50px;
:focus{
    border: 2px solid #5D2AE4;
}
:hover{
    box-shadow:0 0 10px #5D2AE4
}
@media screen and (max-width:480px) {
    width: 300px;
    height: 53px;
    margin-top: 20px;
    :hover
    {
        box-shadow:none;
    }
}
`
export const Formu = styled.input` 
width: 1068px;
border: 2px solid rgba(255, 255, 255, 1);
color: rgba(255, 255, 255, 1);
border-radius: 40px;
background: none;
padding-left: 30px;
outline: none;
margin-top: 50px;
padding-top: 30px;
padding-bottom: 170px;
:focus{
    border: 2px solid #5D2AE4;
}
:hover{
    box-shadow:0 0 10px #5D2AE4
}
@media screen and (max-width:480px) {
    width: 300px;
    height: 219px;
    margin-top: 20px;
    :hover
    {
        box-shadow:none;
    }
}
`
export const Btn = styled.button`
font-family: 'Montserrat';
width: 214px;
height: 48px;
border-radius: 40px;
background: linear-gradient(90deg, rgba(161,129,226,1) 0%, rgba(171,165,210,1) 34%, rgba(204,192,217,1) 100%);
border: 0;
font-size: 12px;
font-weight: 700;
color: rgba(52, 48, 69, 1);
margin-top: 50px;
cursor: pointer;
padding-top: 3px;
:hover{
    background: none;
    color: #FFF;
    border: 1px solid #C1A6FF;
    transition: 0.2s;
}
:active{
background: linear-gradient(90deg, rgba(161,129,226,1) 0%, rgba(171,165,210,1) 34%, rgba(204,192,217,1) 100%);
border: 0;
color: #343045;
transition: 0.2s;
}
@media screen and (max-width:480px) {
    width: 292px;
    height: 48px;
    margin-top: 30px;
    font-size: 14px;
}
`