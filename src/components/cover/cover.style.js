import styled from "styled-components";
import {subText} from "../../utils/colors";

export const CoverWrapper = styled.div`
  width: 100%;
  padding: 150px 5% 0 5%;
  @media only screen and (min-width: 600px){
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 150px 10% 0 10%;
  }
`;
export const CoverTextWrapper =styled.div`
  button{
  display: block;
  margin: 0 auto;
  }
  @media only screen and (min-width: 600px){
  button{
  margin: 0;
  }
  }
`;
export const CoverMainText = styled.h1`
  margin-bottom: 30px;
  line-height: 3.5rem;
  text-align: center;
  @media only screen and (min-width: 600px){
  text-align: left;
  }
`;
export const CoverText = styled.p`
  color: ${subText};
  margin-bottom: 30px;
`;
export const ImageWrapper = styled.div`
  margin-top: 50px;
  @media only screen and (min-width: 600px){
  margin-top: 0;
  }
  @keyframes pliers{
  from{
    transform: translate(0);
    
  }
  to{
    transform: translate(-30px, -30px);
  }
  }
    @keyframes wire{
  from{
    transform: translate(0);
    
  }
  to{
    transform: translate(-30px, -30px);
  }
  }
  @keyframes board{
  from{
    transform: translate(0);
    
  }
  to{
    transform: translate(-30px, 0);
  }
  }
  svg{
  width: 90%;
  margin-left: 10%;
  }
  svg #pliers{
  animation: pliers 2s ease-in-out infinite alternate;
  }
  svg #motherboard{
  animation: board 2s ease-in-out infinite alternate;
  }
  svg #wires{
  animation: wire 2s ease-in-out infinite 1s alternate;
  }
`;