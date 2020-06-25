import styled from "styled-components";

export const LoaderWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoaderCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(2,55,212,0.8);
  @keyframes move {
  from{
  transform: translateY(0);
  }
  to{
  transform: translateY(50px);
  }
  }
`;

export const LoaderOne = styled(LoaderCircle)`
  animation: move 0.8s linear infinite alternate both;
`;
export const LoaderTwo = styled(LoaderCircle)`
  position: absolute;
  z-index: 1;
  animation: move 0.8s linear infinite alternate-reverse both;
`;