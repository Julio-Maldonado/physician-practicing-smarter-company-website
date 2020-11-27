import React from "react";
import styled from "styled-components";

import H2 from "../../components/utility/H2";
import H3 from "../../components/utility/H3";

const ServiceContainer1Styled = styled.div`
  text-align: left;
`;

const HomeDescriptionDiv = styled.div`
  background-color: #F0F0F0;
  border-radius: 5px;
`;

const ServiceContainer1 = ({width}) => 
  <ServiceContainer1Styled width={width}>
    <br/>
    <HomeDescriptionDiv>
      <H2 color="black">
        Accounts Receivables Collections and Consulting
      </H2>
      <H3 color="black">
        Some medical providers have a large sum of monies tied up in the ageing/accounts receivable; with insurance compensations far below what is expected – and deserved you will see short-pay’s. We will work your Accounts Receivables reports to collect monies owed to you.
      </H3>
    </HomeDescriptionDiv>
    <br/>
  </ServiceContainer1Styled>

export default ServiceContainer1;
