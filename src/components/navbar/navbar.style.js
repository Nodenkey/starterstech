import styled from "styled-components";
import {primaryBlue} from "../../utils/colors";

export const NavBarWrapper = styled.nav`
  position: fixed;
  z-index: 9999;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:  0 10%;
  padding: 30px 5%;
  border-radius: 10px;
  background: #FAFAFA;
  box-shadow:  3px 3px 14px #ebebeb, 
             -7px -7px 14px #ffffff;
`;

export const NavBrand = styled.h4`
  color: ${primaryBlue};
`;

export const MenuContainer =styled.div`
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.h4`
  color: black;
  font-weight: bold;
  margin-left: 40px;
`;