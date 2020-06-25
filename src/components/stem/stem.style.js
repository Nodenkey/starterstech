import styled from "styled-components";
import {subText} from "../../utils/colors";

export const StemWrapper = styled.div`
  width: 100%;
  padding: 0 5%;
`;
export const StemHeader = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`;
export const SectionWrapper = styled.div`
  width: 100%;
  margin-bottom: 100px;
  display: grid;
  >:nth-child(2){
  grid-row: ${props => props.middle ? "auto" : 1};
  }
  @media only screen and (min-width: 768px){
  grid-template-columns: 50% 50%;
  grid-column-gap: 40px;
  >:nth-child(2){
  grid-row: auto;
  }
  }
`;
export const SectionTextWrapper = styled.div`
  width: 100%;
  padding: 5%;
  @media only screen and (min-width: 768px){
  }
`;
export const SectionHeader = styled.h2`
  margin-bottom: 20px;
`;
export const SectionText = styled.p`
  color: ${subText};
  line-height: 2rem;
  margin-bottom: 50px;
`;
export const VideoWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  position: relative;
  border-radius: 10px;
  box-shadow: -12px 10px 20px 0 rgba(0,0,0,0.20);
  &-4x3{
    padding-top: 75%;
  }
  @media only screen and (min-width: 768px){
    padding-top: 40.25%;
  }
`;
export const VideoPlayer = styled.iframe`
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;