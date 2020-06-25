import styled from "styled-components";
import {StemHeader} from "../stem/stem.style";
import {subText} from "../../utils/colors";

export const ClientsWrapper = styled.section`
width: 100%;
`;
export const ClientsHeader = styled(StemHeader)`
`;
export const LogoContainer = styled.div`
background-color: ${subText};
`;
export const Logo = styled.img`
    object-fit: contain;
`;