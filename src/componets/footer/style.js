import styled from "styled-components";
import { ReactComponent as logo } from '../../assets/svg/Framee.svg'
import { ReactComponent as facebook } from '../../assets/svg/facebook.svg'
import { ReactComponent as twitter } from '../../assets/svg/twitter.svg'
import { ReactComponent as linkedin } from '../../assets/svg/linkedin.svg'
import { ReactComponent as youtube } from '../../assets/svg/youtube.svg'
import { ReactComponent as instagram } from '../../assets/svg/instagram.svg'
import { ReactComponent as pinterest } from '../../assets/svg/pinterest.svg'
import { ReactComponent as vector } from '../../assets/svg/Vector 20.svg'
import { ReactComponent as border } from '../../assets/svg/Vector 17.svg'

export const Container = styled.div` 
padding-top: 120px;
max-width: 1350px;
margin: 0 auto;
`
export const Content = styled.div` 
display: flex;
justify-content: space-between;
@media screen and (max-width:480px) {
    display: block;
    text-align: center;
}
`
export const Logo = styled(logo)` 
cursor: pointer;
margin-top: 30px;
  @media screen and (max-width:480px) {
    margin-top: 0;
}
`
export const Menu = styled.div` 
@media screen and (max-width:480px) {
    display: none;
}
`
Menu.Title = styled.h4` 
font-size: 16px;
font-weight: 700;
padding-top: 20px;
color: rgba(255, 255, 255, 1);
cursor: pointer;
:hover{
    color: #4D26A5;
}
`
export const Info = styled.div` 
@media screen and (max-width:480px) {
    display: none;
}
`
Info.Title = styled.h4` 
font-size: 16px;
font-weight: 700;
text-transform: uppercase;
padding-top: 20px;
color: rgba(255, 255, 255, 1);
cursor: pointer;
:hover{
    color: #4D26A5;
}
`
export const Build = styled.div` 
@media screen and (max-width:480px) {
   text-align: center;
   padding-top: 50px;
}
`
Build.Title = styled.h4` 
font-size: 16px;
font-weight: 700;
text-transform: uppercase;
padding-top: 20px;
color: rgba(255, 255, 255, 1);
cursor: pointer;
:hover{
    color: #4D26A5;
}
@media screen and (max-width:480px) {
    :hover{
        color: #FFFF;
    }
}
`
Build.Face = styled(facebook)` 
cursor: pointer;
`
Build.Twiter = styled(twitter)` 
cursor: pointer;
`
Build.Linke = styled(linkedin)` 
cursor: pointer;
`
Build.Youtube = styled(youtube)` 
cursor: pointer;
`
Build.Insta = styled(instagram)` 
cursor: pointer;
`
Build.Pinte = styled(pinterest)` 
cursor: pointer;
`
export const Row = styled.div` 
display: flex;
align-items: center;
gap: 10px;
padding-top: 35px;
@media screen and (max-width:480px) {
    justify-content: center;
}
`
export const Btn = styled.button`
width: 214px;
height: 48px;
border-radius: 40px;
background: linear-gradient(90deg, rgba(161,129,226,1) 0%, rgba(171,165,210,1) 34%, rgba(204,192,217,1) 100%);
border: 0;
font-size: 12px;
font-weight: 700;
color: rgba(52, 48, 69, 1);
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
`
export const Btns = styled.div` 
padding-top: 50px;
`
export const Border = styled(vector)` 
margin-top: 20px;
@media screen and (max-width:480px) {
    display: none;
}
`
export const Bordem = styled(border)` 
margin-top: 60px;
@media screen and (max-width:480px) {
    width: 280px;
    margin-left: 80px;
}
`
export const Zine = styled.div` 
font-size: 14px;
font-weight: 700;
color: rgba(255, 255, 255, 1);
text-align: center;
padding-top: 40px;
padding-bottom: 40px;
@media screen and (max-width:480px) {
    width: 173px;
    margin: 0 auto;
    line-height: 30px;
}
`