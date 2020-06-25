import styled from "styled-components";
import {primaryBlue} from "../../utils/colors";

export const AspectWrapper = styled.section`
  width: 100%;
  position: relative;
  padding: 50px 5%;
  @media only screen and (min-width: 600px){
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10%;
  padding: 50px 10%;

  }
`;
export const Clipper = styled.div`
  position: absolute;
  z-index: -1;
  margin-top: 15%;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgba(2,55,212,0.81);
  margin-left: -80px;
`;
export const Clipper2 = styled(Clipper)`
  margin-left: 20px;
  width: 100px;
  height: 100px;
  background-color: ${primaryBlue};
  margin-top: calc(15% + 200px);
`;

export const AspectHeader = styled.h1`
  text-align: center;
  margin-top: 100px;
`;
export const AspectCard = styled.div`
  width: 100%;
  margin: 20px 0;
  border-radius: 10px;
  background: #FAFAFA;
  box-shadow:  7px 7px 14px #ebebeb, 
             -7px -7px 14px #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  padding: 30px 20px;
`;
export const AspectCardWrapper = styled.div`
  height: 500px;
  width: 100%;
`;
export const ImageContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
 `;