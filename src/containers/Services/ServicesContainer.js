import React from "react";
import styled from "styled-components";

import H2 from "../../components/utility/H2";
import H3 from "../../components/utility/H3";

const ServicesContainerStyled = styled.div`
  text-align: left;
`;

const HomeDescriptionDiv = styled.div`
  background-color: #F0F0F0;
  border-radius: 5px;
`;

const ServicesContainer = ({width}) =>
  <ServicesContainerStyled width={width}>
    <br/>
    <HomeDescriptionDiv>
      <H2 color="black">
        <b id="h2">We offer the following services:</b>
      </H2>
      <H3 color="black">
        - Full or Partial Billing Services<br/>
        - Coding services<br/>
        - Account Receivable Audits &amp; Collections<br/>
        - Aggressive Insurance Collections<br/>
        - Billing Organization<br/>
        - Remote billings and collections<br/>
        - Electronic Claims Resubmission's<br/>
        - Patient Billing &amp; Collections<br/>
        - Payment Posting<br/>
        - Details Monthly Reports<br/>
        - Physician Credentialing<br/>
        - Electronic Billing Setup<br/>
      </H3>
    </HomeDescriptionDiv>
    <br/>
  </ServicesContainerStyled>

export default ServicesContainer;
