import React from "react";
import styled from "styled-components";

import H2 from "../../components/utility/H2";
import H3 from "../../components/utility/H3";

const ThirdContainerStyled = styled.div`
    text-align: left;
//   background: #2E3950;
//   margin-left: -15vw;
//   width: 100vw;
//   height: ${props => props.width > 1000 ? "30vh" : "20vh"};
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
`;

const ThirdContainer = ({width}) => 
  <ThirdContainerStyled width={width}>
    <br />
    <H2 color="black">
      Why Outsource your Medical Billing &amp; Collections?
    </H2>
    <H3 color="black">
      We ensure that the overall implementation process is handled smoothly and efficiently, because we remote into your EHR software system leaving you with the control.  We work with your staff to ensure that correct information is input into the system in a timely manner. We will work as closely as possible to do things correctly the first-time a round so we can obtain the highest reimbursement possible in the shortest period.  We will train your staff so that we can work as a team. We double-check the data for accuracy and completeness before generating claims. Accurate and complete patient information is the first step to getting claims paid successfully.
    </H3>
    <br/>
  </ThirdContainerStyled>

export default ThirdContainer;
