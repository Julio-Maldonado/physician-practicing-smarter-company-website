import React from "react";
import styled from "styled-components";

import H2 from "../../components/utility/H2";
import H3 from "../../components/utility/H3";

const SecondContainerStyled = styled.div`
  background: #2E3950;
  margin-left: -15vw;
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
      IS YOUR MEDICAL BILLING COSTING YOU TOO MUCH MONEY???
    </H2>
    <br/><br/>
    <H3 color="white">Then you need Physician Practicing Smarter</H3>
  </SecondContainerStyled>

export default SecondContainer;
