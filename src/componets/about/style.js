import styled from "styled-components";

export const Container = styled.div` 
padding-top: 150px;
max-width: 1350px;
margin: 0 auto;
@media screen and (max-width:480px) {
  padding-top: 50px;
}
`
export const Content = styled.div` 
display: flex;
justify-content: space-between;
align-items: center;
`
export const Intro = styled.div` 
@media screen and (max-width:480px) {
  margin: 0 auto;
  text-align: center;
}
`
Intro.Title = styled.h4` 
font-size: 36px;
font-weight: 700;
color: #FFFFFF;
`
Intro.Text = styled.h6` 
font-size: 32px;
font-weight: 300;
color: #FFFFFF;
`
Intro.Img = styled.img` 
margin-left: 30px;
transition: 0.2s;
cursor: pointer;    
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
export const Touch = styled.div` 
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 110px;
padding-bottom: 110px;
@media screen and (max-width:480px) {
  display: block;
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
}
`
export const Mask = styled.img` 
cursor: pointer;
transition: 1s;
:hover{
    transform: scale(1.1);
    transition: 1s;
}
@media screen and (max-width:480px) {
  width: 336px;
  height: 358px;
  :hover{
    transform: none;
  }
}
`
export const Hydra = styled.div` 

`
Hydra.Title = styled.h4` 
font-size: 36px;
font-weight: 700;
color: #FFFFFF;
@media screen and (max-width:480px) {
  display: none;
}
`
Hydra.Tetle = styled.h4`    
font-size: 36px;
font-weight: 300;
color: #FFFFFF ;
@media screen and (max-width:480px) {
  display: none;
}
`
Hydra.Text = styled.p` 
font-size: 16px;
font-weight: 400;
color: #FFFFFF;
width: 630px;
padding-top: 30px;
@media screen and (max-width:480px) {
  font-size: 12px;
  width: 352px;
  margin: 0 auto;
  line-height: 20px;
}
`
Hydra.Btn = styled.button` 
width: 214px;
height: 48px;
background: linear-gradient(90deg, rgba(161,129,226,1) 0%, rgba(171,165,210,1) 34%, rgba(204,192,217,1) 100%);
border: 0;
border-radius: 30px;
margin-top: 20px;
font-weight: 700;
font-size: 12px;
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
  margin-top: 30px; 
}
`