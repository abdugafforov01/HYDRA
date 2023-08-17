import styled from "styled-components";
import { ReactComponent as elip } from '../../assets/svg/Ellipse 6.svg'
import { ReactComponent as lip } from '../../assets/svg/Ellipse 7.svg'
import { ReactComponent as icon } from '../../assets/svg/arrow-small-right.svg'

export const Container = styled.div` 
padding-top: 120px;
max-width: 1350px;
margin: 0 auto;
@media screen and (max-width:480px) {
  padding-top: 50px;
}
`
export const Hard = styled.div` 
text-align: center;
position: relative;
`
Hard.Title = styled.h4` 
font-weight: 700;
font-size: 36px;
color: #FFFFFF;
padding-top: 7rem;
@media screen and (max-width:480px) {
    font-size: 16px;
    padding-top: 50px;
}
`
Hard.Text = styled.h6` 
font-weight: 300;
font-size: 36px;
color: #FFFFFF;
@media screen and (max-width:480px) {
    font-size: 24px;
    padding-top: 10px;
}
`
Hard.Img = styled(elip)` 
margin-top: 30px;
cursor: pointer;
@media screen and (max-width:480px) {
    display: none;
}
`
Hard.Box = styled.div` 
width: 70px;
height: 70px;
border-radius: 50%;
position: absolute;
bottom: -13px;
left: 609px;
cursor: pointer;
background: linear-gradient(90deg, rgba(161,129,226,1) 0%, rgba(171,165,210,1) 34%, rgba(204,192,217,1) 100%);
:hover{
    background: #9973FF;
}
:active{
    background: none;
    border: 1px solid  #887CAA;
    transition:0.2s;

}
@media screen and (max-width:480px) {
    display: none;
}
`
Hard.Image = styled.img` 
margin-top: 28px;
margin-left: 24px;
`
Hard.Icon = styled.img` 
margin-top: 28px;
margin-left: 23px;
`
export const Display = styled.div` 
display: flex;
align-items: center;
justify-content: space-around;
`
export const Logo = styled.div`
align-items: center;
padding-top: 40px;
animation: slide-in 1000ms;
@keyframes slide-in {
    from {
      transform: translateY(-20%);
    }
    to {
      transform: translateY(0%);
    }
  }
@media screen and (max-width:480px) {
    padding-top: 0;
    display: none;
}
`
export const Logo1 = styled.div` 
display: none;
@media screen and (max-width:480px) {
    display: block;
   width: 280px;
   height: 350px;
   margin: 0 auto;
}
`
export const Info = styled.img` 
cursor: pointer;
@media screen and (max-width:480px) {
    padding-top: 0;
    width: 150px;
    height: 220px;
}
`
export const Info1 = styled.img` 
cursor: pointer;
`
export const Info2 = styled.img` 
cursor: pointer;
`
export const Info3 = styled.img` 
cursor: pointer;
`
export const Content = styled.div` 
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 150px;
@media screen and (max-width:480px) {
    display: block;
    padding-top: 30px;
}
`
export const Intro = styled.div` 
`
Intro.Title = styled.h4` 
font-size: 36px;
font-weight: 700;
color: #FFFFFF;
@media screen and (max-width:480px) {
    text-align: center;
}
`
Intro.Text = styled.h6` 
font-size: 32px;
font-weight: 300;
color: #FFFFFF;
@media screen and (max-width:480px) {
    text-align: center;
}
`
Intro.Img = styled.img` 
margin-left: 30px;
cursor: pointer;
transition: 0.2s;
:hover{
  transform: scale(1.1);
}
@media screen and (max-width:480px) {
    display: none;
}
`
export const Text = styled.div` 
font-size: 16px;
font-weight: 400;
color: #FFFFFF;
width: 652px;
@media screen and (max-width:480px) {
    display: none;
}
`
export const Box = styled.div` 
position: relative;
transition: 0.5s;
:hover{
    transform: scale(1.1);
    transition: 0.5s;
}
@media screen and (max-width:480px) {
    :hover{
        transform: none;
    }
    margin: 0 auto;
}
`
Box.Img = styled(lip)` 
margin-left: 38px;
@media screen and (max-width:480px) {
   display: none;
}
`
Box.Col = styled.div` 
width: 159px;
height: 159px;
background: linear-gradient(90deg, rgba(161,129,226,1) 0%, rgba(171,165,210,1) 34%, rgba(204,192,217,1) 100%);
border-radius: 50%;
position: absolute;
top: 20px;
left: 58px;
cursor: pointer;
:hover{
    background: #9973FF;
}
:active{
    background: none;
    border: 1px solid  #887CAA;
    transition:0.2s;
    color: #BBBABC;
}
@media screen and (max-width:480px) {
 position: initial;
 left: 0;
 top: 0;
 margin: 0 auto;
    
}
`
Box.Title = styled.h1` 
font-weight: 700;
font-size: 64px;
color: rgba(52, 48, 69, 1);
text-align: center;
cursor: pointer;
padding-top: 40px;
:active{
    color: #BBBABC;
}
@media screen and (max-width:480px) {
    padding-top: 25px;
}
`
export const Design = styled.div`
display: flex;
padding-left: 20px;
@media screen and (max-width:480px) {
    justify-content: center;
    margin-bottom: 50px;
    padding: 0;
}
`
Design.Title = styled.h4` 
font-weight: 700;
font-size: 24px;
color: rgba(255, 255, 255, 1);
width: 187px;
padding-top: 20px;
`
Design.Img = styled(icon)`
@media screen and (max-width:480px) {
    display: none;
}
`

export const Flex = styled.div`  
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 10rem;
@media screen and (max-width:480px) {
    display: none;
}
`
export const Flex1 = styled.div`  
display: none;
@media screen and (max-width:480px) {
    display: block;
    padding-top: 40px;
    text-align: center;
}
`