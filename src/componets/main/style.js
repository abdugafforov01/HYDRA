import styled from "styled-components";
import { ReactComponent as gril } from '../../assets/svg/Mask group.svg'
import { ReactComponent as location } from '../../assets/svg/Location.svg'
import { ReactComponent as call } from '../../assets/svg/call.svg'
import { ReactComponent as mail } from '../../assets/svg/mail.svg'
import { ReactComponent as vector } from '../../assets/svg/Vector 5.svg'
export const Container = styled.div` 
padding-top: 190px;
max-width: 1350px;
margin: 0 auto;
position: relative;
`
export const Content = styled.div` 
display: flex;
align-items: center;
justify-content: space-between;
padding-bottom: 50px;
@media screen and (max-width:480px) {
  text-align: center;
}
`
export const Dive = styled.div`
animation: slide-in 1000ms;
@keyframes slide-in {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }
@media screen  and (max-width:480px) {
  margin: 0 auto;
}
`
Dive.Title = styled.h4` 
font-weight: 700;
font-size: 38px;
width: 430px;
line-height: 48px;
text-align: left;
color: #FFFFFF;
span{
color:#A381E5;
}
@media screen and (max-width:480px) {
  padding-top: 300px;
  width: 298px;
  font-size: 24px;
  text-align: center;
  span{
    font-size: 36px;
  }
}
`
Dive.Text = styled.p` 
width: 430px;
color: #EBEBEB;
padding-top: 25px;
line-height: 25px;
@media screen and (max-width:480px) {
  display: none;
}
`
Dive.Btn = styled.button` 
font-family: 'Montserrat';
width: 220px;
height: 45px;
background: linear-gradient(90deg, rgba(161,129,226,1) 0%, rgba(171,165,210,1) 34%, rgba(204,192,217,1) 100%);
border: 0;
border-radius: 30px;
margin-top: 20px;
font-weight: 700;
font-size: 15px;
color: #343045;
cursor: pointer;
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
  margin: 20px auto;
}
`
export const Btns =  styled.div` 
display: flex;
align-items: center;
gap: 40px;
`
Dive.Icon = styled.img` 
margin-top: 20px;
cursor: pointer;
transition: 0.2s;
:hover{
  transform: scale(1.1);
}
@media screen and (max-width:480px) {
  display: none;
}
`
export const Img = styled(gril)` 
width: 450px;
height: 450px;
cursor: pointer;
margin-right: 20px;
transition: 0.7s;
:hover{
    transform: scale(1.1);
    transition: 0.7s;
}
@media screen and (max-width:480px) {
  max-width: 100%;
  width: 338px;
  height: 277px;
  position: absolute;
  top: 150px;
  right: 50px;
  :hover{
    transform: none;
  }
}
`
export const Box = styled.div` 
margin: 0 auto;
width: 1350px;
height: 167px;
border-radius: 90px;
transition: 1s;
background: linear-gradient(90deg, rgba(36,31,59,1) 0%, rgba(70,64,96,1) 50%, rgba(37,32,59,1) 99%);
:hover{
    transform: scale(1.1);
    transition: 1s;
    box-shadow:0 0 20px #102064;
}
@media screen and (max-width:480px) {
  width: 347px;
  height: 109px;
  position: relative;
  :hover{
    transform: none;
    box-shadow: none;
  }
}
`
export const Logation = styled.div` 
display: flex;
gap: 15px;
align-items: center;
@media screen and (max-width:480px)  {
  display: flex;
  gap: 2px;
  align-items: center;
 position: absolute;
 top: 15px;
 left: 10px;
}
`
Logation.Img = styled(location)`
cursor: pointer;
@media screen and (max-width:480px)  {
  width: 70px;
  height: 70px;
}
`


Logation.Title = styled.h4`
font-size: 24px;
font-weight:700;
color: #FFFFFF;
padding-top: 8px;
@media screen and (max-width:480px)  {
  font-size: 14px;
}
`
Logation.Text = styled.h4` 
font-size: 14px;
font-weight:400;
color: #FFFFFF;
cursor: pointer;
@media screen and (max-width:480px)  {
  font-size: 14px;
}
`
export const Call = styled.div` 
display: flex;
align-items: center;
gap: 18px;
@media screen and (max-width:480px)  {
  display: none;
}
`
Call.Img = styled(call)`
cursor: pointer;
@media screen and (max-width:480px)  {
  width: 70px;
  height: 70px;
}
`

Call.Title = styled.h4` 
font-size: 24px;
font-weight:700;
color: #FFFFFF;
@media screen and (max-width:480px)  {
  font-size: 14px;
}
`
Call.Text = styled.a` 
font-size: 14px;
font-weight:400;
color: #FFFFFF;
text-decoration:none;
@media screen and (max-width:480px)  {
  font-size: 14px;
}
`
export const Mail = styled.div` 
display: flex;
align-items: center;
gap: 18px;
@media screen and (max-width:480px)  {
  display: none;
}
`
Mail.Img = styled(mail)`
cursor: pointer;
@media screen and (max-width:480px)  {
  width: 70px;
  height: 70px;
}
`

Mail.Title = styled.h4` 
font-size: 24px;
font-weight:700;
color: #FFFFFF;
@media screen and (max-width:480px)  {
  font-size: 14px;
}
`
Mail.Text = styled.a` 
font-size: 14px;
font-weight:400;
color: #FFFFFF;
text-decoration:none;
@media screen and (max-width:480px)  {
  font-size: 14px;
}
`
export const Flex = styled.div` 
display: flex;
justify-content: space-around;
align-items: center;
padding-top: 30px;
`
export const Border = styled(vector)`
@media screen and (max-width:480px)  {
  display: none;
}
`
