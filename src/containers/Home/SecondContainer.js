import React from "react";
import styled from "styled-components";

import H2 from "../../components/utility/H2";
import H3 from "../../components/utility/H3";

import {isMobileSized} from "../../constants/helperFunctions";

const SecondContainerStyled = styled.div`
  background: #2E3950;
  margin-left: ${props => isMobileSized(props.width) ? "-7.5" : "-15"}vw;
  width: 100vw;
  height: ${props => props.width > 1000 ? "30vh" : "20vh"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SecondContainer = ({width}) => 
  <SecondContainerStyled width={width}>
    <H2 color="white">
      <b id="h2">IS YOUR MEDICAL BILLING COSTING YOU TOO MUCH MONEY???</b>
    </H2>
    {isMobileSized(width) ? null : <br/>}
    <br/>
    <H3 color="white">Then you need Physician Practicing Smarter</H3>
  </SecondContainerStyled>

export default SecondContainer;
