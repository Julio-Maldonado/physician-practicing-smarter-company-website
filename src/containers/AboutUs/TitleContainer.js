import React from "react";
import styled from "styled-components";

import H2 from "../../components/utility/H2";

import {isMobileSized, determineScreenState} from "../../constants/helperFunctions";

const titleHeightMap = {
  "wide": 10,
  "full": 9,
  "pacman": 8,
  "half": 8,
  "mobile": 7
};

const TitleContainerStyled = styled.div`
  background: #2E3950;
  padding-top: 1vh;
  margin-left: ${props => isMobileSized(props.width) ? "-7.5" : "-15"}vw;
  width: 100vw;
  height: ${props => titleHeightMap[determineScreenState(props.width)]}vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = ({width}) => 
  <TitleContainerStyled width={width}>
    <H2 color="white">
      OVER <b id="h2">30 YEARS OF EXPERIENCES</b> IN THE MEDICAL FIELD
    </H2>
  </TitleContainerStyled>

export default TitleContainer;
