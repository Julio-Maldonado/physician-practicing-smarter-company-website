import React from "react";
import styled from "styled-components";

import H2 from "../../components/utility/H2";

import {determineScreenState} from "../../constants/helperFunctions";

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
      Contact us for your bulk PPE Needs
    </H2>
  </TitleContainerStyled>

export default TitleContainer;
