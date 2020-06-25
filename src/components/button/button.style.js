import styled from "styled-components";
import {primaryBlue} from "../../utils/colors";

export const ButtonWrapper = styled.button`
  padding: 14px 24px;
  background: ${primaryBlue};
  border: none;
  color: white;
  font-size: 1.3rem;
  border-radius: 20px 0 20px 20px;
  cursor: pointer;
  &:hover{
  background-color: #003bff;
  }
`;