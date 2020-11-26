import React from "react";
import styled from "styled-components";

import H2 from "../../components/utility/H2";
import H3 from "../../components/utility/H3";

const ThirdContainerStyled = styled.div`
    text-align: left;
`;

const HomeDescriptionDiv = styled.div`
    background-color: #F0F0F0;
    border-radius: 5px;
`;

const ThirdContainer = ({width}) => 
  <ThirdContainerStyled width={width}>
    <br/>
    <HomeDescriptionDiv>
      <H2 color="black">
        Why Outsource your Medical Billing &amp; Collections?
      </H2>
      <H3 color="black">
        &nbsp;&nbsp;&nbsp;&nbsp;Having more time to serve your patients, avoiding countless hours billing, and having a professional committed to doing thing the right way are just a few benefits to outsourcing. Outsourcing to us will mean we work with your staff to ensure the correct information is input into the system in a timely manner the first time so we can obtain the highest reimbursement possible in the shortest period.
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;We'll ensure that the overall implementation process is handled smoothly and efficiently, because we remote into your EHR software system leaving you with the control. We double-check the data for accuracy and completeness before generating claims. Accurate and complete patient information is the first step to getting claims paid successfully.
      </H3>
    </HomeDescriptionDiv>
    <br/>
  </ThirdContainerStyled>

export default ThirdContainer;
