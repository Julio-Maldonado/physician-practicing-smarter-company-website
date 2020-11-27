import React from "react";
import styled from "styled-components";

import H2 from "../../components/utility/H2";

import {isMobileSized} from "../../constants/helperFunctions";

const TitleContainerStyled = styled.div`
  background: #2E3950;
  padding-top: 1vh;
  margin-left: ${props => isMobileSized(props.width) ? "-7.5" : "-15"}vw;
  width: 100vw;
  height: ${props => props.width > 1000 ? "10vh" : "5vh"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = ({width}) => 
  <TitleContainerStyled width={width}>
    <H2 color="white">
      MEDICAL BILLING AND CODING SERVICES
    </H2>
  </TitleContainerStyled>

export default TitleContainer;
