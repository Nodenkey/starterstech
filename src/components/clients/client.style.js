import styled from "styled-components";
import {StemHeader} from "../stem/stem.style";
import {subText} from "../../utils/colors";

export const ClientsWrapper = styled.section`
width: 100%;
margin-bottom: 50px;
  .owl-nav span{
    font-size: 5rem;
  } 
  .owl-nav button{
    width: 10% !important;
    outline: none;
  } 
  .owl-nav button:hover{
    background-color: ${subText} !important;
  } 
`;
export const ClientsHeader = styled(StemHeader)`
`;
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  filter: grayscale(1);
  &:hover{
  filter: grayscale(0);
  }
`;
export const Logo = styled.img`
    object-fit: contain;
    border-radius: 10px;
`;