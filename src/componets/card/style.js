import styled from "styled-components";
import { ReactComponent as elipse } from '../../assets/svg/Ellipse.svg'
import { ReactComponent as vector } from '../../assets/svg/Vector 10.svg'

export const Container = styled.div` 
padding-top: 170px;
max-width: 1350px;
margin: 0 auto;
@media screen and (max-width:480px) {
  padding-top: 50px;
}
`
export const Col1 = styled.div` 
width: 310px;
height: 511px;
border-radius: 40px;
text-align: center;
position: relative;
transition: 0.5s;
background: radial-gradient(circle, rgba(67,61,96,1) 0%, rgba(72,64,103,1) 0%, rgba(22,15,51,1) 99%);
:hover{
    transform: translate3d(0px, -5%, 5px);
    transition: 0.5s;
}
@media screen and (max-width:480px) {
    :hover{
        transform: none;
    }
    margin: 0 auto;
}
`
export const Col2 = styled.div` 
width: 310px;
height: 511px;
border-radius: 40px;
text-align: center;
position: relative;
transition: 0.5s;
background: radial-gradient(circle, rgba(67,61,96,1) 0%, rgba(72,64,103,1) 0%, rgba(22,15,51,1) 99%);
:hover{
    transform: translate3d(0px, -5%, 5px);
    transition: 0.5s;
}
@media screen and (max-width:480px) {
    :hover{
        transform: none;
    }
    margin: 0 auto;
}
`
export const Col3 = styled.div` 
width: 310px;
height: 511px;
border-radius: 40px;
text-align: center;
position: relative;
transition: 0.5s;
background: radial-gradient(circle, rgba(67,61,96,1) 0%, rgba(72,64,103,1) 0%, rgba(22,15,51,1) 99%);
:hover{
    transform: translate3d(0px, -5%, 5px);
    transition: 0.5s;
}
@media screen and (max-width:480px) {
    :hover{
        transform: none;
    }
    margin: 0 auto;
}
`
export const Row = styled.div` 
display:flex;
justify-content: space-between;
align-items: center;
@media screen and (max-width:480px) {
    display: none;
}
`
export const Row1 = styled.div`
display:none ;
@media screen and (max-width:480px) {
    display: block;
}
`
export const Col = styled.div` 
width: 310px;
height: 511px;
border-radius: 40px;
text-align: center;
position: relative;
transition: 0.5s;
background: radial-gradient(circle, rgba(67,61,96,1) 0%, rgba(72,64,103,1) 0%, rgba(22,15,51,1) 99%);
:hover{
    transform: translate3d(0px, -5%, 5px);
    transition: 0.5s;
}
@media screen and (max-width:480px) {
    :hover{
        transform: none;
    }
    margin: 0 auto;
}
`
export const Elipse = styled(elipse)` 
margin-top: 20px;
`
export const Group = styled.img` 
position: absolute;
top: 34px;
left: 59px;
cursor: pointer;
`
Col.Title = styled.h4` 
font-weight: 700;
font-size: 24px;
color: #FFFFFF;
padding-top: 30px;
`
export const Border = styled(vector)``

Col.Text = styled.p` 
font-weight: 400;
font-size: 12px;
color: #FFFFFF;
width: 250px;
margin: 0 auto;
padding-top: 15px;
`
Col.Btn = styled.button` 
width: 154px;
height: 48px;
background: linear-gradient(90deg, rgba(161,129,226,1) 0%, rgba(171,165,210,1) 34%, rgba(204,192,217,1) 100%);
border: 0;
border-radius: 30px;
margin-top: 30px;
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
`


